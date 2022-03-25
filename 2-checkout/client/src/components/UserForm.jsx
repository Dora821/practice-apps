import React from 'react';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password:''};
    this.NameChange = this.NameChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.PwdChange= this.PwdChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  NameChange(e){
    this.setState({name: e.target.value});
  }

  EmailChange(e){
    this.setState({email: e.target.value});
  }
  PwdChange(e){
    this.setState({password: e.target.value});
  }
  submitHandler(){
    event.preventDefault();
    this.props.account(this.state);

  }

  render(){
    return (
    <div>
      <form onSubmit={this.submitHandler}>
        <label>Name</label>
        <input onChange={this.NameChange}></input>
        <label>Email</label>
        <input onChange={this.EmailChange}></input>
        <label>Password</label>
        <input onChange={this.PwdChange}></input>
        <input type='submit' value='submit'/>
      </form>
    </div>
    )
  }
}

export default Account;