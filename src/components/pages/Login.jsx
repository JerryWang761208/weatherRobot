import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as firebase from 'firebase';
import getWeather from '../../getWeather.js';
import config from '../../config.js';



var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      name: '',
      fbid: '',
      submitBtnName:'FB Login',
      city:'Tainan',
      isSubmitted: false
    };
  },

  mixins: [History],

  render: function(){
  
    return(
        <div className="login-page ng-scope ui-view"> 
          <div className="row"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
              <img src={require("../../common/images/flat-avatar.png")} className="user-avatar" /> 
              <h1>Facebook Robot </h1> 
              <form role="form" onSubmit={this.handleClick} className="ng-pristine ng-valid"> 
                <div className="form-content"> 
                  <div className="form-group"> 
                    <input type="text" value={this.state.name} className="form-control input-underline input-lg" placeholder="Name" /> 
                  </div> 
                  <div className="form-group"> 
                    <input type="text" value={this.state.fbid} className="form-control input-underline input-lg" placeholder="FB_ID" /> 
                  </div> 
                  <div className="form-group">
                    <select className="form-control" value={this.state.city} onChange={this.handleChange}>
                      <option value="Keelung">基隆</option>
                      <option value="Taipei">台北</option>
                      <option value="Taoyuan">桃園</option>
                      <option value="Hsinchu">新竹</option>
                      <option value="Taichung">台中</option>
                      <option value="Tainan">台南</option>
                      <option value="Kaohsiung">高雄</option>
                      <option value="Hualien">花蓮</option>
                      <option value="Taitung">台東</option>
                    </select>
                  </div>
                </div> 
                <button type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">{this.state.submitBtnName}</button> 
              </form> 
            </div> 
          </div> 
        </div>
      
    );
      

  },

  handleChange: function(e) {
  
    this.setState({
      city: e.target.value
    });
    
  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    e.preventDefault();
    this.props.history.pushState(null, '/dashboard/overview');
    
    // this.transitionTo('dashboard');

    return false;

  },

  handleSubmit: function(self){
    const account = {
      email: config.FB_ACCOUNT,
      password: config.FB_PW
    };
    //write in to firebase
    console.log('tests'+self.state.name);
    //name fbid city
    
    const firebaseRef = firebase.database().ref();
    const peopleRef = firebaseRef.child('people');
    peopleRef.on('person_add',(snapshot)=>{
      //call eather robot
    });

    let newPeopleRef = peopleRef.push()
    newPeopleRef.set({
      name:self.state.name,
      city:self.state.city,
      fbid:self.state.fbid
    });
    console.log('key:'+newPeopleRef.key);
  },


  componentDidMount: function() {
    
    
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1796462227274813',
      
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use version 2.1
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
    FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    }.bind(this));
  }.bind(this);

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
},

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
testAPI: function(self) {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name + response.id);
  self.setState({
    name:response.name,
    fbid:response.id,
    submitBtnName:'submit',
    isSubmitted:true
  });

  if(self.state.isSubmitted){
    self.handleSubmit(self);
  }
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
  });
},

// This is called with the results from from FB.getLoginStatus().
statusChangeCallback: function(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    this.testAPI(this);
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }
},

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
checkLoginState: function() {
  FB.getLoginStatus(function(response) {
    this.statusChangeCallback(response);
  }.bind(this));
},

handleClick: function() {
  FB.login(this.checkLoginState());
},

});

export default LoginPage;