import { makeObservable, observable, action, runInAction } from "mobx";

class WordStore {
  words = [];
  isLoading = false;
  error = "";

  constructor() {
    makeObservable(this, {
      words: observable,
      isLoading: observable,
      error: observable,
      fetchWords: action,
      addWord: action,
      updateWord: action,
      deleteWord: action,
    });
  }

  async fetchWords() {
    this.isLoading = true;
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      const data = await response.json();
      runInAction(() => {
        this.words = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Ошибка загрузки данных.";
        this.isLoading = false;
      });
    }
  }

  async addWord(newWord) {
    try {
      const response = await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...newWord, tags: "", tags_json: "" }),
      });
      const addedWord = await response.json();
      runInAction(() => {
        this.words.push(addedWord);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Ошибка добавления слова.";
      });
    }
  }

  async updateWord(updatedWord) {
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWord),
      });
      runInAction(() => {
        this.words = this.words.map((word) =>
          word.id === updatedWord.id ? updatedWord : word
        );
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Ошибка обновления слова.";
      });
    }
  }

  async deleteWord(id) {
    try {
      await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: "POST",
      });
      runInAction(() => {
        this.words = this.words.filter((word) => word.id !== id);
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Ошибка удаления слова.";
      });
    }
  }
}

const wordStore = new WordStore();
export default wordStore;
