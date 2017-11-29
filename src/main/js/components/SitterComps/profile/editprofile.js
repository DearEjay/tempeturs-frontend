import React from 'react';
import { EditProfileLayout } from 'js/components/SitterComps/layouts/editproflaylout.js';
import { Main }  from  'js/components/SitterComps/main/main.js';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Slider } from 'js/components/SitterComps/sidebar/sidebar2.js';

export class EditProfile extends React.Component {

    render(){
        return(
            <div>
            < Main/>


              < EditProfileLayout />

            </div>
        );
    }
}
