import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'bootstrap';

export class Menu extends React.Component {
	render() {
		return (
			<Navbar>
				HELLO
				<Navbar.Header>
					<Navbar.Brand>
						TEMPETURS
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">Link</NavItem>
					<NavItem eventKey={2} href="#">Link</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export class Home extends React.Component {
	render() {
		return (
			<div className="container padded">
				Welcome to the updated home page!
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

export class Register extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the registration page. MY FAVE PAGE
			</div>
		);
	}
}

export class Login extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the login page. 
			</div>
		);
	}
}

export class Search extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the search page. 
			</div>
		);
	}
}

export class Detail extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the detail page for owners and sitters. 
			</div>
		);
	}
}

export class Booking extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the booking page. 
			</div>
		);
	}
}

export class Payment extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the payment page.
			</div>
		);
	}
}

export class Help extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the help page. 
			</div>
		);
	}
}