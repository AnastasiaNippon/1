import React from "react";
import "./WordTable.css";

const WordTable = ({ words, editingWord, setEditingWord, saveWord, deleteWord }) => {
  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Перевод</th>
          <th>Транскрипция</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) =>
          editingWord && editingWord.id === word.id ? (
            <tr key={word.id}>
              <td>
                <input
                  value={editingWord.english}
                  onChange={(e) =>
                    setEditingWord({ ...editingWord, english: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  value={editingWord.russian}
                  onChange={(e) =>
                    setEditingWord({ ...editingWord, russian: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  value={editingWord.transcription}
                  onChange={(e) =>
                    setEditingWord({ ...editingWord, transcription: e.target.value })
                  }
                />
              </td>
              <td>
                <button onClick={saveWord}>Сохранить</button>
                <button onClick={() => setEditingWord(null)}>Отмена</button>
              </td>
            </tr>
          ) : (
            <tr key={word.id}>
              <td>{word.english}</td>
              <td>{word.russian}</td>
              <td>{word.transcription}</td>
              <td>
                <button onClick={() => setEditingWord(word)}>Редактировать</button>
                <button onClick={() => deleteWord(word.id)}>Удалить</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default WordTable;
