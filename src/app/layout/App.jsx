import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboar';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage';
import TestComponent from '../../features/testarea/TestComponent';



class App extends Component {

	

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
				<Route path="/(.+)" render={() => (
					<div>
						<NavBar />
						<Container className="main">
							<Switch key={this.props.location.key}>
								<Route path="/test" component={TestComponent} />
								<Route exact path="/" component={HomePage} />
								<Route exact path="/events" component={EventDashboard} />
								<Route path="/events/:id" component={EventDetailedPage} />
								<Route path="/people" component={PeopleDashboard} />
								<Route path="/profile/:id" component={UserDetailed} />
								<Route path="/settings" component={SettingsDashboard} />
								<Route path={["/createEvent", "/manage/:id"]} component={EventForm} />
							</Switch>
						</Container>
					</div>
				)} />

			</div>

		);
	}

}

export default  withRouter(App);
