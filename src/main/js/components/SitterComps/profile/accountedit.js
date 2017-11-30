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
import { ToastContainer, toast } from 'react-toastify';


export class AccountEdit extends React.Component {
  constructor(props) {
    super(props);
    this.here = this.here.bind(this);

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
      userContent: null,
      user: {}
      //    const currentUser = <User key={this.state.name} name={this.state.name} image={this.state.image} city={this.state.city} state={this.state.state} rate={this.state.rate} classification={this.state.classification} />;

    };
    this.user = {};
    var config = {
      headers: { Authorization: 'Bearer ' + this.state.userToken }
    };

  //  console.log(this.state.userToken);


    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    //console.log(this.state.userId);
    //console.log(this.state.userToken);

    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      console.log('edit');
      console.log(response);
      this.setState({user: response.data.data});

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





    })
    .catch(function(error) {
      console.log('error!');
      console.log(error);
    });

    console.log(this.state.user);
  }//end of constructor

  handleChange(e){
    this.setState({zipcode: e.target.value});
    //console.log('zipchange');
    this.cityState();
  }
  fileUpload(file){
			const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
			const formData = new FormData();
			formData.append('file',file);
			formData.append('permissions', 'PROTECTED');
			console.log(this.state.userToken);
			console.log(file.name);

			const config = {
				headers: {
						'Authorization': 'Bearer ' + this.state.userToken
				}
			};
			// I also tried adding 'content-type': 'multipart/form-data' to the header


		return  axios.post(url+'/file/', formData,config);
	}


  cityState(){


    var zipcode = document.getElementById('userzip').value;
    //console.log(zipcode);
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if(isValidZip.test(zipcode)){
      const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
      const url1 = '&key=AIzaSyClrQRnLM322oSpXsNfqOVR5SlwNlXI-aU';

      console.log(url+zipcode+url1);
      axios.get(url+zipcode+url1)
        .then(response => {
          //('gotzip');
          console.log(response);
          var obj = response.data.results;
          //console.log(obj[0].formatted_address);
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

  here(){
    console.log("here");
    var name =   document.getElementById('nameofuser').value ;
    var city =  document.getElementById('usercity').value;
    var state =  document.getElementById('userstate').value;
    var zipcode = document.getElementById('userzip').value;
    var classification = document.getElementById('classificationtype').value;
    var rate = document.getElementById('userrate').value;

    console.log(name + ' ' + city + ' ' + state + ' ' + zipcode + ' '  + ' ' + classification);

    var user = {};
    var config = {
      headers: { Authorization: 'Bearer ' + this.state.userToken }
    };
    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

    axios.get(url + '/user/' + this.state.userId, config)
    .then(response => {
      console.log('got user data here');
      var user = response.data.data;
      console.log(user);
      user.name = name;
      user.address.city = city;
      user.address.state = state;
      user.address.zipcode = zipcode;
      user.classification = classification;
      user.rate = rate;

      console.log(user);

      axios.put(url + '/user/' + this.state.userId,user,config)
      .then(response => {
          console.log('Account updated!');
          console.log(response);
          location.reload();
      });
    })
    .catch(function(error) {
      console.log('error!');
      console.log(error);
    });








  }


  render() {
    var optionvalues =   <select name="classificationtype" id='classificationtype'><option value='SITTER'>Sitter</option><option value='OWNER' selected="selected">Owner</option></select>;
    if(this.state.classification=='SITTER'){
       optionvalues =   <select name="classificationtype" id='classificationtype'><option value='SITTER' selected="selected">Sitter</option><option value='OWNER'>Owner</option></select>;
    }
    return (
      <div class="container">
      <ToastContainer />
    <h1>Edit Profile</h1>

	<div class="row">
    {/*   <div class="col-md-3">
        <div class="text-center">
          <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
          <h6>Upload a different avatar...</h6>

          <input type="file" accept="image/*" class="form-control" onChange={(e) => this.setState({ file: e.target.files[0] })} />


        </div>
      </div>


*/}
      <div class="col-md-9 personal-info">
        {/*<div class="console.log console.log-info console.log-dismissable">
          <a class="panel-close close" data-dismiss="console.log">×</a>
          <i class="fa fa-coffee"></i>
          <strong>only image files accepted! </strong>
        </div> */}
        <h3>Personal info</h3>

        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">Full name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" id='nameofuser' readonly="false" value={this.state.name}  onChange={(e) => this.setState({name: e.target.value})} />
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Rate:</label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <label class="col-lg-3 control-label">Zipcode:</label>
            <div class="col-lg-8">
              <input class="form-control" type="number" id='userrate' value={this.state.rate} onChange={(e) => this.setState({rate: e.target.value})} />
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
            <label class="col-lg-3 control-label">Classification:</label>
            <div class="col-lg-8">
              {optionvalues}

            </div>
          </div>



          <div class="form-group">
            <label class="col-md-3 control-label"></label>
            <div class="col-md-8">
              <input type="button" class="btn btn-primary" onClick={this.here} value="Save Changes" />
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
