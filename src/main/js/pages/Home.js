import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
	render() {
		return (
			<div className="container padded">
				Welcome to the updated home page! Hooray!
				<ul>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/search">Search</Link></li>
					<li><Link to="/detail">Detail</Link></li>
					<li><Link to="/booking">Booking</Link></li>
					<li><Link to="/payment">Payment</Link></li>
					<li><Link to="/help">Help</Link></li>
					<li> nanananana </li>
					</ul>
			</div>
		);
	}
}