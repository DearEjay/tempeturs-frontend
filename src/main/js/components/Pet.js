import React from 'react';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';

export class Pet extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			userToken: this.getCookie('usertoken'),
			userId: this.getCookie('userid'),
		};

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
		return (
			<div>
			<center><Image src={imageUrl} responsive /></center>
			<center><h3>{this.props.name}</h3>
			<p>A {this.props.age} year old {this.props.sex} {this.props.type}.</p>

			</center>
			</div>

		);
	}
}
