import React from 'react';
import { ProfileLayout } from 'js/components/SitterComps/layouts/proflayout.js';
import { Main }  from  'js/components/SitterComps/main/main.js';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Slider } from 'js/components/SitterComps/sidebar/sidebar2.js';

export class Profile extends React.Component {

    render(){
        return(
            <div>
            < Main/>


              < ProfileLayout />

            </div>
        );
    }
}
