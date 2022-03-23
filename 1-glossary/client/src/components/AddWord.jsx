import React from 'react';
import WordPopUp from './WordPopUp.jsx';

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {trigger: false, word: '', description: ''};
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
    this.setState({trigger: false, description: desc})
  }

  handleChange(event) {
    this.setState({word: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleAddBtn}>
          <input onChange={this.handleChange}></input>
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