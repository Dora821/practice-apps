import React from 'react';
import MainHome from './Homepage.jsx';
import Account from './UserForm.jsx';
import Address from './AddressForm.jsx';
import Billing from './BillingForm.jsx';
import Confirmation from './Confirmation.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData : {
      username: '',
      email: '',
      passwd: '',
      address1: '',
      address2: '',
      city: '',
      curState: '',
      zipcode: '',
      phoneNum:'',
      creditCard:'',
      expiration:'',
      cvv:'',
      billingZip:''
    },
    renderMainPage:true,
    renderAccount:false,
    renderAddress:false,
    renderCC:false,
    renderConfirm:false
  }
  this.checkIfNewUser = this.checkIfNewUser.bind(this);
  this.mainBtnHandler = this.mainBtnHandler.bind(this);
  this.accountBtnHandler = this.accountBtnHandler.bind(this);
  this.AddressBtnHandler = this.AddressBtnHandler.bind(this);
  this.CCBtnHandler = this.CCBtnHandler.bind(this);
}
checkIfNewUser(){

}

mainBtnHandler(){
  this.setState({renderMainPage:false, renderAccount:true});
}

accountBtnHandler(obj){
  this.setState({userData:{
    username: obj.name,
    email: obj.email,
    passwd: obj.password
  }, renderAccount:false, renderAddress:true})
}

AddressBtnHandler(){
  this.setState({renderAddress:false, renderCC:true})
}

CCBtnHandler(){
  this.setState({renderCC:false, renderConfirm:true})
}

render() {
  return (
    <div>
      <h1>Welcome to Checkout</h1>
      {this.state.renderMainPage && <MainHome create={this.mainBtnHandler}/>}
      {this.state.renderAccount && <Account account={this.accountBtnHandler}/>}
      {this.state.renderAddress && <Address address={this.AddressBtnHandler}/>}
      {this.state.renderCC && <Billing creditCard={this.CCBtnHandler} />}
      {this.state.renderConfirm && <Confirmation />}
    </div>
  )
}};

export default App;