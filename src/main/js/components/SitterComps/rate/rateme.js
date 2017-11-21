import React from 'react';
import { Button, Modal, Panel } from 'react-bootstrap';

import Rater from 'react-rater';
import 'react-rater/lib/react-rater.scss';

export  class RateMe extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userToken: this.getCookie("usertoken"),
            userId: this.getCookie("userid"),
            user: {},
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.submitRating = this.submitRating.bind(this);

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

    submitRating(e){
        e.preventDefault();

        // make sure we got all of the values from the form
        // TODO : get the number of stars from "rater"
        var stars = 0;

        var comments = document.getElementById("comments").value;
        alert(comments);
        var petType = document.getElementById("typeofpet").value;
        alert(petType);
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
                            <Rater />
                            <input type="text" id="comments" />
                        </Panel>
                    </Modal.Body>

                    </Modal>
                </div>

    		);
	}
}
