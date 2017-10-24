import React from 'react';

export class Sider extends React.Component {
    render(){
        return (

            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
            <br /> <br />
                <ul className="nav">
                    <li>
                        <a href="#" data-toggle="offcanvas" className="visible-xs text-center">
                            <i className="fa fa-list-alt"></i>
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">
                <li >
                    <a href='#/sitter/user/profile'><i className='fa fa-user fa-2x'></i><label><center>Profile</center></label></a>
                </li>
                <li >
                    <a href='#/sitter/dashboard'><i className='fa fa-rss fa-2x'></i><label><center>News Feed</center></label></a>
                </li>
                <li >
                    <a href='#/sitter/user/messages'><i className='fa fa-comment fa-2x'></i><label><center>Messages</center></label></a>
                </li>
                <li >
                    <a href='#/sitter/user/calendar'><i className='fa fa-users fa-2x'></i><label><center>Calendar</center></label></a>
                </li>
                </ul>
            </div>
        );
    }
}
