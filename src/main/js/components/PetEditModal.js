// import React from 'react';
// import { Modal, Button, Tabs, Tab, Form, ControlLabel, FormGroup, Col, FormControl } from 'react-bootstrap';
// import FaIconPack from 'react-icons/lib/fa';

// import axios from 'axios';


// export class PetEditModal extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             showModal: false,
//             loginResult: {}
//         };

//         this.open = this.open.bind(this);
//         this.close = this.close.bind(this);
//         this.submitForm = this.submitForm.bind(this);
//     }

//     getInitialState() {
//         return { showModal: false };
//     }
    
//     close() {
//         this.setState({ showModal: false });
        
//     }
    
//     open() {
//         this.setState({ showModal: true });
//         console.log('open');
//     }

//     submitForm() {

//         /*const url = 'http://localhost:8080/api';
// 		// Make a request for a user with a given ID 
			
// 		axios.get(url+'/user/1')
// 		.then( (response) => {
// 			//console.log(response);
// 			this.setState({ loginResult: response });
// 		})
// 		.catch( (response) => {
// 			//console.log(response);
// 			this.setState({ loginResult: response });
// 		});*/
//         //this.setState({ showModal: false });
        
//     }

//     render() {
//         return (
//             <div>
//                 <br/>
//                 <Button bsStyle="primary" bsSize="large" onClick={this.open}>Sign Up</Button>
            
//                 <Modal show={this.state.showModal} onHide={this.close} bsSize="large" >
//                     <Modal.Header closeButton>
//                         <Modal.Title>Sign Up or Log In</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
                        
//                     <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
//                         <Tab eventKey={1} title="Sign Up">
//                             <p>Sign up here</p>
//                         </Tab>
//                         <Tab eventKey={2} title="Sign In">
//                             <Form horizontal>
//                                 <FormGroup controlId="formHorizontalEmail">
//                                     <Col componentClass={ControlLabel} sm={2}>
//                                         Email
//                                     </Col>
//                                     <Col sm={10}>
//                                         <FormControl type="email" placeholder="Email" />
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup controlId="formHorizontalPassword">
//                                     <Col componentClass={ControlLabel} sm={2}>
//                                         Password
//                                     </Col>
//                                     <Col sm={10}>
//                                         <FormControl type="password" placeholder="Password" />
//                                     </Col>
//                                 </FormGroup>

//                                 <FormGroup>
//                                     <Col smOffset={2} sm={10}>
//                                         <Button type="submit">
//                                         Sign in
//                                         </Button>
//                                     </Col>
//                                 </FormGroup>
//                                 {/*<FormGroup>
//                                     <Button bsStyle="primary" bsSize="large" onClick={this.apiCall}>Make API Call</Button>
// 				                    <p>API Call Return:<pre>{JSON.stringify(this.state.loginResult.data, null, 2)}</pre></p>
//                                 </FormGroup>*/}
                                
//                             </Form>
//                         </Tab>
//                     </Tabs>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={this.close}>Close</Button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>

//         );
      
//     }
//   }