import React from 'react';
import { Layout0 } from 'js/components/SitterComps/layouts/layout0.js';
import { Main }  from  'js/components/SitterComps/main/main.js';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Slider } from 'js/components/SitterComps/sidebar/sidebar2.js';

export class Calendar extends React.Component {

    render(){
        return(
            <div>
            < Main/>


              < Layout0 />

            </div>
        );
    }
}
