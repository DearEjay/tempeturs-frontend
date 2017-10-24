import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import axios from 'axios';
export class Signupform extends React.Component {

  constructor(props){
      super(props);

      this.signUp = this.here.bind(this);
  }



  here() {
    alert('here');
    // Storing Field Values In Variables
    var firstname = document.getElementById('first').value;
    var lastname = document.getElementById('last').value;
    var email = document.getElementById('emailaddress').value;
    var password = document.getElementById('userpassword').value;
    var classification ='';

    alert (firstname);
    alert (lastname);
    alert (email);
    alert (password);
    // Regular Expression For Email
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Conditions
      if (re.test(email)) {
        alert('regex matched');
        if (document.getElementById('owner').checked || document.getElementById('sitter').checked) {
            alert('Something Checked!');
            var fullname =  firstname + ' ' + lastname;


            if(document.getElementById('owner').checked){
               classification = 'OWNER';
            }else{
               classification = 'SITTER';
            }
              alert (fullname);
              alert (classification);


            const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
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
               var userId = response.data.data;
               var auth = {
                 'email': email,
                 'password': password
               };

               axios.post(url+'/user/login/',auth)
               .then(function (response) {
                 var token = response.data.data.token;
               })
               .catch(function (error) {
                 console.log(error);
               });

             })
             .catch(function (error) {
               console.log(error);
             });





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
