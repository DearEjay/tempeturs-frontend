import React from 'react';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';
import axios from "axios";


export class Notification extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			userToken: this.getCookie('usertoken'),
            userId: this.getCookie('userid')
        };
        
        this.dismiss = this.dismiss.bind(this);      

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
            location.reload();
        })
        .catch(function(error) {
          alert("error! in notification");
          console.log(error);
        });


    }

	render() {
        const type = "NEW "+this.props.type;
		return (
			<Panel onClick={this.dismiss}>
                {type} !!! <span id="notificationdismiss">Click to dismiss</span>
			</Panel>
		);
	}
}
