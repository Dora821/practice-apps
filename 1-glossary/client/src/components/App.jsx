import React from 'react';
import axios from 'axios';
import AddWord from './AddWord.jsx';
import Search from './Search.jsx';
import WordList from './WordList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>My Glossary</h1>
      </div>


    )
  }
}

export default App;