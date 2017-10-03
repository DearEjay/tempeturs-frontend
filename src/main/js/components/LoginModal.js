import React from 'react';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import FaIconPack from 'react-icons/lib/fa';

export class LoginModal extends React.Component {

    constructor(props) {
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
        console.log('open');
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="large" onClick={this.open}>Sign Up</Button>
            
                <Modal show={this.state.showModal} onHide={this.close} bsSize="large" >
                    <Modal.Header>
                        <Modal.Title>Sign Up or Log In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                        <Tab eventKey={1} title="Sign Up">
                            <p>Sign up here</p>
                        </Tab>
                        <Tab eventKey={2} title="Sign In">
                            <p>Sign in here</p>
                        </Tab>
                    </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        );
      
    }
  }