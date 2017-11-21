import React from "react";
import { Grid, Row, Col, Panel, Image } from "react-bootstrap";
import { NavBar } from "js/components/SitterComps/navbar/navbar.js";
import { Sider } from "js/components/SitterComps/sidebar/sidebar.js";
import { StatusForm } from "js/components/SitterComps/main/statusform.js";
import { PetList } from "js/components/PetList.js";
import { FileInput } from "react-file-input";
import { BookMe } from "js/components/SitterComps/bookme/bookme.js";
// import { StarRating } from "js/components/SitterComps/rate/StarRating.js";
import { RateMe } from "js/components/SitterComps/rate/rateme.js";
import axios, {get} from 'axios';

import Rater from 'react-rater';
import 'react-rater/lib/react-rater.scss';

export class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie("usertoken"),
      userId: this.getCookie("userid"),
      user: {},
      name: "",
      classification: "",
      rating: 0,
      ratings: []
    };

    var config = {
      headers: { Authorization: "Bearer " + this.state.userToken }
    };

    const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

    // GET THE CURRENT USER
    axios
      .get(url + "/user/" + this.state.userId, config)
      .then(response => {
        console.log(response.data.data.name);
        this.setState({user:response.data.data});
      })
      .catch(function(error) {
        alert("error!");
        console.log(error);
      });

      // GET THE LIST OF RATINGS
      axios
      .get(url + "/user/" + this.state.userId + "/ratings/", config)
      .then(response => {
        console.log("ratings");
        console.log(response);
        this.setState({ratings:response.data.data});
      })
      .catch(function(error) {
        alert("error!");
        console.log(error);
      });

      // AVERAGE THE RATINGS
      var arr = this.state.ratings;
      var result = 0;
      for(var i = 0; i < arr.length; i++){
        result += arr[i];
      }
      result = result/arr.length;
      this.setState({rating:result});

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
    return (
      <div className="row">
        <div className="col-md-2 hidden-xs" align="center">
          <Image
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            responsive
          />
          <div>
            <label>
              <div className="inputWrapper" />
            </label>
          </div>
        </div>

        <div className="col-md-9 col-xs-9">
          <h1>
            <i>{this.state.user.name}</i>
          </h1>

          <table className="table table-user-information">
            <tbody>
              <tr>
                <td>
                  <h1>Waco, TX </h1>
                </td>
                <tr>
                  <td>
                    <h1>
                      <BookMe />
                    </h1>
                  </td>
                  <td>
                    <h1>
                      <RateMe />
                    </h1>
                  </td>
                </tr>
              </tr>
            </tbody>
          </table>

          <br />
          <h2>
            <i>Personal Information</i>
          </h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>Pay Rate: </h3>
                </td>
                <td>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;${this.state.user.rate}{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Classification: </h3>
                </td>
                <td>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;{this.state.user.classification}{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Rating: </h3>
                </td>
                <td>
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;{this.state.rating} of 5 Stars{" "}
                  <br /> <Rater interactive={false} total={5} rating={this.state.rating} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
