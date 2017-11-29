import React from 'react';
import { Button, Modal, Panel } from 'react-bootstrap';
import axios, { post } from "axios";
import Rater from 'react-rater';

export class RateMe extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userToken: this.getCookie("usertoken"),
            userId: this.getCookie("userid"),
            user: {},
            showModal: false,
            val: 0
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.submitRating = this.submitRating.bind(this);
        this.handleRate = this.handleRate.bind(this);

        var config = {
            headers: { Authorization: "Bearer " + this.state.userToken }
          };

          const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

        //   axios
        //     .get(url + "/user/" + this.state.userId, config)
        //     .then(response => {
        //       console.log(response.data.data.name);
        //       this.setState({user:response.data.data});
        //     })
        //     .catch(function(error) {
        //       alert("error!");
        //       console.log(error);
        //     });
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

    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleRate(e){
        // console.log(e);
        // console.log(e.nativeEvent.type);
        if(e.nativeEvent.type == 'click'){
            console.log("rating: "+e.rating);
            this.setState({val: e.rating});
        }
    }

    submitRating(e){
        e.preventDefault();

        // make sure we got all of the values from the form

        var num = this.state.val;
        var comments = document.getElementById("comments").value;
        alert(num);
        alert(comments);

        // Body: {
        //     "stars":1,
        //     "comments":"This person sucked.",
        //     "fromUserID":"b5e10c61-3119-436f-a8f6-f27e827e16eb"
        // }

        var rating = {
            "stars": num,
            "comments": comments,
            "fromUserID": this.state.userId
        };
        console.log("THIS IS YOUR RATING");
        console.log(rating);

        var config = {
            headers: { 'Authorization': "Bearer " + this.state.userToken }
          };

          const url = "https://group-3-tempeturs-backend.herokuapp.com/api";

        // GET THE USER ID OF THE PROFILE YOU'RE ON
          axios
            .post(url + "/user/" + this.getCookie('otherid') + "/ratings/", rating, config)
            .then(response => {
                console.log("successfully added a rating");
              console.log(response);
            })
            .catch(function(error) {
              alert("error!");
              console.log(error);
            });

        this.close();
    }

	render() {

		return (
              <div>
                    <Button bsStyle="primary" onClick={this.open}>Rate Me!</Button>

                    <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title><h3>Rate Me</h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Panel>
                            <Rater onRate={this.handleRate} />
                            <input type="text" id="comments" />
                            <Button bsStyle="primary" onClick={this.submitRating}>Submit</Button>
                        </Panel>
                    </Modal.Body>

                    </Modal>
                </div>

    		);
	}
}
