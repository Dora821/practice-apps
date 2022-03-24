import React from 'react';

const Word = (props) => {
  return (
    <div className="sigle-word">
      <div className="wordName">{props.word.word}</div>
      <div className="wordDef">{props.word.definition}</div>
      <button onClick={()=>props.update_word(props.word)}>Edit </button>
      <button onClick={()=>{props.del_word(props.word._id)}}>Delete</button>
    </div>
  )
}

export default Word;