
import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';


export class Header extends React.Component {


  setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires=' + d.toGMTString();
        document.cookie = cname + '=' + cvalue + ';' + expires;
  }

  here(){
    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var auth = {
      'email': email,
      'password': password
    };

    axios.post(url+'/user/login/',auth)
    .then((response) => {

      var token = response.data.data.token;
      console.log(token);
      var userId = response.data.data.id;
      console.log(userId);

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
      toast.error('Invalid email address or password. Please try again!', {
          position: toast.POSITION.TOP_RIGHT
      });
      //console.log(error);
    });



  }
  render(){
    return (
      <div>
      <span className="navbar-react"><i className="fa fa-facebook"></i>

      <ul><img src="http://i66.tinypic.com/347cfft.png" width="300" height="60"/></ul>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <form id="signin" className="navbar-form navbar-right" role="form">

      <div className="input-group">
      <span className="input-group-addon"><i className="fa fa-user"></i></span>
      <input required id="email" type="email" className="form-control" ref="email" name="email"
      placeholder="Email Address"/>
      </div>

      <div className="input-group">
      <span className="input-group-addon"><i className="fa fa-user"></i></span>
      <input required id="password" type="password" className="form-control" ref="password" name="password"
      placeholder="Password"/>
      </div>

      <button type="button" onClick={this.here} className="btn btn-primary">Login</button>
      <br/>
      </form>
      </div>
      </span>
      </div>
    );
  }
}
