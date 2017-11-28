import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import { NavBar } from 'js/components/SitterComps/navbar/navbar.js';
import { Sider } from 'js/components/SitterComps/sidebar/sidebar.js';
import { StatusForm } from 'js/components/SitterComps/main/statusform.js';
import { PetList } from 'js/components/PetList.js';
import { FileInput } from 'react-file-input';
import { BookMe } from 'js/components/SitterComps/bookme/bookme.js';
import { StarRating } from 'js/components/SitterComps/rate/StarRating.js';
import { RateMe } from 'js/components/SitterComps/rate/rateme.js';
import axios, {get} from 'axios';
import { User } from 'js/components/SitterComps/user/user.js';
import { ToastContainer, toast } from 'react-toastify';


export class AccountEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      name: '',
      classification: '',
      rate: 0,
      image: null,
      city: '',
      email: '',
      state: '',
      zipcode: null,
      userContent: null
      //    const currentUser = <User key={this.state.name} name={this.state.name} image={this.state.image} city={this.state.city} state={this.state.state} rate={this.state.rate} classification={this.state.classification} />;

    };

    var config = {
      headers: { Authorization: 'Bearer ' + this.state.userToken }
    };

    alert(this.state.userToken);


    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    alert(this.state.userId);
    alert(this.state.userToken);

    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      console.log('edit');
      console.log(response);

      this.setState({name:response.data.data.name});
      this.setState({userId:response.data.data.id});
      this.setState({zipcode:response.data.data.address.zipcode});
      this.setState({classification: response.data.data.classification});
      this.setState({city: response.data.data.address.city});
      this.setState({state: response.data.data.address.state});
      this.setState({image: response.data.data.image});
      this.setState({rate: response.data.data.rate});
      this.setState({email: response.data.data.email});

      console.log(this.state.name);
      console.log(this.state.classification);
      console.log(this.state.city);
      console.log(this.state.state);
      console.log(this.state.image);
      console.log(this.state.rate);

      this.setState({userContent:<User key={this.state.userId} name={this.state.name} image={this.state.image} city={this.state.city} state={this.state.state} rate={this.state.rate} classification={this.state.classification} />});

      console.log(this.state.userContent);



    })
    .catch(function(error) {
      alert('error!');
      console.log(error);
    });

  //  this.insertParam('userid', this.state.userId);
  }

  handleChange(e){
    this.setState({zipcode: e.target.value});
    this.cityState();
  }

  cityState(){


    var zipcode = document.getElementById('userzip').value;
    //alert(zipcode);
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if(isValidZip.test(zipcode)){
      const url = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
      const url1 = '&sensor=true';
      //alert(url+zipcode+url1);
      axios.get(url+zipcode+url1)
        .then(response => {
          //('gotzip');
          console.log(response);
          var obj = response.data.results;
          //alert(obj[0].formatted_address);
          var res = obj[0].formatted_address.split(' ');
          if(res[1] != undefined){
            document.getElementById('usercity').value = res[0].slice(0,-1);
            document.getElementById('userstate').value =  res[1];
          }else{
            throw 'Not a valid zipcode!\nPlease try again!';
          }
        })
        .catch(function(error) {
          /*toast.error(error, {
              position: toast.POSITION.BOTTOM_RIGHT
          });*/
          console.log(error);
        });
    }
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
      <div class="container">
      <ToastContainer />
    <h1>Edit Profile</h1>

	<div class="row">
      <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
          <h6>Upload a different avatar...</h6>

          <input type="file" accept="image/*" class="form-control" />
        </div>
      </div>


      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a>
          <i class="fa fa-coffee"></i>
          <strong>only image files accepted! </strong>
        </div>
        <h3>Personal info</h3>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">Full name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" readonly="false" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})} />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Rate:</label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label class="col-lg-3 control-label">Zipcode:</label>
            <div class="col-lg-8">
              <input class="form-control" type="number" value={this.state.rate} onChange={(e) => this.setState({rate: e.target.value})} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input class="form-control" type="number" id='userzip' value={this.state.zipcode} onChange={(e) => {this.handleChange(e);}} />
            </div>
          </div>
          < br />
          <div class="form-group">
            <label class="col-lg-3 control-label">City:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" id='usercity' value={this.state.city} readonly='true' />
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-3 control-label">State:</label>
            <div class="col-lg-8">
              <input class="form-control" id='userstate' type="text" value={this.state.state} readonly='true' />
            </div>
          </div>



          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" value="Save Changes" />
              <span></span>
              <input type="reset" class="btn btn-default" value="Cancel" />
            </div>
          </div>
        </form>
      </div>
  </div>

</div>

    );
  }
}
