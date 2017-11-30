import React from "react";
import { Link } from "react-router-dom";
import { Pet } from "js/components/Pet";
import { Thumbnail, Button, Modal, Panel, Image } from "react-bootstrap";
import {Rating} from './Rating.js';
import axios, { get } from "axios";

export class RatingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie("usertoken"),
      userId: this.getCookie("userid"),
      ratings: []
    };

    var config = {
      headers: { 'Authorization': "Bearer " + this.state.userToken }
    };

    const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

    console.log('props id');
    console.log(this.props.id);
    axios
      .get(url + "/user/" + this.props.id + "/ratings/", config)
      .then(response => {
          console.log("got the rating list for this user");
        console.log(response);
        this.setState({ratings:response.data.data});
      })
      .catch(function(error) {
        console.log("error! in rating list");
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

  render() {
    const data = this.state.ratings;
    const RatingList = data.map((d) => <Rating key={d.id} stars={d.stars} comments={d.comments} fromUserId={d.fromUserID} /> );
    console.log('RATING');
    console.log(RatingList);
    return (
      <Panel header="Ratings For This User" className="ratinglist">
      
        {RatingList}
      </Panel>
    );
  }
}
