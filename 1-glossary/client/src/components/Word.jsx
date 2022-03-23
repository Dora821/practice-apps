import React from 'react';

const Word = (props) => {
  return (
    <div className="sigle-word">
      <div className="wordName">{props.word.word}</div>
      <div className="wordDef">{props.word.definition}</div>
    </div>
  )
}

export default Word;