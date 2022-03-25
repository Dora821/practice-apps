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
  this.confirmButtonHandler = this.confirmButtonHandler.bind(this);
}
checkIfNewUser(){

}

mainBtnHandler(){
  this.setState({renderMainPage:false, renderAccount:true});
}

accountBtnHandler(obj){
  console.log('account prop is being called');
  this.setState({userData:{
    username: obj.name,
    email: obj.email,
    passwd: obj.password,
    address1: this.state.userData.address1,
    address2: this.state.userData.address2,
    city: this.state.userData.city,
    curState: this.state.userData.curState,
    zipcode: this.state.userData.zipcode,
    phoneNum:this.state.userData.phoneNum,
    creditCard:this.state.userData.creditCard,
    expiration:this.state.userData.expiration,
    cvv:this.state.userData.cvv,
    billingZip:this.state.userData.billingZip
  }, renderAccount:false, renderAddress:true})
}

AddressBtnHandler(obj){
  this.setState({userData: {
      username:this.state.userData.username,
      email: this.state.userData.email,
      passwd: this.state.passwd,
      address1: obj.add1,
      address2: obj.add2,
      city: obj.city,
      curState: obj.curstate,
      zipcode: obj.zipcode,
      phoneNum:obj.phone,
      creditCard:this.state.userData.creditCard,
      expiration:this.state.userData.expiration,
      cvv:this.state.userData.cvv,
      billingZip:this.state.userData.billingZip
  }, renderAddress:false, renderCC:true})
}

CCBtnHandler(obj){
  this.setState({userData: {
    username:this.state.userData.username,
    email: this.state.userData.email,
    passwd: this.state.passwd,
    address1: this.state.userData.address1,
    address2: this.state.userData.address2,
    city: this.state.userData.city,
    curState: this.state.userData.curState,
    zipcode: this.state.userData.zipcode,
    phoneNum:this.state.userData.phoneNum,
    creditCard:obj.creditCard,
    expiration:obj.expiration,
    cvv:obj.cvv,
    billingZip:obj.billingZip
    },renderCC:false, renderConfirm:true})
}

confirmButtonHandler(){
  console.log('confirm button is working')
  this.setState({renderConfirm:false, renderMainPage:true})
}

render() {
  return (
    <div>
      {this.state.renderMainPage &&<h1>Welcome to Checkout</h1>}
      {this.state.renderMainPage && <MainHome create={this.mainBtnHandler}/>}
      {this.state.renderAccount && <Account account={this.accountBtnHandler}/>}
      {this.state.renderAddress && <Address address={this.AddressBtnHandler}/>}
      {this.state.renderCC && <Billing ccBtn={this.CCBtnHandler} />}
      {this.state.renderConfirm && <Confirmation btn={this.confirmButtonHandler} summary={this.state}/>}
    </div>
  )
}};

export default App;