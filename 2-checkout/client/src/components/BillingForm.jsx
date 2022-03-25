import React from 'react';

class Billing extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <form>
          <label>Credit Card</label>
          <input></input>
          <label>Expiration</label>
          <input></input>
          <label>CVV</label>
          <input></input>
          <label>Billing ZipCode</label>
          <input></input>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

export default Billing;