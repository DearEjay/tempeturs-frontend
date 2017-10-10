import React from 'react';
import { Thumbnail, Button, Modal } from 'react-bootstrap';

export class Pet extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            showModal: false
        }
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
            <div>
                <Thumbnail className="petcontainer" src="http://bit.ly/2xvEA7A" alt="242x200">
                    <h3>Fido</h3>
                    <p>3 year old Golden Retriever, likes peanut butter and long walks on the beach</p>
                    <p>
                    <Button bsStyle="default" onClick={this.open}>Edit Pet</Button>
                    </p>
                </Thumbnail>

                <Modal show={this.state.showModal} onHide={this.close}>
                    hello
                </Modal>
            </div>
		);
	}
}