import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { FileInput } from 'react-file-input';
import { BookMe } from 'js/components/SitterComps/bookme/bookme.js';
import { RateMe } from 'js/components/SitterComps/rate/rateme.js';
import axios, {get} from 'axios';
import { User } from 'js/components/SitterComps/user/user.js';

export class OtherAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('otherid'),
      name: '',
      classification: '',
      rate: 0,
      image: null,
      city: 'somewhere',
      state: 'crazy',
      userContent: null,
      ratings: []
      //    const currentUser = <User key={this.state.name} name={this.state.name} image={this.state.image} city={this.state.city} state={this.state.state} rate={this.state.rate} classification={this.state.classification} />;

    };

    var config = {
      headers: { 'Authorization' : 'Bearer ' + this.state.userToken }
    };

    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    alert('otherid ');
    alert(this.state.userId);
    alert(this.state.userToken);

    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      console.log(response);
      alert('other account success');
      this.setState({name:response.data.data.name});
      //this.setState({userId:response.data.data.id});
      this.setState({classification: response.data.data.classification});
      //this.setState({city: response.data.data.address.city});
      //this.setState({state: response.data.data.address.state});
      this.setState({image: response.data.data.image});
      this.setState({rate: response.data.data.rate});

      console.log(this.state.name);
      console.log(this.state.classification);
      console.log(this.state.city);
      console.log(this.state.state);
      console.log(this.state.image);
      console.log(this.state.rate);

      axios.get(url + '/user/' + this.state.userId+'/ratings/', config)
      .then(response => {
        console.log(response.data.data);
        this.setState({ratings:response.data.data});
        console.log(this.state.ratings);

        this.setState({userContent:<User key={this.state.userId} userId={this.state.userId} type='other' name={this.state.name} image={this.state.image}  rate={this.state.rate} classification={this.state.classification} ratings={this.state.ratings} />});
        console.log(this.state.userContent);


      })
      .catch(function(error) {
        alert('error! in otheraccount');
        console.log(error);
      });

      console.log(this.state.ratings);






    })
    .catch(function(error) {
      alert('error! in otheraccount');
      console.log(error);
    });

    //get ratings

    //this.insertParam('userid', this.state.userId);
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

  render() {
    return (
       <div>{this.state.userContent}</div>
    );
  }
}
