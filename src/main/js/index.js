import React from 'react';
import { HashRouter, Route } from 'react-router-dom';


import {Sitter} from 'js/pages/SitterDemo';
import {Dashboard} from 'js/components/SitterComps/dashboard/dashboard.js';
import {Calendar} from 'js/components/SitterComps/calendar/calendar.js';
import {Profile} from 'js/components/SitterComps/profile/profile.js';
import {OtherProfile} from 'js/components/SitterComps/profile/OtherProfile.js';
import {EditProfile} from 'js/components/SitterComps/profile/editprofile.js';
import {SearchLayout} from 'js/components/SitterComps/search/searchpage.js';

export default class Index extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/" component={Sitter} />
					<Route exact path="/sitter" component={Sitter} />
					<Route exact path="/signout" component={Sitter} />
					<Route exact path="/sitter/dashboard" component={Dashboard} />
					<Route exact path="/sitter/user/calendar" component={Calendar} />
					<Route exact path="/sitter/user/profile" component={Profile} />
					<Route exact path="/sitter/user/editprofile" component={EditProfile} />
					<Route exact path="/sitter/user/search" component={SearchLayout} />
					<Route exact path="/sitter/user/sitter" component={OtherProfile} />

				</div>
			</HashRouter>
		);
	}
}
