import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import {Home} from 'js/pages/Home';
import {Register} from 'js/pages/Register';
import {Login} from 'js/pages/Login';
import {Search} from 'js/pages/Search';
import {Detail} from 'js/pages/Detail';
import {Booking} from 'js/pages/Booking';
import {Sitter} from 'js/pages/SitterDemo';
import {Payment} from 'js/pages/Payment';
import {Help} from 'js/pages/Help';
import {Contact} from 'js/pages/Contact';
import {Menu} from 'js/nav';

export default class Index extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/detail" component={Detail} />
					<Route exact path="/booking" component={Booking} />
					<Route exact path="/payment" component={Payment} />
					<Route exact path="/help" component={Help} />
					<Route exact path="/sitter" component={Sitter} />
				</div>
			</HashRouter>
		);
	} 
}