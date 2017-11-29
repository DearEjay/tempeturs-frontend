import React from 'react';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';

import Rater from 'react-rater';

export class Rating extends React.Component {

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
        const comments = this.props.comments;
		return (
			<div>
                <Rater interactive={false} total={5} rating={this.props.stars} />
                <br />
                <b>Comments:</b> {comments}
			</div>

		);
	}
}
