import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import {Pet} from 'js/components/Pet';

export class PetList extends React.Component {
	render() {
		return (
			<Panel className="petlist">
				<Pet/>
			</Panel>
		);
	}
}