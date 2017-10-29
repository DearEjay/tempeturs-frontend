
import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export class NavBar extends React.Component {

  render(){
    return (
      <div className="navbar navbar-blue navbar-fixed-top">
            <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="#/sitter/dashboard" className="navbar-brand logo">
                  </a>
            </div>
            <nav className="collapse navbar-collapse" role="navigation">
                <form onSubmit={this.handleSubmit}  className="navbar-form navbar-left">
                    <div className="input-group input-group-sm bs-example">
                        <input ref="searchText" type="text" className="form-control tt-query" id="typeahead" placeholder="Search..." />
                        <div className="input-group-btn searchBtn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#/sitter/dashboard"><i className="fa fa-home"></i> News Feed</a>
                    </li>
                </ul>


                <ul  className="nav navbar-nav navbar-right">
                    <DropdownButton  bsStyle="default" className="glyphicon glyphicon-user"  title=" Ejay Mallard" noCaret id="dropdown-no-caret">
                    <li><a href="/profile"><MenuItem eventKey="1" active >Edit Profile</MenuItem></a></li>
                    <li><a href="#/sitter"><MenuItem eventKey="2"  active>Logout</MenuItem></a></li>
                    </DropdownButton>
                </ul>
            </nav>
</div>
       );
     }
}
