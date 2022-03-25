import React from 'react';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <h1>Please Confirm the Following Information</h1>
        <div>
          <h4>Account Information</h4>
          <div>
            <span>Name: {this.props.summary.userData.username} </span>
            <span>Email: {this.props.summary.userData.email} </span>
          </div>
        </div>
        <div>
          <h4>Address Information</h4>
          <div>
            <span>Address:{this.props.summary.userData.address1 + ', ' + this.props.summary.userData.address2 + ', ' + this.props.summary.userData.city + ', ' + this.props.summary.userData.curState + ', ' + this.props.summary.userData.zipcode}  </span>
            <span>Phone Number: {this.props.summary.userData.phoneNum} </span>
          </div>
        </div>
        <div>
          <h4>Billing Information</h4>
          <div>
            <span>Credit Card: {this.props.summary.userData.creditCard} </span>
          </div>
          <button onClick={this.props.btn}>Confirm</button>
        </div>
      </div>
    )
  }
};
export default Confirmation;