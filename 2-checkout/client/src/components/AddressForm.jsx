import React from 'react';

class Address extends React.Component {
  constructor(props){
    super(props);
    this.state={add1:'', add2:'', city:'', curstate:'', zipcode:'', phone:''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const tarName=target.name;
    this.setState({[tarName]:target.value});
  }

  submitHandler(e){
    event.preventDefault();
    console.log('curAddressState', this.state);
    this.props.address(this.state);

  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>Address1</label>
          <input name="add1" onChange={this.handleInputChange}></input>
          <label>Address2</label>
          <input name="add2"  onChange={this.handleInputChange}></input>
          <label>City</label>
          <input name="city" onChange={this.handleInputChange}></input>
          <label>State</label>
          <input name="curstate" onChange={this.handleInputChange}></input>
          <label>zipcode</label>
          <input name="zipcode" onChange={this.handleInputChange}></input>
          <label >Phone Number</label>
          <input name="phone" onChange={this.handleInputChange}></input>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

export default Address;