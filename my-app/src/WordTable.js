import React, { useState } from 'react';
import './WordTable.css';

const WordTable = () => {
  const [words, setWords] = useState([
    { word: 'Пример1', translation: 'Example1', isEditing: false },
    { word: 'Пример2', translation: 'Example2', isEditing: false }
  ]);

  const toggleEdit = (index) => {
    const newWords = [...words];
    newWords[index].isEditing = !newWords[index].isEditing;
    setWords(newWords);
  };

  const saveWord = (index) => {
    toggleEdit(index);
  };

  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            {word.isEditing ? (
              <>
                <td><input type="text" defaultValue={word.word} /></td>
                <td><input type="text" defaultValue={word.translation} /></td>
                <td>
                  <button onClick={() => saveWord(index)}>Сохранить</button>
                  <button onClick={() => toggleEdit(index)}>Отмена</button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.translation}</td>
                <td>
                  <button onClick={() => toggleEdit(index)}>Редактировать</button>
                  <button>Удалить</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
