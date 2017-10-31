import React from 'react';
import { Button, Modal, Panel } from 'react-bootstrap';

export  class BookMe extends React.Component {

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
                    <Button bsStyle="primary" onClick={this.open}>Book Me!</Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3>Book This Sitter</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel>

                          <form>
                            <div >

                              <label><b>Date Start</b></label>
                              <br/>
                              <input type="date" placeholder="Start Date" name="startdate" required/>
                              < br />< br />

                              <label><b>Date End</b></label>
                              <br/>
                              <input type="date" placeholder="Start End" name="enddate" required/>
                              < br />< br />

                              <label><b>Which Pets?</b></label>
                              <br/>
                              {/* I don't know how I'd query from the database */}
                              <select name="pets" required multiple>
                                  <option value="fido">Fido</option>
                                </select>
                                <br/>< br />

                              <label><b>Pickup or At-Home Sitting?</b></label>
                              <br/>
                              <select name="typeofsitting" required>
                                <option value="pickup">Pickup</option>
                                <option value="athome">At-Home</option>
                                </select>
                                <br/>< br />

                              <label><b>Additional Info:</b></label>
                              <input type="text" placeholder="Enter anything else we need to know!" name="additional" />
                              <br />< br />

                              <div class="clearfix">
                                <Button type="button" onClick={this.close} bsStyle="danger">Cancel</Button>
                                <Button type="submit" bsStyle="success" >Book Now</Button>
                              </div>
                            </div>
                          </form>

                        </Panel></Modal.Body>

                    </Modal>
                </div>

    		);
	}
}
