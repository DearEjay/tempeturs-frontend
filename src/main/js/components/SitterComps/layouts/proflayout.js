
import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { Account } from 'js/components/SitterComps/profile/account.js';

export class ProfileLayout extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                        < NavBar />

                              < Sider />



                              <Grid>
                              < br/>< br/>< br/>< br/>
                              <Row middle="xs">
                              <Col md={6} offset={{ md: 3 }}>
                              < Account />
                              </Col>
                              <Col className="two"xs={6} md={4}><PetList/></Col>

                              </Row>
                          
                              </Grid>


                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}
