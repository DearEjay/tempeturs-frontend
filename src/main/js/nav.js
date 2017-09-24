import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, MenuItem, Button, NavbarBrand } from 'react-bootstrap';

export class Menu extends React.Component {
	render() {
		return (
			<div>
				<Navbar brand="TEMPETURS" inverse toggleNavKey={0}>
					{/* <NavbarBrand>
						<Navbar.Header>
							<Link to="/">TEMPETURS</Link>
						</Navbar.Header>
					</NavbarBrand> */}
					<Navbar.Header left>
						<NavbarBrand>
							<Link to="/">TEMPETURS</Link>
						</NavbarBrand>
					</Navbar.Header>
					{/* <Nav eventKey={0}>

					</Nav> */}
					<Nav right eventKey={0}>
					<MenuItem eventKey={1} href="#">Link</MenuItem>
					<MenuItem eventKey={1} href="#">Link</MenuItem>
					<MenuItem eventKey={1} href="#">Link</MenuItem>
					<form className='navbar-form' action="">
							<input type='text' placeholder='email' />{' '}
							<input type='text' placeholder='password' />{' '}
							<Button bsStyle='success' type='submit'>Log in</Button>
						</form>
					</Nav>
				</Navbar>
			</div>
		);
	}
}