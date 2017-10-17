import React from 'react';
import { Link } from 'react-router-dom';
import { Panel,Button } from 'react-bootstrap';

export class OwnerButtons extends React.Component {
	render() {
		return (
			<Panel className="ownerbuttonpanel text-center">
                    <Button className="ownerbut" bsSize="large" bsStyle="primary">Find a Sitter</Button>
                    <Button className="ownerbut" bsSize="large" bsStyle="primary">View Bookings</Button>
            </Panel>
		);
	}
}