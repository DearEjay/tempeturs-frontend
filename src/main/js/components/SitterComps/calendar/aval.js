
import React from 'react';
import BookingCalendar from 'react-booking-calendar';
import { Button, Modal, Panel } from 'react-bootstrap';
import axios, { post } from "axios";


const bookings = [
  new Date(2017,9, 1),
  new Date(2017, 9, 2),
  new Date(2017, 9, 3),
  new Date(2017, 9, 9),
  new Date(2017, 9, 10),
  new Date(2017, 9, 11),
  new Date(2017, 9, 12),
];

export class Aval extends React.Component {

  constructor(){
    super();
    this.formatDate = this.formatDate.bind(this);
    this.here = this.here.bind(this);
    this.state = {
        userToken: this.getCookie('usertoken'),
        userId: this.getCookie('userid'),
        availability: []
    };
    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    var config = {
      headers: { 'Authorization' : 'Bearer ' + this.getCookie('usertoken') }
    };
    axios.get(url + '/user/' + this.getCookie('userid'), config)
    .then(response => {
      this.setState({availability:response.data.data.availability.unavailableDays});
      console.log('availability for  account success');

    })
    .catch(function(error) {
      console.log('error!');
      console.log(error);
    });

  this.getCookie = this.getCookie.bind(this);

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
  formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
  }

  here(){
    var start = new Date(document.getElementById('startdate').value);
    var end = new Date(document.getElementById('enddate').value );
    //console.log(start );
    //console.log(end);
    var startdate = new Date(start.getTime() + Math.abs(start.getTimezoneOffset()*60000));
    var enddate = new Date(end.getTime() + Math.abs(end.getTimezoneOffset()*60000));
    //console.log(startdate);
    //console.log(enddate);
    var dateArray = new Array();
    var currentDate = startdate;
    while (currentDate <= enddate) {
        dateArray.push(new Date (currentDate));
        var date = new Date(currentDate.valueOf());
        date.setDate(date.getDate() + 1);
        currentDate = date;
    }
    console.log(dateArray);

    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    var config = {
      headers: { 'Authorization' : 'Bearer ' + this.state.userToken }
    };
    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      var user = response.data.data;

      var currentDate = startdate;
      while (currentDate <= enddate) {
          this.state.availability.push(new Date(currentDate));
          dateArray.push(new Date (currentDate));
          var date = new Date(currentDate.valueOf());
          date.setDate(date.getDate() + 1);
          currentDate = date;
      }

      user.availability.unavailableDays = this.state.availability;
      console.log(user);
        console.log(this.state.availability);

      axios.put(url + '/user/' + this.state.userId,user,config)
      .then(response => {
          console.log('availability updated!');
          console.log(response);
          location.reload();
      })
      .catch(function(error) {
          console.log('error!');
          console.log(error);
      });


    })
    .catch(function(error) {
      console.log('getting user info error!');
      console.log(error);
    });
  }

  render(){
    return (
      <div>
      <center><h2>Please enter your unavailable days.</h2></center>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label><b>Date Start</b></label>
      <input type="date" placeholder="Start Date" id="startdate" required/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label><b>Date End</b></label>
      <input type="date" placeholder="Start End" id="enddate" required/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Button type="submit" onClick={this.here} bsStyle="success" >Submit</Button>


      <BookingCalendar bookings={this.state.availability} />
      </div>
    );
  }
}
