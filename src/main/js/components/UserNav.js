// this file contains the notifications and settings buttons for the user in the top right

import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';

export class UserNav extends React.Component {
	render() {
		return (
			<span className="usernav">
                <img className="menuicon" src="http://bit.ly/2yg0Kb3" />
			</span>
		);
	}
}