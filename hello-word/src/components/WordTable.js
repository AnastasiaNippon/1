import { useState } from 'react';
import './WordTable.css';

const WordTable = ({ words }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedWord, setEditedWord] = useState({});
  const [hasErrors, setHasErrors] = useState(false);

  const startEditing = (index) => {
    setEditIndex(index);
    setEditedWord({ ...words[index] });
    setHasErrors(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord((prev) => ({ ...prev, [name]: value }));
    validateFields({ ...editedWord, [name]: value });
  };

  const validateFields = (word) => {
    const isEmpty = Object.values(word).some((field) => field.trim() === '');
    setHasErrors(isEmpty);
  };

  const saveChanges = () => {
    if (hasErrors) {
      alert('Ошибка: Все поля должны быть заполнены!');
    } else {
      console.log('Сохранено слово:', editedWord);
      setEditIndex(null);
    }
  };

  return (
    <table className="word-table">
      <thead>
        <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={word.id}>
            {editIndex === index ? (
              <>
                <td>
                  <input
                    name="word"
                    value={editedWord.word || ''}
                    onChange={handleInputChange}
                    className={editedWord.word ? '' : 'error'}
                  />
                </td>
                <td>
                  <input
                    name="transcription"
                    value={editedWord.transcription || ''}
                    onChange={handleInputChange}
                    className={editedWord.transcription ? '' : 'error'}
                  />
                </td>
                <td>
                  <input
                    name="translation"
                    value={editedWord.translation || ''}
                    onChange={handleInputChange}
                    className={editedWord.translation ? '' : 'error'}
                  />
                </td>
                <td>
                  <input
                    name="theme"
                    value={editedWord.theme || ''}
                    onChange={handleInputChange}
                    className={editedWord.theme ? '' : 'error'}
                  />
                </td>
                <td>
                  <button onClick={saveChanges} disabled={hasErrors}>
                    Сохранить
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.transcription}</td>
                <td>{word.translation}</td>
                <td>{word.theme}</td>
                <td>
                  <button onClick={() => startEditing(index)}>Редактировать</button>
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
