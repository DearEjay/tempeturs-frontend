import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { Home, Register, Login, Search, Detail, Booking, Payment, Help } from 'js/pages';

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
					</div>
			</HashRouter>
		);
	} 
}