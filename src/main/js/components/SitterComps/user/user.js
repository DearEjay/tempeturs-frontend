import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { FileInput } from 'react-file-input';
import { BookMe } from 'js/components/SitterComps/bookme/bookme.js';
// import { StarRating } from 'js/components/SitterComps/rate/StarRating.js';
import { RateMe } from 'js/components/SitterComps/rate/rateme.js';
import {RatingList} from 'js/components/SitterComps/rate/ratinglist.js';
import axios, {get} from 'axios';

export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      self: true
    };

    this.insertParam = this.insertParam.bind(this);
    this.getRating = this.getRating.bind(this);
    
    if(this.state.userId == this.props.userId){
      this.setState({self:false});
    }

  }
  insertParam(key, value){
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('?');

    var i=kvp.length; var x; while(i--)
    {
      x = kvp[i].split('=');

      if (x[0]==key)
      {
        x[1] = value;
        kvp[i] = x.join('=');
        break;
      }
    }
  }

  getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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

  getRating(){
    var config = {
      headers: { Authorization: "Bearer " + this.state.userToken }
    };

    const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

    var ratings = [];

    axios
      .get(url + "/user/" + this.props.userId + "/ratings/", config)
      .then(response => {
        console.log(response);
        console.log("got the ratings");
        ratings = response.data.data;
      })
      .catch(function(error) {
        alert("error!");
        console.log(error);
      });

      var ret = 0;
    for(var i = 0; i < ratings.length; i++){
      ret += ratings[i].stars;
    }
    if(ratings.length != 0){
      ret = ret/ratings.length;
    }

    return ret;
  }

  render() {
    const imageUrl= this.props.image + '?token=' + this.state.userToken;
    var bookingcontent = null;
    var ratingcontent = null;
    var citystatecontent = null;
    var self = true;
    if(this.state.userId != this.props.userId && this.props.userId){
      self = false;
      console.log("you are not yourself");
      console.log(this.state.userId);
      console.log(this.props.userId);
    }
    if(this.props.classification == 'SITTER' && !self){
      bookingcontent = < BookMe />;
    }
    if(self){
      ratingcontent= <RateMe info={this.props.userId}/>;
    }
    if(this.props.city != null || this.props.state != null){

      citystatecontent = <h1>{this.props.city}, {this.props.state} </h1>;
    }

    
    return (
      <div className='row'>
      <div className='col-md-2 hidden-xs' align='center'>
      <Image
      src={imageUrl}
      responsive
      />
      <div>
      <label>
      <div className='inputWrapper' />
      </label>
      </div>
      </div>

      <div className='col-md-9 col-xs-9'>
      <h1>
      <i>{this.props.name}</i>
      </h1>

      <table className='table table-user-information'>
      <tbody>
      <tr>
      <td>
      {citystatecontent}
      </td>
      <tr>
      <td>
      <h1>
      {bookingcontent}
      </h1>
      </td>
      <td>
      <h1>
      
      {ratingcontent}
      </h1>
      </td>
      </tr>
      </tr>
      </tbody>
      </table>

      <br />
      <h2>
      <i>Personal Information</i>
      </h2>
      <table>
      <tbody>
      <tr>
      <td>
      <h3>Pay Rate:</h3>
      </td>
      <td>
      <br /> &nbsp;&nbsp;&nbsp;&nbsp;${this.props.rate}{' '}
      </td>
      </tr>
      <tr>
      <td>
      <h3>Classification: </h3>
      </td>
      <td>
      <br /> &nbsp;&nbsp;&nbsp;&nbsp;{this.props.classification}{' '}
      </td>
      </tr>
      <tr>
      <td>
      <h3>Rating: </h3>
      </td>
      <td>
      <br /> &nbsp;&nbsp;&nbsp;&nbsp;{this.getRating} of 5 Stars{' '}
      </td>
      </tr>
      <tr>
        <td>
        <br /><br />  &nbsp;&nbsp;&nbsp;&nbsp; <RatingList id={this.props.userId} />
        </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}
