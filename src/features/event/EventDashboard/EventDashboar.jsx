import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';

import cuid from 'cuid';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';
const mapState = (state) => ({
	events: state.events
})


const actions = {
	createEvent,
	updateEvent,
	deleteEvent
}


class EventDashboard extends Component {

	// state = {
	// 	isOpen: false,
	// 	selectedEvent: null
	// }

	state = {

	}

	// componentDidMount() {
	// 	fetch ('https://dog.ceo/api/breeds/list/all')
	// 	.then(results => {
	// 		return results.json();
	// 	}).then(data => {
	// 		console.log(data.message);
	// 	})
	// }
	// handleCreateEvent = newEvent => {
	// 	newEvent.id = cuid();
	// 	newEvent.hostPhotoUrl = '/assets/user.png';
	// 	this.props.createEvent(newEvent);
	// 	this.setState({
	// 		isOpen: false,
	// 	})
	// }

	// handleOpenEvent = (eventToOpen) => () => {
	// 	this.setState({
	// 		selectedEvent: eventToOpen,
	// 		isOpen: true
	// 	})
	// }


	// handleFormOpen = () => {
	// 	this.setState({
	// 		selectedEvent: null,
	// 		isOpen: !this.state.isOpen,
	// 	})
	// }

	// handleCancel = () => {
	// 	this.setState({
	// 		isOpen: false,
	// 	})
	// }


	// handleUpdateEvent = (updateEvent) => {
	// 	this.props.updateEvent(updateEvent);

	// }

	handleDeleteEvent = (eventId) => () => {
		this.props.deleteEvent(eventId)
	}

	render() {
		// const { selectedEvent } = this.state;
		// const { events, createEvent, deleteEvent, updateEvent } = this.props
		const { events } = this.props
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={events} />
				</Grid.Column>

				<Grid.Column width={6}>
					<h2>Activity Feed</h2>

				</Grid.Column>
			</Grid>
		)
	}
}

export default connect(mapState, actions)(EventDashboard);