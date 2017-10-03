import React from 'react';
import { Link } from 'react-router-dom';
import {Menu} from 'js/nav';
import {LoginModal} from 'js/components/LoginModal';
import {Button } from 'react-bootstrap';
import axios from 'axios';

export class Home extends React.Component {

	constructor(props) {
        super(props);
        
		this.state = {
            apiResult: {}
        };
        this.apiCall = this.apiCall.bind(this);
	}
	
	apiCall() {
		const url = 'http://localhost:8080/api';
		// Make a request for a user with a given ID 
			
		axios.get(url+'/user/1')
		.then( (response) => {
			//console.log(response);
			this.setState({ apiResult: response });
		})
		.catch( (response) => {
			//console.log(response);
			this.setState({ apiResult: response });
		});

		
    }

	render() {
		return (
			<div className="container padded">
				{<Menu />}
				<h1>Welcome to the updated home page! Hooray!</h1>
				<ul>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/search">Search</Link></li>
					<li><Link to="/detail">Detail</Link></li>
					<li><Link to="/booking">Booking</Link></li>
					<li><Link to="/payment">Payment</Link></li>
					<li><Link to="/help">Help</Link></li>
				</ul>
				<LoginModal/>
				<Button bsStyle="primary" bsSize="large" onClick={this.apiCall}>Make API Call</Button>
				<p>API Call Return:<pre>{JSON.stringify(this.state.apiResult.data)}</pre></p>
			</div>
		);
	}
}