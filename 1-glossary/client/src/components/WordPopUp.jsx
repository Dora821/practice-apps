import React from 'react';

class WordPopUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.getDesc(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <label>Enter Description</label>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Close</button>
      </div>
    )
  }
}

export default WordPopUp;