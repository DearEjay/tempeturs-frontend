import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, Button, NavbarBrand } from 'react-bootstrap';

export class Menu extends React.Component {
	render() {
		return (
			<div>
				<Navbar brand="TEMPETURS" inverse toggleNavKey={0}>
					<Navbar.Header left >
						<NavbarBrand>
							<Link to="/">TEMPETURS</Link>
						</NavbarBrand>
					</Navbar.Header>

					<Nav eventKey={0}>
						<NavItem eventKey={1} href="#">Login</NavItem>
						<NavItem eventKey={2} href="#">Register</NavItem>
						<NavItem>
							<form className='navbar-form' action="">
								<input type='text' placeholder='email' />{' '}
								<input type='text' placeholder='password' />{' '}
								<Button bsStyle='success' type='submit'>Log in</Button>
							</form>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}