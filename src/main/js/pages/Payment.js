import React from 'react';
import { Link } from 'react-router-dom';

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