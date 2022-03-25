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
            <span>Name:  </span>
            <span>Email: </span>
          </div>
        </div>
        <div>
          <h4>Address Information</h4>
          <div>
            <span>Address:  </span>
            <span>Phone Number: </span>
          </div>
        </div>
        <div>
          <h4>Billing Information</h4>
          <div>
            <span>Credit Card:  </span>
          </div>
        </div>
      </div>
    )
  }
};
export default Confirmation;