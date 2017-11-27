import React from 'react';
import { ProfileLayout } from 'js/components/SitterComps/layouts/proflayout.js';
import { Main }  from  'js/components/SitterComps/main/main.js';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Slider } from 'js/components/SitterComps/sidebar/sidebar2.js';
import { OtherProfileLayout} from 'js/components/SitterComps/layouts/otherprofilelayout.js';
export class OtherProfile extends React.Component {

    render(){
        return(
            <div>
            < Main/>


              < OtherProfileLayout />

            </div>
        );
    }
}
