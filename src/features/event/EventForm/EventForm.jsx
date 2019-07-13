import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {createEvent, updateEvent } from '../eventActions';

import cuid from 'cuid';

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    }
    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];

    }

    return {
        event
    }
}

const actions =  {
    createEvent, 
    updateEvent
}

class EventForm extends Component {

    state = { ...this.props.event };

    // componentDidMount() {

    //     if (this.props.selectedEvent && this.props.selectedEvent !== null) {
    //         this.setState({
    //             event: this.props.selectedEvent
    //         })
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.selectedEvent !== this.props.selectedEvent) {
    //         this.setState({
    //             event: nextProps.selectedEvent,
    //         })
    //     }
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.event.id) {
            this.props.updateEvent(this.state.event);
            this.props.history.push(`/events/${this.state.event.id}`);
        } else {

            const newEvent = {
                ...this.state,
                id : cuid(),
                hostPhotoURL : '/assets/user.png',

            }
            this.props.createEvent(newEvent);
            this.props.history.push(`/events`);
        }
    }

    onInputChange = (event) => {
        const newEvent = this.state;
        newEvent[event.target.name] = event.target.value;
        this.setState({
            event: newEvent,
        })
    }


    render() {
        const event = this.state;

        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input placeholder="Event Title" name="title" onChange={this.onInputChange} value={event.title} ref="title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input type="date" placeholder="Event Date" name="date" value={event.date} onChange={this.onInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input placeholder="City event is taking place" name="city" value={event.city} onChange={this.onInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input placeholder="Enter the Venue of the event" name="venue" value={event.venue} onChange={this.onInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input placeholder="Enter the name of person hosting" name="hostedBy" value={event.hostedBy} onChange={this.onInputChange} />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
              </Button>
                    <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default connect(mapState, actions)(EventForm);