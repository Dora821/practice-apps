import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input value={this.state.value} onChange={this.handleChange}></input>
        <input type='submit'></input>
      </form>
    )
  }
}