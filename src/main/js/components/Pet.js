import React from 'react';
import { Button, Modal, Panel, Image } from 'react-bootstrap';

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
              <div>
                <Image src="http://bit.ly/2xvEA7A" responsive />
                    <center><h3>Fido</h3>
                    <p>3 year old Golden Retriever, likes peanut butter and long walks on the beach</p>
                    <p>
                    <Button bsStyle="default" onClick={this.open}>Add Pet</Button>
                    </p>

                    <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3>Add Pet</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel width="400px">

                          <form>
                            <div >

                              <label><b>Name</b></label>
                              <input type="text" placeholder="Name" name="petname" required/>
                              < br />

                              <label><b>Breed</b></label>
                              <input type="text" placeholder="Breed" name="breed" required/>
                              < br/>

                              <label><b>Weight (lbs.)</b></label>
                              <input type="text" placeholder="Weight (lbs.)" name="weight" required />
                              <br />

                              <label><b>Age (years)</b></label>
                              <input type="text" placeholder="Age (years)" name="ageyears" required />
                              <br />

                              <label><b>Age (months)</b></label>
                              <input type="text" placeholder="Age (months)" name="agemonths" required />
                              <br />

                              <div class="clearfix">
                                <Button type="button"  onClick={this.close} class="cancelbtn">Cancel</Button>
                                <Button type="submit" class="signupbtn">Sign Up</Button>
                              </div>
                            </div>
                          </form>
                        </Panel></Modal.Body>

                    </Modal>
                    </center>
                    </div>

    		);
	}
}
