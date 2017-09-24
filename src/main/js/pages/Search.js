import React from 'react';
import { Link } from 'react-router-dom';

export class Search extends React.Component {
	render() {
		return (
			<div className="container padded">
				<p><Link to="/">Back</Link></p>
				This is the search page. 
			</div>
		);
	}
}