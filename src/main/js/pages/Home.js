import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

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

export class OwnerDashboard extends React.Component {
	render(){
		return (
			<div>
			</div>
		);
	}
}

export class SitterDashboard extends React.Component {
	render(){
		return (
			<div>
			</div>
		);
	}
}

export class BothDashboard extends React.Component {
	render(){
		return (
			<div>
			</div>
		);
	}
}

// OWNER components
/**
 * includes:
 * find a sitter / view booking buttons
 * pets
 */

 // SITTER components
 /**
  * includes:
  accept / decline buttons

  */

  // BOTH componenets
  /**
   * new notifications
   * ratings
   * personal information
   */

export class Notifications extends React.Component {
	render(){
		return(
			<div>
			</div>
		);
	}
}

export class Ratings extends React.Component {
	render(){
		return(
			<div>
			</div>
		);
	}
}

export class PersonalInfo extends React.Component {
	render(){
		return(
			<div>
			</div>
		);
	}
}