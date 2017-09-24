import React from 'react';
import { Link } from 'react-router-dom';

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