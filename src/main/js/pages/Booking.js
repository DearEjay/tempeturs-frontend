import React from 'react';
import { Link } from 'react-router-dom';

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