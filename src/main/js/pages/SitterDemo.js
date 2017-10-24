import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLayout } from 'js/components/SitterComps/layouts/home.js';


export class Sitter extends React.Component {
	render() {
		return (

			<div>
				<p><Link to="/">Back</Link></p>
					<HomeLayout />
			</div>

		);
	}
}
