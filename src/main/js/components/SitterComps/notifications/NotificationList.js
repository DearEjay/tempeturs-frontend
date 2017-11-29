import React from "react";
import { Link } from "react-router-dom";
import { Thumbnail, Button, Modal, Panel, Image } from "react-bootstrap";
import axios, { get } from "axios";
import {Notification} from './Notification.js';


export class NotificationList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie("usertoken"),
      userId: this.getCookie("userid"),
      notifications: []
    };

    this.dismissall = this.dismissall.bind(this);

    var config = {
      headers: { 'Authorization': "Bearer " + this.state.userToken }
    };

    const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

    axios
      .get(url + "/user/" + this.state.userId + "/notifications/", config)
      .then(response => {
        alert("got the notification list for this user");
        console.log("got the notification list for this user");
        console.log(response);
        this.setState({notifications:response.data.data});
      })
      .catch(function(error) {
        alert("error! in notification list");
        console.log(error);
      });
  }

  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  dismissall(){
    var config = {
      headers: { 'Authorization': "Bearer " + this.state.userToken }
    };

    const url = "https://group-3-tempeturs-backend.herokuapp.com/api";
     

      var ids = [];
      const data = this.state.notifications;
      data.map((d) => ids.push(d.id));

      for(var i = 0; i < ids.length; i++){
        axios
        .delete(url + "/user/" + this.state.userId + "/notifications/" + ids[i], config)
        .then(response => {
            console.log('deleted the notification');
            console.log(response);
        })
        .catch(function(error) {
          alert("error! in notification");
          console.log(error);
        });
      }
      location.reload();
  }

  render() {
    const data = this.state.notifications;
    const NotificationList = data.map((d) => <Notification id={d.id} type={d.type} refersToID={d.refersToID} forUserID={d.forUserID} /> );
    var content = null;
    var click = '';

    if(data.length == 0){
      content = "You have no new notifications.";
    }else{
      click = <div><Button bsStyle='primary' onClick={this.dismissall}>Dismiss All</Button><br/><br/></div>;
      content = NotificationList;
    }


    return (
      <Panel className="notificationlist">
        {click}
        {content}
      </Panel>
    );
  }
}
