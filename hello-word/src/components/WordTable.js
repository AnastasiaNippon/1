import React, { useContext } from "react";
import { WordsContext } from "../context/WordsContext";

const WordTable = () => {
  const { words, loading, error, deleteWord, updateWord } = useContext(WordsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>{word.english}</td>
            <td>{word.russian}</td>
            <td>
              <button onClick={() => deleteWord(word.id)}>Delete</button>
              <button
                onClick={() =>
                  updateWord(word.id, { ...word, english: "Updated Word" })
                }
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
