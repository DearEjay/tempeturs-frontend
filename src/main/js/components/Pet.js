import React from 'react';
import { Thumbnail, Button, Modal, Panel } from 'react-bootstrap';

export class Pet extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

	render() {

		return (
                <Thumbnail className="petcard" src="http://bit.ly/2xvEA7A" alt="242x200">
                    <h3>Fido</h3>
                    <p>3 year old Golden Retriever, likes peanut butter and long walks on the beach</p>
                    <p>
                    <Button bsStyle="default" onClick={this.open}>Edit Pet</Button>
                    </p>

                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Pet Information</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            hello
                        </Modal.Body>

                        <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                    </Modal>
                </Thumbnail>
    		);
	}
}