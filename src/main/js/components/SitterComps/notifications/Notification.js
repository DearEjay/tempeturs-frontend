import React from 'react';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';
import axios from "axios";


export class Notification extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			userToken: this.getCookie('usertoken'),
            userId: this.getCookie('userid'),
            booking: null,
            bookingname: '',
            accepted:false,
            rejected:false
        };
        
        this.dismiss = this.dismiss.bind(this); 
        this.accept = this.accept.bind(this); 
        this.reject = this.reject.bind(this); 
        
        var config = {
            headers: { 'Authorization': "Bearer " + this.state.userToken }
        };

        const url = "https://group-3-tempeturs-backend.herokuapp.com/api";
        
        axios
        .get(url + "/user/" + this.state.userId + "/bookings/" + this.props.refersToID, config)
        .then(response => {
            console.log('got the booking');
            console.log(response);
            this.setState({booking:response.data.data});

            console.log('booking');
            console.log(this.state.booking);

            if(this.state.booking.status == "ACCEPTED"){
                this.setState({accepted:true});
            }
            
            // GET THE USER ASSOCIATED WITH A BOOKING
            axios
            .get(url + "/user/" + this.state.booking.ownerID, config)
            .then(response => {
                console.log('got the user associated with the booking');
                console.log(response);
                this.setState({bookingname:response.data.data.name});
            })
            .catch(function(error) {
                console.log("error! in notification (get booking, get user)");
                console.log("error! in notification (get booking, get user)");
                console.log(error);
            });
        })
        .catch(function(error) {
           console.log("error! in notification (get booking)");
           console.log(error);
        });

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
    
    dismiss(){

    console.log('dismiss!');

    var config = {
        headers: { 'Authorization': "Bearer " + this.state.userToken }
      };
  
      const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

        axios
        .delete(url + "/user/" + this.state.userId + "/notifications/" + this.props.id, config)
        .then(response => {
            console.log('deleted the notification');
            console.log(response);
            window.location = '#/sitter/user/profile';
        })
        .catch(function(error) {
          console.log("error! in notification");
          console.log(error);
        });


    }

    accept(){
        console.log('accept');
        // TODO
        // change status to accepted
        // update the unavailable days
        // remind the owner

        var booking = this.state.booking;
        
        booking.status = 'ACCEPTED';
        
        var config = {
            headers: { 'Authorization': "Bearer " + this.state.userToken }
          };
      
          const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

        axios
        .put(url+'/user/'+this.state.userId+'/bookings/'+booking.id, booking, config)
        .then(response => {
            console.log('the booking was accepted');         
            console.log(response);           
        })
        .catch(function(error){
            console.log('error! in notification -> put booking');
            console.log(error);
        });

        

        this.setState({accepted:true});
    }

    reject(){
        console.log('reject');

        var rating = {
            "stars": 0,
            "comments": "CANCELLED BOOKING",
            "fromUserID": this.state.userId
        };

        var config = {
            headers: { 'Authorization': "Bearer " + this.state.userToken }
          };
      
          const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

          var booking = this.state.booking;

          booking.status = 'CANCELED';

          console.log(booking);
          console.log(this.state.userToken);
          console.log(this.state.userId);

          this.setState({rejected:true}); 
          console.log('rejection?');
          console.log(this.state.rejected);

          // update the booking to canceled
          axios
          .put(url+'/user/'+this.state.userId+'/bookings/'+booking.id, booking, config)
          .then(response => {
              console.log('the booking was cancelled');              
          })
          .catch(function(error){
              console.log('error! in notification -> put booking');
              console.log(error);
          });

          // add a rating of zero to the user
          axios
          .post(url + "/user/" + this.state.userId + "/ratings/", rating, config)
          .then(response => {
              console.log("successfully added a rating");
              console.log("successfully added a rating");
              console.log(response);              
          })
          .catch(function(error) {
              console.log("error! in notification -> post cancel rating");
              console.log(error);
          });    
          
          // delete the notification
          axios
          .delete(url + "/user/" + this.state.userId + "/notifications/" + this.props.id, config)
          .then(response => {
              console.log('deleted the notification');
              console.log(response);
              
          })
          .catch(function(error) {
              console.log("error! in notification");
              console.log(error);
          });
    
          

          
    }

	render() {
        var content = null;
        var buttons = null; 

        if(this.props.type == "RATING"){
            content = <div onClick={this.dismiss}>New Rating! ~ <span id="notificationdismiss">Click to dismiss</span></div>;
         }else if(this.props.type == "BOOKING"){

             buttons = 
             <div>
                 <br/>
                 <Button bsStyle='success' onClick={this.accept}>Accept</Button>&nbsp;
                 <Button bsStyle='danger' onClick={this.reject}>Reject</Button>
             </div>;

            if(!this.state.accepted && !this.state.rejected){
                content = <div>Booking from {this.state.bookingname}<br/>{buttons}</div>;
            }else if(this.state.rejected){
                content = <div>Booking Rejected for {this.state.bookingname}</div>;
            }else{
                content = <div>Booking Accepted for {this.state.bookingname}</div>;
            }
         }
        

		return (
			<Panel>
                {content}
			</Panel>
		);
	}
}
