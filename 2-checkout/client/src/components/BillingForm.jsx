import React from 'react';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state={creditCard:'', expiration: '', cvv:'', billingZip: ''};
    this.handleccChange = this.handleccChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleccChange(event){
    const target = event.target;
    const targetName = target.name;
    this.setState({[targetName]: target.value});
  }
  submitHandler() {
    event.preventDefault()
    this.props.ccBtn(this.state);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Credit Card</label>
          <input name="creditCard" onChange={this.handleccChange}></input>
          <label>Expiration</label>
          <input name="expiration" onChange={this.handleccChange}></input>
          <label>CVV</label>
          <input name="cvv" onChange={this.handleccChange}></input>
          <label>Billing ZipCode</label>
          <input name="billingZip" onChange={this.handleccChange}></input>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default Billing;