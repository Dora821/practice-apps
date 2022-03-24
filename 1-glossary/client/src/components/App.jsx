import React from 'react';
import axios from 'axios';
import AddWord from './AddWord.jsx';
import Search from './Search.jsx';
import WordList from './WordList.jsx';
import testData from './ExampleData.js';
import {getAll, update, postWord, deleteWord} from './SendRequest.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {allWords: testData, wordsToRender:testData};
    this.handleSearch = this.handleSearch.bind(this);
    this.AddWord = this.AddWord.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.updateWord = this.updateWord.bind(this);
  }

componentDidMount() {
  getAll()
  .then(res => this.setState({allWords:res.data, wordsToRender:res.data}))
  .catch((err=>console.log(err)))
}

AddWord(obj) {
  // console.log('addWord function is triggered', obj);
  postWord(obj, (data => this.setState({allWords:data, wordsToRender:data})));
}

updateWord(obj) {
  const edits = prompt('Please enter new definition');
  // console.log(obj);
  obj.definition = edits;
  // console.log('afetr', obj);
  update(obj, (data => this.setState({allWords:data, wordsToRender:data})));
}


deleteOne(id) {
  // console.log('delete function is working, value passed form word', id);
  deleteWord(id)
  .then(()=>{
    // console.log('id',id);
    let existingData = this.state.allWords.filter(item=> item._id !== id);
    // console.log('existingData', existingData)
    this.setState({allWords:existingData, wordsToRender:existingData});
  })
  //   ()=>{
  //   // console.log('deletedobj', id)
  //   console.log('id', id);
  //   let existingData = this.state.allWords.filter(item=> {
  //     console.log(item._id);
  //     return item._id !== id;
  //   });
  //   console.log('existingData', existingData)
  //   this.setState({allWords:existingData, wordsToRender:existingData});
  // })
}

handleSearch(keyWord) {
  getAll(keyWord)
  .then((res => {
    // console.log('res', res);
    this.setState({allWords:[res.data], wordsToRender:[res.data]})
  }))
  .catch((err)=>console.log(err));
}

  render() {
    return(
      <div>
        <h1>My Glossary</h1>
        <div>
          <AddWord add={this.AddWord}/>
        </div>
        <div>
          <Search search={this.handleSearch} />
        </div>
        <div>
          <WordList update={this.updateWord} delete={this.deleteOne} render={this.state.wordsToRender} />
        </div>
      </div>
    )
  }
}

export default App;