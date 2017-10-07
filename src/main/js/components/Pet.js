import React from 'react';
import { Thumbnail } from 'react';

export class Pet extends React.Component {
	render() {
		return (
			<div>
                hello
                <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
			</div>
		);
	}
}