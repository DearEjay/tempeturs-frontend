import React from 'react';
import { Button, Modal, Panel } from 'react-bootstrap';
import axios, {get} from 'axios';


export class ProductFilter extends React.Component {
  constructor() {
    super();

    this.getCookie = this.getCookie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.yes = this.yes.bind(this);




    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      prods: [],
      availability: false
    };

    var config = {
      headers: { Authorization: 'Bearer ' + this.state.userToken }
    };

    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

    axios.get(url + '/search', config)
    .then(response => {
     console.log('search success');
     console.log(response);
     this.setState({prods:response.data.data});
    })
    .catch(function(error) {
      console.log('search error!');
      console.log(error);
    });



  }

  handleChange() {
    var option = document.getElementById("seriesInput").value;
    console.log(option);


    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';
    var options = [];



    if(option=="Avalibility"){
      this.setState({availability:true});
    }else if (option == "Rate (Cheapest)" ){
      this.setState({availability:false});

      axios.get(url + '/search?sort=rateLeast', )
      .then(response => {
       console.log('search success');
       console.log(response);
       this.setState({prods:response.data.data});
       console.log(this.state.prods);
      })
      .catch(function(error) {
        console.log('search error!');
        console.log(error);
      });

    }else if (option == "Rate (Expensive)"){
      this.setState({availability:false});

      axios.get(url + '/search?sort=rateMost', )
      .then(response => {
       console.log('search success');
       console.log(response);
       this.setState({prods:response.data.data});
      })
      .catch(function(error) {
        console.log('search error!');
        console.log(error);
      });



    }else{
      this.setState({availability:false});
      axios.get(url + '/search', )
      .then(response => {
       console.log('search success');
       console.log(response);
       this.setState({prods:response.data.data});
      })
      .catch(function(error) {
        console.log('search error!');
        console.log(error);
      });


    }
    console.log(this.state.prods);


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
  formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
  }
  yes() {
    var start = new Date(document.getElementById('startdate').value);
    var end = new Date(document.getElementById('enddate').value );
    var startdate = new Date(start.getTime() + Math.abs(start.getTimezoneOffset()*60000));
    var enddate = new Date(end.getTime() + Math.abs(end.getTimezoneOffset()*60000));
    const url = 'https://group-3-tempeturs-backend.herokuapp.com/api';

    var d = new Date(startdate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var stringstart = [year, month, day].join('-');
    if(stringstart!= 'NaN-NaN-NaN'){
      console.log(stringstart);
    }
    d = new Date(enddate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var stringend = [year, month, day].join('-');
    if(stringend!= 'NaN-NaN-NaN'){
      console.log(stringend);
    }

    if(stringstart!= 'NaN-NaN-NaN' || stringend!= 'NaN-NaN-NaN'){
      console.log('at least one checked!');
      if(stringstart!= 'NaN-NaN-NaN' && stringend!= 'NaN-NaN-NaN'){
        console.log('both  checked!');
        //availStart=2017-10-05
		    //availEnd=2017-10-05

        axios.get(url + '/search?availStart='+stringstart+'?availEnd='+stringend, )
        .then(response => {
         console.log('search success');
         console.log(response);
         this.setState({prods:response.data.data});
        })
        .catch(function(error) {
          console.log('search error!');
          console.log(error);
        });


      }else if (stringstart!= 'NaN-NaN-NaN'){
        console.log('start  checked!');
        axios.get(url + '/search?availStart='+stringstart, )
        .then(response => {
         console.log('search success');
         console.log(response);
         this.setState({prods:response.data.data});
        })
        .catch(function(error) {
          console.log('search error!');
          console.log(error);
        });


      }else if (stringend!= 'NaN-NaN-NaN'){
        axios.get(url + '/search?availEnd='+stringend, )
        .then(response => {
         console.log('search success');
         console.log(response);
         this.setState({prods:response.data.data});
        })
        .catch(function(error) {
          console.log('search error!');
          console.log(error);
        });
        console.log('end  checked!');

      }
    }


  }

  render() {
    var products1 = this.state.prods;
    var results = [];
    var content = null;

    products1.map((product) =>
      results.push(
        <Product  key={product.id} id={product.id} name={product.name} rate={product.rate}  />
      )




    );

    if(this.state.availability == true){
        content = <form>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label><b>Date Start</b></label>
        <input type="date" placeholder="Start Date" id="startdate" required/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label><b>Date End</b></label>
        <input type="date" placeholder="Start End" id="enddate" required/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="button" onClick={this.yes} bsStyle="success" >Submit</Button></form>;
    }

    return (
      <div><center>
      <form className="filter-menu">
        <label for="seriesInput">Show:</label>
        &nbsp;&nbsp;<select id="seriesInput" ref="seriesInput" onChange={this.handleChange}>
         <option value="Recommendations">Recommendations</option>
          <option value="Avalibility">Avalibility</option>
          <option value="Rate (Cheapest)">Rate (Cheapest)</option>
          <option value="Rate (Expensive)">Rate (Expensive)</option>
        </select>
      </form></center>
      <center> {content} </center>
      <div className="filter">


        <div className="filter-results">
          <ul className="blocks blocks_3up">
            {results}
          </ul>
        </div>
      </div></div>
    );
  }
}


class Product extends React.Component {
  constructor (props) {
    super(props);
  }
  here(id,name){
    console.log('clicked worked after change');
    console.log(id);
    console.log(name);
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = 'otherid' + '=' + id + ';' + expires;

    window.location.href = '#/sitter/user/sitter';

  }

  render () {
    return (
      <li>
        <div className="feature" onClick={() => { this.here(this.props.id,this.props.name); }}  >
          <div className="feature-hd">
            <h2 class="hdg hdg_2">{this.props.name}</h2>
          </div>

          <div className="feature-bd">
            <p>Rate: ${this.props.rate}</p>
          </div>
          
        </div>
      </li>
    );
  }
}
