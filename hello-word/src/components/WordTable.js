import React, { useContext, useState } from "react";
import { WordsContext } from "../context/WordsContext";

const WordTable = () => {
  const { words, updateWord, deleteWord, addWord } = useContext(WordsContext);
  const [editingId, setEditingId] = useState(null);
  const [editedWord, setEditedWord] = useState({ word: "", translation: "", transcription: "" });
  const [newWord, setNewWord] = useState({ word: "", translation: "", transcription: "" });
  const [error, setError] = useState("");

  const handleEdit = (id, word, translation, transcription) => {
    setEditingId(id);
    setEditedWord({ word, translation, transcription });
  };

  const handleUpdate = () => {
    if (!editedWord.word || !editedWord.translation || !editedWord.transcription) {
      setError("All fields must be filled out.");
      return;
    }
    updateWord(editingId, editedWord);
    setEditingId(null);
    setEditedWord({ word: "", translation: "", transcription: "" });
    setError("");
  };

  const handleAddWord = () => {
    if (!newWord.word || !newWord.translation || !newWord.transcription) {
      setError("All fields must be filled out to add a new word.");
      return;
    }
    addWord(newWord);
    setNewWord({ word: "", translation: "", transcription: "" });
    setError("");
  };

  return (
    <div>
      <h2>Word List</h2>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Transcription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.length > 0 ? (
            words.map((word) =>
              editingId === word.id ? (
                <tr key={word.id}>
                  <td>
                    <input
                      type="text"
                      value={editedWord.word}
                      onChange={(e) => setEditedWord({ ...editedWord, word: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedWord.translation}
                      onChange={(e) => setEditedWord({ ...editedWord, translation: e.target.value })}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedWord.transcription}
                      onChange={(e) =>
                        setEditedWord({ ...editedWord, transcription: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={word.id}>
                  <td>{word.word}</td>
                  <td>{word.translation}</td>
                  <td>{word.transcription}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleEdit(word.id, word.word, word.translation, word.transcription)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteWord(word.id)}>Delete</button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="4">No words available.</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Add New Word</h2>
      <div>
        <input
          type="text"
          placeholder="Word"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <input
          type="text"
          placeholder="Translation"
          value={newWord.translation}
          onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Transcription"
          value={newWord.transcription}
          onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
        />
        <button onClick={handleAddWord}>Add Word</button>
      </div>
    </div>
  );
};

export default WordTable;
