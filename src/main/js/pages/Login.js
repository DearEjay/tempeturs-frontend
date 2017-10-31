import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import 'styles/main.scss';
import 'styles/login.scss';

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = event => {
		// things will happen
	}

	render() {
		return (
			<div className ="FullLogin">
				<input type="button" value="Back" onclick="history.back(-1)" />
				<h1>Tempeturs Login</h1>
				<h2>WOOF WOOF</h2>
				<div className="Login">
					<form onSubmit={this.handleSubmit}>
						<FormGroup controlId="email" bsSize="large">
							<ControlLabel>Email</ControlLabel>
							<FormControl
								autoFocus
								type="email"
								placeholder="Email"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup controlId="password" bsSize="large">
							<ControlLabel>Password</ControlLabel>
							<FormControl
								value={this.state.password}
								onChange={this.handleChange}
								type="password"
								placeholder="Password"
							/>
						</FormGroup>
						<Button
							block
							bsSize="large"
							disabled={!this.validateForm()}
							type="submit"
						>
							Login
						</Button>
					</form>
				</div>
			</div>
		);
	}
}