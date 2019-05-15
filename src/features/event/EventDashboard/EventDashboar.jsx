import React, { Component } from 'react';

import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsDashboard = [
	{
		id: '1',
		title: 'Trip to Tower of London',
		date: '2018-03-27',
		category: 'culture',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: 'Bob',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
		attendees: [
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
			},
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
			}
		]
	},
	{
		id: '2',
		title: 'Trip to Punch and Judy Pub',
		date: '2018-03-28',
		category: 'drinks',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
		city: 'London, UK',
		venue: 'Punch & Judy, Henrietta Street, London, UK',
		hostedBy: 'Tom',
		hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
		attendees: [
			{
				id: 'b',
				name: 'Tom',
				photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
			},
			{
				id: 'a',
				name: 'Bob',
				photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
			}
		]
	}
];


class EventDashboard extends Component {

	state = {
		events: eventsDashboard,
		isOpen: false,
		selectedEvent: null
	}


	handleCreateEvent = newEvent => {
		newEvent.id = cuid();
		newEvent.hostPhotoUrl = '/assets/user.png';
		const updatedEvents = [...this.state.events, newEvent];
		this.setState({
			events: updatedEvents,
			isOpen: false,
		})
	}

	handleOpenEvent = (eventToOpen) => () => {
		this.setState({
			selectedEvent: eventToOpen,
			isOpen: true
		})
	}


	handleFormOpen = () => {
		this.setState({
			selectedEvent: null,
			isOpen: !this.state.isOpen,
		})
	}

	handleCancel = () => {
		this.setState({
			isOpen: false,
		})
	}


	handleUpdateEvent = (updateEvent) => {
		this.setState({
			events: this.state.events.map(event => {
				if(event.id===updateEvent.id){
					//Clone updatedEvent object and assign it to events which is the parent object
					return Object.assign({}, updateEvent)
				} else {
					return event;
				}
			}),
			isOpen: false,
			selectedEvent:null
		})
	}

	handleDeleteEvent = (eventId) => () => {
		const updatedEvents = this.state.events.filter(e => e.id !== eventId);
		this.setState({
			events: updatedEvents,
		})
	}

	render() {
		const { selectedEvent } = this.state;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList  deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
				</Grid.Column>

				<Grid.Column width={6}>
					<Button onClick={this.handleFormOpen} color="violet" content="Create Event" />
					{this.state.isOpen &&
						 <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} handleCancel={this.handleCancel} createEvent={this.handleCreateEvent} />}

				</Grid.Column>
			</Grid>
		)
	}
}

export default EventDashboard;