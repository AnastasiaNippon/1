const WordList = ({ words }) => (
    <div>
      {words.map((word) => (
        <WordCard key={word.id} word={word} />
      ))}
    </div>
  );
  export default WordList;
  