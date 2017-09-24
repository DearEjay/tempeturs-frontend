import React from 'react';
import { Link } from 'react-router-dom';

export class Detail extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the detail page for owners and sitters. 
				<p>SO MUCH DETAIL</p>
			</div>
		);
	}
}