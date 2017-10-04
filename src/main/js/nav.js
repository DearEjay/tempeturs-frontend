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

					<Nav right eventKey={0}>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
						<MenuItem eventKey={1} href="#">Link</MenuItem>
						
					</Nav>
					
				</Navbar>
				
			</div>
		);
	}
}