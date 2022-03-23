import React from 'react';
import axios from 'axios';
import AddWord from './AddWord.jsx';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import testData from './ExampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allWords: testData, wordsToRender:testData};
    this.handleSearch = this.handleSearch.bind(this);
  }

handleSearch(keyWord) {
  console.log('keyWord', keyWord);
}

  render() {
    return(
      <div>
        <h1>My Glossary</h1>
        <div>
          <AddWord />
        </div>
        <div>
          <Search search={this.handleSearch} />
        </div>
        <div>
          <WordList render={this.state.wordsToRender} />
        </div>
      </div>
    )
  }
}

export default App;