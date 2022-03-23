import React from 'react';
import WordPopUp from './WordPopUp.jsx';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input></input>
        <button>Add</button>
        <WordPopUp />
      </div>
    )
  }
}

export default AddWord;