import React from 'react';
import WordPopUp from './WordPopUp.jsx';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {trigger: false, word: ''};
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddBtn(event) {
    event.preventDefault();
    console.log('getting clicked', this);
    this.setState({trigger: true});

  }

  getDescription(desc) {
    console.log('addWord this.state.value')
    let target = {'word': this.state.word, 'definition': desc};
    console.log('target', target);
    this.props.add(target);
    this.setState({trigger: false, word: ''})
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleAddBtn}>
          <input value={this.state.word} onChange={this.handleChange}></input>
          <button>Add</button>
        </form>
        {this.state.trigger && <WordPopUp getDesc={this.getDescription}/>}
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <input></input>
  //       <button>Add</button>
  //      {this.state.trigger && <WordPopUp  />
  //     </div>
  //   )
  // }
}

export default AddWord;