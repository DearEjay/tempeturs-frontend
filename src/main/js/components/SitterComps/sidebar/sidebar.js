import React from 'react';
import axios, {get} from 'axios';


export class Sider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      classification: null
    };


    var config = {
      headers: { Authorization: 'Bearer ' + this.state.userToken }
    };

    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      this.setState({classification: response.data.data.classification});
    })
    .catch(function(error) {
      alert('sidebar error!');
      console.log(error);
    });

  }
  getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  here(){
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = 'accounttype' + '=' + 'mine' + ';' + expires;

    return true; 
  }
    render(){
      var calendercontent = null;
      var searchsittercontent = null;

      if(this.state.classification == 'SITTER'){
        calendercontent = <li >
            <a href='#/sitter/user/calendar'><i className='fa fa-users fa-2x'></i><label><center>Calendar</center></label></a>
        </li> ;
      }
      if(this.state.classification == 'OWNER'){
        searchsittercontent =   <li>
              <a href='#/sitter/user/search'><i className='fa fa-users fa-2x'></i><label><center>Find Sitter</center></label></a>
          </li>;
      }
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
                    <a href='#/sitter/user/profile' onClick={this.here}><i className='fa fa-user fa-2x'></i><label><center>Profile</center></label></a>
                </li>
                <li >
                    <a href='#/sitter/dashboard'><i className='fa fa-rss fa-2x'></i><label><center>News Feed</center></label></a>
                </li>
                <li >
                    <a href='#/sitter/user/messages'><i className='fa fa-comment fa-2x'></i><label><center>Messages</center></label></a>
                </li>
                {calendercontent}
                {searchsittercontent}
                </ul>
            </div>
        );
    }
}
