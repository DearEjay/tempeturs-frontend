import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';

export class Pet extends React.Component {
	render() {
		return (
			<div>                
                <Thumbnail className="petcontainer" src="http://bit.ly/2xvEA7A" alt="242x200">
                    <h3>Fido</h3>
                    <p>3 year old Golden Retriever, likes peanut butter and long walks on the beach</p>
                    <p>
                    <Button bsStyle="default">Edit Pet</Button>
                    </p>
                </Thumbnail>
			</div>
		);
	}
}