import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, Button, NavbarBrand } from 'react-bootstrap';
import {UserNav} from 'js/components/UserNav';


export class Menu extends React.Component {
	render() {
		return (
			<div>
				<Navbar className="container-fluid" brand="TEMPETURS" inverse toggleNavKey={0}>
					<Navbar.Header>
						<NavbarBrand>
							<Link to="/">TEMPETURS</Link>
						</NavbarBrand>
					</Navbar.Header>

					<Nav className="navbar-right" eventKey={0}>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
					</Nav>

				</Navbar>

			</div>
		);
	}
}
