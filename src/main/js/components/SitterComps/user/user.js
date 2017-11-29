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
import Rater from 'react-rater';


export class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      ratingInfo: this.props.userId,
      self: true,
      rating: null
    };



    if(this.state.userId == this.props.userId){
      this.setState({self:false});
    }
    if(this.props.classification=='SITTER' && ratings){
      var ratings = [];
      ratings = this.props.ratings;
      console.log(ratings);
      alert('length ' + ratings.length);
      this.ret = 0;
      for(var i = 0; i < ratings.length; i++){
        this.ret += ratings[i].stars;
      }
      alert(this.ret);
      if(ratings.length != 0){
        this.ret = (this.ret/ratings.length).toFixed(2);
      }
      alert(this.ret);

      console.log('average rating'+ this.ret);
      console.log(this.props.ratings);

      this.setState({rating: this.ret});
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


  render() {
    const imageUrl= this.props.image + '?token=' + this.state.userToken;
    var bookingcontent = null;
    var ratingcontent = null;
    var rater = null;
    var citystatecontent = null;
    var self = true;
    if(this.props.type=='other'){
      self = false;
      console.log("you are not yourself");
      console.log(this.state.userId);
      console.log(this.props.key);
      //console.log(self);
    }
    if(this.props.classification == 'SITTER' && this.props.type =='other'){
      bookingcontent = < BookMe />;
    }
    if(this.props.classification == 'SITTER'){
      rater = <tr> <td><h3>Rating: </h3></td><td><br/> &nbsp;&nbsp;&nbsp;&nbsp;<Rater total={5} rating={this.ret} interactive={false} /><br/>{this.ret} of 5 Stars{' '}</td></tr>;
    }
    if(this.props.type=='other'){
      ratingcontent= <RateMe info={this.state.ratingInfo}/>;
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
      {rater}
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
