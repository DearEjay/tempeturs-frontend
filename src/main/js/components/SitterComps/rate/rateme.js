import React from 'react';
import { Button, Modal, Panel } from 'react-bootstrap';
import StarRating from 'js/components/SitterComps/rate/StarRating.js';

export  class RateMe extends React.Component {

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
              <div>
                    <Button bsStyle="primary" onClick={this.open}>Rate Me!</Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3>Rate Me</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel>
                            <StarRating />
                        </Panel></Modal.Body>

                    </Modal>
                </div>

    		);
	}
}
