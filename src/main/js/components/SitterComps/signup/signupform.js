import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import axios from 'axios';
export class Signupform extends React.Component {

  constructor(props){
      super(props);

      this.signUp = this.here.bind(this);
      this.setCookie = this.setCookie.bind(this);

      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    if (document.getElementById('sitter').checked) {
      this.setState({
        checked: true
      });
    }else{
      this.setState({
        checked: false
      });
    }
  }
  cityState(){
    /*
    $.ajax({
  url: "http://zip.elevenbasetwo.com",
  cache: false,
  dataType: "json",
  type: "GET",
  data: "zip=" + el.val(),
  success: function(result, success) {*/

    var zipcode = document.getElementById('userzip').value;
    //console.log(zipcode);
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if(isValidZip.test(zipcode)){
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
      const url1 = '&sensor=true';
      //console.log(url+zipcode+url1);
      axios.get(url+zipcode+url1)
        .then(response => {
          //('gotzip');
          console.log(response);
          var obj = response.data.results;
          //console.log(obj[0].formatted_address);
          var res = obj[0].formatted_address.split(' ');
          document.getElementById('usercity').value = res[0].slice(0,-1);
          document.getElementById('userstate').value =  res[1];
        })
        .catch(function(error) {
          console.log('Not a valid zipcode!');
          console.log(error);
        });
    }
  }

  setCookie(cname,cvalue,exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = 'expires=' + d.toGMTString();
      document.cookie = cname + '=' + cvalue + ';' + expires;
  }


  here() {
    //console.log('here');
    // Storing Field Values In Variables
    var firstname = document.getElementById('first').value;
    var lastname = document.getElementById('last').value;
    var email = document.getElementById('emailaddress').value;
    var password = document.getElementById('userpassword').value;
    var payrate = null;
    if(document.getElementById('sitter').checked){
      payrate = document.getElementById('payrate').value;
    }
    var zipcode = document.getElementById('userzip').value;
    var city =  document.getElementById('usercity').value;
    var state =  document.getElementById('userstate').value;
    const  image = 'https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif';


    var classification ='';
    var userId;
    var token;
    //console.log (firstname);
    //console.log (lastname);
    //console.log (email);
    //console.log (password);
    // Regular Expression For Email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Conditions
      if (re.test(email)) {
        //console.log('regex matched');
        if (document.getElementById('owner').checked || document.getElementById('sitter').checked) {
            //console.log('Something Checked!');
            var fullname =  firstname + ' ' + lastname;


            if(document.getElementById('owner').checked){
               classification = 'OWNER';
            }else{
               classification = 'SITTER';
            }
              //console.log (fullname);
              //console.log (classification);


            const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
            const url1 = 'http://group-3-tempeturs-backend.herokuapp.com/api';

            // Make a request for a user with a given ID
            var user = null;
            if(payrate!=null){
               user = {
                 'user': {
                     'name': fullname,
                     'email': email,
                     'image': image,
                     'classification': classification,
                     'rate': payrate,
                     'permissions': 'PROTECTED',
                     'address':{
                       'city': city,
                       'state': state,
                       'zipcode': zipcode
                     }


                 },
                 'password':password
               };
           }else{

             user = {
               'user': {
                   'name': fullname,
                   'email': email,
                   'image': image,
                   'classification': classification,
                    'permissions': 'PROTECTED',
                   'address':{
                     'city': city,
                     'state': state,
                     'zipcode': zipcode
                   }

               },
               'password':password
             };
           }

             axios.post(url+'/user/',user)
             .then(function (response) {
               console.log(response);
                userId = response.data.data.id;

                token = response.data.data.token;
                 console.log(token);

                 var d = new Date();
                 d.setTime(d.getTime() + (1*24*60*60*1000));
                 var expires = 'expires=' + d.toGMTString();
                 document.cookie = 'userid' + '=' + userId + ';' + expires;

                 d = new Date();
                 d.setTime(d.getTime() + (1*24*60*60*1000));
                 expires = 'expires=' + d.toGMTString();
                 document.cookie = 'usertoken' + '=' + token + ';' + expires;

                 //page redirect
                 window.location.replace('#/sitter/dashboard');
             })
             .catch(function (error) {
                 console.log('authentication error');
                 console.log(error);
             });

        }else{
          console.log('Nothing Checked!');
        } // end of if statement
      }// end of if statement
     else{
        console.log('test error');
        return false;
    } // end of else
  }//end of function



    render(){
      const content = this.state.checked
      ? <div className="form-group">
          <input id='payrate' required ref="payrate" type="number" placeholder="Hourly Rate"
                 className="form-control"/> <br /> <br />
      </div>
      : null;

        return (
            <div className="row">

                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">Its free and always will be.</p>
                </div>
                <form >
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input id='first' required ref="first_name" type="text" placeholder="First name"
                                       className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input id='last' required ref="last_name" type="text" placeholder="Last name"
                                       className="form-control"/>
                            </div>
                        </div>


                        <div className="form-group">
                            <input required id='emailaddress' type="text" placeholder="Email address" ref="email"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input required id='userpassword' type="password" placeholder="New password" ref="password"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input required id='userzip' onChange={this.cityState} type="number" placeholder="Zipcode" ref="zip_code"
                                   className="form-control"/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <input  id='usercity' readonly="readonly"  type="text" placeholder="City" ref="city"
                                   className="form-control"/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <input  id='userstate' readonly="readonly"  type="text" placeholder="State" ref="state"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            Classification:
                        </div>

                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <center><label>Owner</label></center><input id="owner"   onChange={ this.handleChange } name="classification" type="radio" value="OWNER" className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <center><label>Sitter</label></center><input id="sitter"  checked={ this.state.checked }
          onChange={ this.handleChange } name="classification" type="radio" value="SITTER" className="form-control"/>
                            </div>
                        </div>
                        { content }
                          <div className= "form-group">
                        <button type="button" className="btn btn-md btn-success" onClick={this.here}>Sign Up</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}
