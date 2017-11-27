
import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { Account } from 'js/components/SitterComps/profile/account.js';
import { ProductFilter } from 'js/components/SitterComps/search/search.js';

export class SearchLayout extends React.Component {
    render(){
        return (
            <div className="wrapper">
                <div className="box">
                    <div className="srow row-offcanvas row-offcanvas-left push-down-50">
                        < NavBar />

                              < Sider />




                              < br/>< br/>
                              <ProductFilter />



                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}
