import React from 'react';

class Address extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <label>Address1</label>
          <input></input>
          <label>Address2</label>
          <input></input>
          <label>City</label>
          <input></input>
          <label>State</label>
          <input></input>
          <label>ZipCode</label>
          <input></input>
          <label>Phone Number</label>
          <input></input>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

export default Address;