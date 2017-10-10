import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Pet} from 'js/components/Pet';

export class Dashboard extends React.Component {

    render(){
        return(
            <div>
                DASHBOARD
                <Grid>
                    <Row className="show-grid">
                        <Col className="one" xs={12} md={8}>column 1</Col>
                        <Col className="two"xs={6} md={4}><Pet/></Col>
                    </Row>

                    <Row className="show-grid">
                        <Col>column 1</Col>
                        <Col>column 2</Col>
                    </Row>

                    <Row className="show-grid">
                        <Col>column 1</Col>
                        <Col>column 2</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}