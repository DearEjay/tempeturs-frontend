import React from 'react';
import axios, {get} from 'axios';


export class ProductFilter extends React.Component {
  constructor() {
    super();

    this.handleFormInput = this.handleFormInput.bind(this);

    this.state = {
      userToken: this.getCookie('usertoken'),
      userId: this.getCookie('userid'),
      prods: [],
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

  handleFormInput() {

  }

  render() {
    var products1 = this.state.prods;
    var results = [];

    products1.map((product) =>
      results.push(
        <Product  key={product.id} id={product.id} name={product.name} rate={product.rate}  />
      )

      /*
      results.push(
        <Product key={product.id} name={product.name} rate={product.rate} city={product.address.city} state={product.address.state} />
      )
      */
    );

    console.log(results);

    return (
      <div className="filter">
        <ProductFilterMenu
          onFormInput={this.handleFormInput}
        />

        <div className="filter-results">
          <ul className="blocks blocks_3up">
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

 class ProductFilterMenu extends React.Component {
   constructor() {
     super();
     this.handleChange = this.handleChange.bind(this);
   }

   handleChange() {
     this.props.onFormInput (
       this.refs['seriesInput'].getDOMNode().value,
       this.refs['abvInput'].getDOMNode().checked
     );
   }

   render() {
     return (
       <form className="filter-menu">

         <label for="seriesInput">Show:</label>
         &nbsp;&nbsp;<select id="seriesInput" ref="seriesInput" onChange={this.handleChange}>
          <option value="Recommendations">Recommendations</option>
           <option value="Distance (Closest)">Distance (Closest)</option>
           <option value="Distance (Farthest)">Distance (Farthest)</option>
           <option value="Rate (Cheapest)">Rate (Cheapest)</option>
           <option value="Rate (Expensive)">Rate (Expensive)</option>
         </select>
       </form>
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
            <p>Location: {this.props.city},{this.props.state} </p>
          </div>
          <div className="feature-bd">
            <p>Rate: ${this.props.rate}</p>
          </div>
          <div className="feature-ft">
            <p>Rating: </p>
          </div>
        </div>
      </li>
    );
  }
}
