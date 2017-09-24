import React from 'react';
import { Link } from 'react-router-dom';

export class Help extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the help page. 
			</div>
		);
	}
}