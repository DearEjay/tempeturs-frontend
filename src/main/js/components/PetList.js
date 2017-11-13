import React from 'react';
import { Link } from 'react-router-dom';
import {Pet} from 'js/components/Pet';
import { Thumbnail, Button, Modal, Panel, Image } from 'react-bootstrap';
import axios, { post } from 'axios';
import axiosFileupload from 'axios-fileupload';

export class PetList extends React.Component {

	constructor(props){
			super(props);

			this.state = {
					showModal: false,
					file:   null,
					userToken: this.getCookie('usertoken'),
					userId: this.getCookie('userid'),
					addImage: ''
			};



			this.onFormSubmit = this.onFormSubmit.bind(this);
			this.onChange = this.onChange.bind(this);
			this.fileUpload = this.fileUpload.bind(this);

			this.open = this.open.bind(this);
			this.close = this.close.bind(this);
	}

	getInitialState() {
			return { showModal: false };
	}

	onFormSubmit(e){
    e.preventDefault(); // Stop form submit
		alert('Filename ' + this.state.file.name);


		var petName = document.getElementById('petname').value;
		alert(petName);
		var petAge  = document.getElementById('ageyears').value;
		alert(petAge);
		var petType = document.getElementById('typeofpet').value;
		alert(petType);
		var petSex;
		if (document.getElementById('male').checked) {
  		 petSex = document.getElementById('male').value;
		}else if (document.getElementById('female').checked) {
			 petSex  =  document.getElementById('female').value;
		}
		alert(petSex);


		 this.fileUpload(this.state.file).then((response)=>{
       	this.setState({addImage:response.data.data});
     })
 		.catch(function (error) {
 				console.log(error);
 		});

		alert(this.state.addImage);

		var pet = {
			 'name': petName,
			 'type': petType,
			 'sex' : petSex,
			 'age' : petAge,
			 'image': this.state.addImage
		 };

		var config = {
	 		headers: {'Authorization': 'Bearer ' + this.state.userToken}
	 	};

		const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

		axios.post(url+'/user/'+this.state.userId+'/pets/' ,pet, config)
		 .then((response) => {
				console.log(response);
		 })
		 .catch(function (error) {
			 	alert('error!');
				 console.log(error);
		 });


  }
	onChange(e) {
    this.setState({file:e.target.files[0]});
  }
  fileUpload(file){
      const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
      const formData = new FormData();
      formData.append('file',file);
			alert(this.state.userToken);
			alert(file.name);

			const config = {
        headers: {
						'Authorization': 'Bearer ' + this.state.userToken
        }
    	};
			// I also tried adding 'content-type': 'multipart/form-data' to the header


    return  axios.post(url+'/file/', formData,config);
  }

  getCookie(cname) {
      var name = cname + '=';
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
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
	close() {
			this.setState({ showModal: false });
	}


	open() {
			this.setState({ showModal: true });
	}


	render() {
		return (
			<Panel className="petlist">
			<p>
			<center><Button bsStyle="default" onClick={this.open}>Add Pet</Button> <Button bsStyle="default" onClick={this.open}>Delete Pet</Button>
			</center>
			</p>

			<Modal show={this.state.showModal} onHide={this.close}>
			<Modal.Header closeButton>
					<Modal.Title><h3>Add Pet</h3></Modal.Title>
			</Modal.Header>
			<Modal.Body>
					<Panel width="300px">

						<form onSubmit={this.onFormSubmit}>
							<div >

								<label><b>Name</b></label>
								<input type="text" placeholder="Name" id="petname" required/>
								< br />

								<label><b>Type</b></label>
								< br/> <select id ='typeofpet'>
								  <option value="dog">Dog</option>
								  <option value="cat">Cat</option>
								  <option value="fish">Fish</option>
	 							  <option value="bird">Bird</option>
								  <option value="rabbit">Rabbit</option>
								  <option value="hamster">Hamster</option>
								  <option value="mouse">Mouse</option>
									<option value="snake">Snake</option>
								  <option value="other">Other</option>
							  </select>

								< br/>								< br/>


								<label><b>Sex</b></label><br />
								<input id="male" name="sex" type="radio" value="Male" />Male
								&nbsp;&nbsp;&nbsp;<input id="female" name="sex" type="radio" value="Female" />Female
								<br /><br />

								<label><b>Age (years)</b></label>< br/>
								<input type="number" placeholder="Age (years)" id="ageyears" required />
								<br /><br />

								<label><b>Image</b></label>
									    <input type="file" accept="image/*" onChange={this.onChange} />
								<br />

								<div class="clearfix">
									<Button type="submit" class="signupbtn">Add</Button>
									&nbsp;&nbsp;&nbsp;<Button type="button"  onClick={this.close} class="cancelbtn">Cancel</Button>

								</div>
							</div>
						</form>
					</Panel></Modal.Body>

			</Modal>
				<Pet/>
			</Panel>
		);
	}
}
