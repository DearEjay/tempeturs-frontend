
import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios';


export class NavBar extends React.Component {

  constructor() {
    super();

    this.state = {
      userName: ''
    };

    var userId = this.getCookie('userid');
    var userToken = this.getCookie('usertoken');
    var userName = 'bull';
    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

    var config = {
      headers: {'Authorization': 'Bearer ' + userToken}
    };

    axios.get(url+'/user/'+userId, config)
    .then((response) => {
        //alert('success');
        this.setState({userName:  response.data.data.name});
        //alert('Name:' + this.state.userName);
        //alert(typeof this.state.userName);
        console.log(response);
    })
    .catch(function (error) {
        alert('errors');
        console.log(error);
    });


  }

  getCookie(cname) {
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return '';
  }

  clearCookies(){
    document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'usertoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  }
  render(){

    var name = ' ' + this.state.userName;
    return (
      <div className="navbar navbar-blue navbar-fixed-top">

            <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="#/sitter/dashboard" className="navbar-brand logo">
                  </a>
            </div>
            <nav className="collapse navbar-collapse" role="navigation">
                <form onSubmit={this.handleSubmit}  className="navbar-form navbar-left">
                    <div className="input-group input-group-sm bs-example">
                        <input ref="searchText" type="text" className="form-control tt-query" id="typeahead" placeholder="Search..." />
                        <div className="input-group-btn searchBtn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/sitter/dashboard"><i className="fa fa-home"></i> News Feed</a>
                    </li>
                </ul>


                <ul  className="nav navbar-nav navbar-right">
                    <DropdownButton  bsStyle="default" className="glyphicon glyphicon-user"  title={name} noCaret id="dropdown-no-caret">
                    <li><a href="#/sitter/user/editprofile"><MenuItem eventKey="1" active >Edit Profile</MenuItem></a></li>
                    <li><a href="#/sitter" onClick={this.clearCookies}><MenuItem eventKey="2"  active>Logout</MenuItem></a></li>
                    </DropdownButton>
                </ul>
            </nav>
</div>
       );
     }
}
