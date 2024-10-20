const WordTable = ({ words }) => (
    <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Transcription</th>
          <th>Translation</th>
          <th>Theme</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <tr key={word.id}>
            <td>{word.word}</td>
            <td>{word.transcription}</td>
            <td>{word.translation}</td>
            <td>{word.theme}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default WordTable;
  