import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import {Pet} from 'js/components/Pet';
import {PetList} from 'js/components/PetList';

export class Dashboard extends React.Component {

    render(){
        return(
            <div>
                Owner DASHBOARD
                <Grid>
                    {/* this row contains the buttons at the top and the pet list */}
                    <Row>
                        <Col className="one" xs={12} md={8}>column 1
                            </Col>
                        <Col className="two"xs={6} md={4}><PetList/></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}