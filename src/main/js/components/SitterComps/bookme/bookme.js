import React from 'react';
import axios, { post } from "axios";

import { Button, Modal, Panel } from 'react-bootstrap';

export  class BookMe extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            userToken: this.getCookie('usertoken'),
  					userId: this.getCookie('userid'),
            sitterId: this.getCookie('otherid'),
            pets: [],
            sitterSchedule: this.getCookie('sitterschedule')
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.action = this.action.bind(this);
        this.formatDate = this.formatDate.bind(this);

        const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
  			var config = {
  				headers: { Authorization: 'Bearer ' + this.state.userToken }
  			};
        axios.get(url + '/user/' + this.state.userId +'/pets/', config)
  				.then(response => {
  					alert('users pets fetched!');
  					console.log(response);
  					this.setState({pets:response.data.data});

  				})
  				.catch(function(error) {
  					alert('users pets not fetched!');
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

    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
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
    action(){
      var start = new Date(document.getElementById('startdate').value);
      var end = new Date(document.getElementById('enddate').value );
      var startdate = new Date(start.getTime() + Math.abs(start.getTimezoneOffset()*60000));
      var enddate = new Date(end.getTime() + Math.abs(end.getTimezoneOffset()*60000));

      console.log(this.formatDate(startdate));
      console.log(this.formatDate(enddate));

      var select1 = document.getElementById("petoptions");
      var selected1 = [];
      for (var i = 0; i < select1.length; i++) {
        if (select1.options[i].selected) selected1.push(select1.options[i].value);
      }
      console.log(selected1);

      var location = document.getElementById('location').value;
      var comment = document.getElementById('comment').value;
      var locationop = false;
      console.log(selected1);
      console.log(location);
      console.log(comment);

      if(location =='pickup'){
        locationop = true;
      }

      var booking = {
        'sitterID': this.state.sitterId,
        'ownerID':  this.state.userId,
        'startDate': startdate,
        'endDate':  enddate,
        'pickup':  locationop,
        'pet_ids': selected1
      };
      const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
      //ownner id in url
      // both are created

      var config = {
        headers: { Authorization: 'Bearer ' + this.state.userToken }
      };
      //post to  sitter
      axios.post(url+'/user/'+this.state.userId+'/bookings/',booking, config)
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
          console.log(error);
      });

    }
	render() {
    const data = this.state.pets;
    const pets = data.map((d) => <option value={d.id}>{d.name}</option> );

		return (
              <div>
                    <Button bsStyle="primary" onClick={this.open}>Book Me!</Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3>Book This Sitter</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel>

                          <form>
                            <div >

                              <label><b>Date Start</b></label>
                              <br/>
                              <input type="date" id='startdate' placeholder="Start Date" name="startdate" required/>
                              < br />< br />

                              <label><b>Date End</b></label>
                              <br/>
                              <input type="date" id='enddate' placeholder="Start End" name="enddate" required/>
                              < br />< br />

                              <label><b>Which Pets?</b></label>
                              <br/>
                              {/* I don't know how I'd query from the database */}
                              <select name="pets" id='petoptions' required multiple>
                                {pets}
                                </select>
                                <br/>< br />

                              <label><b>Pickup or At-Home Sitting?</b></label>
                              <br/>
                              <select name="typeofsitting" id='location' required>
                                <option value="pickup">Pickup</option>
                                <option value="athome">At-Home</option>
                                </select>
                                <br/>< br />

                              <label><b>Additional Info:</b></label>
                              <input type="text" id='comment' placeholder="Enter anything else we need to know!" name="additional" />
                              <br />< br />

                              <div class="clearfix">

                                <Button type="button" onClick={this.action} bsStyle="success" >Book Now</Button>
                                <Button type="button" onClick={this.close} bsStyle="danger">Cancel</Button>
                              </div>
                            </div>
                          </form>

                        </Panel></Modal.Body>

                    </Modal>
                </div>

    		);
	}
}
