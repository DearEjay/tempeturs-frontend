
import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { Account } from 'js/components/SitterComps/profile/account.js';
import { OtherAccount } from 'js/components/SitterComps/profile/otheraccount.js';
import BookingCalendar from 'react-booking-calendar';
import axios, { post } from "axios";

const bookings = [
  new Date(2017,10, 1),
  new Date(2017, 11, 2),
  new Date(2017, 11, 3),
  new Date(2017, 11, 9),
  new Date(2017, 11, 10),
  new Date(2017, 11, 11),
  new Date(2017, 11, 12),
];

export class OtherProfileLayout extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          userToken: this.getCookie('usertoken'),
          userId: this.getCookie('otherid'),
          availability: []
      };

      var config = {
        headers: { 'Authorization' : 'Bearer ' + this.state.userToken }
      };

      const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
      console.log('otherid ');
      console.log(this.state.userId);
      console.log(this.state.userToken);

      axios.get(url + '/user/' + this.state.userId, config)
      .then(response => {
          console.log('hello');
          console.log(response);
        this.setState({availability:response.data.data.availability.unavailableDays});
        console.log('availability for other account success');

        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = 'expires=' + d.toGMTString();
        document.cookie = 'sitterschedule' + '=' + response.data.data.availability.unavailableDays + ';' + expires;

      })
      .catch(function(error) {
        console.log('error!');
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

    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                        < NavBar />

                              < Sider />



                              <Grid>
                              < br/>< br/>< br/>< br/>
                              <Row middle="xs">
                              <Col md={6} offset={{ md: 3 }}>
                              < OtherAccount />
                              </Col>
                              <Col className="two"xs={6} md={4}>
                              <h3> <center> Availability Calendar </center> </h3>
                              <Row>   <BookingCalendar bookings={this.state.availability} clickable={true} /> </Row>
                              </Col>
                              </Row>

                              </Grid>


                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}
