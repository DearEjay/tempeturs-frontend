import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLayout } from 'js/components/SitterComps/layouts/home';
import { Layout } from 'js/components/SitterComps/layouts/layout';


export class Sitter extends React.Component {
	render() {
		return (
			<div className="container padded">
				{/*<p><Link to="/">Back</Link></p>*/}
				This is the Sitter Demo page.
			</div>
		);
	}
}
     
