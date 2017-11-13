import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import axios from 'axios';
export class Signupform extends React.Component {

  constructor(props){
      super(props);

      this.signUp = this.here.bind(this);
      this.setCookie = this.setCookie.bind(this);
  }


  setCookie(cname,cvalue,exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = 'expires=' + d.toGMTString();
      document.cookie = cname + '=' + cvalue + ';' + expires;
  }


  here() {
    //alert('here');
    // Storing Field Values In Variables
    var firstname = document.getElementById('first').value;
    var lastname = document.getElementById('last').value;
    var email = document.getElementById('emailaddress').value;
    var password = document.getElementById('userpassword').value;
    var classification ='';
    var userId;
    var token;
    //alert (firstname);
    //alert (lastname);
    //alert (email);
    //alert (password);
    // Regular Expression For Email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Conditions
      if (re.test(email)) {
        //alert('regex matched');
        if (document.getElementById('owner').checked || document.getElementById('sitter').checked) {
            //alert('Something Checked!');
            var fullname =  firstname + ' ' + lastname;


            if(document.getElementById('owner').checked){
               classification = 'OWNER';
            }else{
               classification = 'SITTER';
            }
              //alert (fullname);
              //alert (classification);


            const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
            const url1 = 'http://group-3-tempeturs-backend.herokuapp.com/api';

            // Make a request for a user with a given ID


            var user = {
               'user': {
                   'name': fullname,
                   'email': email,
                   'classification': classification
               },
               'password':password
             };


             axios.post(url+'/user/',user)
             .then(function (response) {
                  userId = response.data.data;

                  alert('ID: ' + userId );
                  var auth = {
                     'email': email,
                     'password': password
                  };

                  return axios.post(url+'/user/login/',auth);
             })
             .then((response) => {
                 token = response.data.data.token;
                 alert(token);

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
                 alert('database error');
                 alert(error);
             });



             //authen

             /*
            alert(auth.email + ' ' + auth.password);

            axios.post(url+'/user/login/',auth)
                 .then(function (response) {

                   var token = response.data.data.token;
                   alert(token);

                   //cookies
                   //{this.setCookie('userid', userId, 1);}
                   //{this.setCookie('usertoken', token, 1);}

                   //page redirect
                   window.location.replace('#/sitter/dashboard');
                 })
                 .catch(function (error) {
                   alert('auth error');
                   console.log(error);
            });
              */

        }else{
          alert('Nothing Checked!');
        } // end of if statement
      }// end of if statement
     else{
        Window.alert('test error');
        return false;
    } // end of else
  }//end of function



    render(){
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
                            Classification:
                        </div>

                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <center><label>Owner</label></center><input id="owner" name="classification" type="radio" value="OWNER" className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <center><label>Sitter</label></center><input id="sitter" name="classification" type="radio" value="SITTER" className="form-control"/>
                            </div>
                        </div>

                        <button type="button" className="btn btn-md btn-success" onClick={this.here}>Sign Up</button>

                    </div>
                </form>
            </div>
        );
    }
}
