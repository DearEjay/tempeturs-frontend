import React from 'react';
import axios, { post } from 'axios';

export class UploadFile extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    };
    var userToken = this.getCookie('usertoken');
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e){
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({file:e.target.files[0]});
  }
  fileUpload(file){
      const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
      const formData = new FormData();
      formData.append('file',file);

      var config = {
        headers: {'Authorization': 'Bearer ' + this.userToken}
      };

    return  axios.post(url, formData,config);
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

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   );
  }
}
