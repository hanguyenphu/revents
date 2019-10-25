import React, { Component } from "react";
import { Segment, Form, Button, Header, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { reduxForm, Field } from "redux-form";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";

const mapState = (state, ownProps) => {
    const eventId = ownProps.match.params.id;
    let event = {};
    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }

    return {
        initialValues:event
    };
};

const actions = {
    createEvent,
    updateEvent
};

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
]
class EventForm extends Component {
    // state = { ...this.props.event };


    onFormSubmit = values => {
        //console.log(values);
        //event.preventDefault();
        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            this.props.history.push(`/events/${this.props.initialValues.id}`);
        } else {
            const newEvent = {
                ...values,
                id: cuid(),
                hostPhotoURL: "/assets/user.png",
                hostedBy: 'Bob'
            };
            this.props.createEvent(newEvent);
            this.props.history.push(`/events`);
        }
    };


    // onInputChange = event => {
    //     const newEvent = this.state;
    //     newEvent[event.target.name] = event.target.value;
    //     this.setState({
    //         event: newEvent
    //     });
    // };

    render() {
        // const event = this.state;

        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Header sub color='teal' content="Event Details" />
                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
                            <Field
                                name='title'
                                component={TextInput}
                                placeholder='Give your event a name'
                            />
                            <Field
                                name='category'
                                component={SelectInput}
                                placeholder='What is your event about?'
                                options={category}
                                multiple={true}
                            />
                            <Field
                                name='description'
                                component={TextArea}
                                placeholder='Tell us about your event'
                                rows={5}
                            />
                            <Header sub color='teal' content="Event Location Details" />
                            <Field
                                name='city'
                                component={TextInput}
                                placeholder='Event City'
                            />
                            <Field
                                name='venue'
                                component={TextInput}
                                placeholder='Event Venue'
                            />
                            <Field
                                name='date'
                                component={TextInput}
                                placeholder='Event Date'
                                type='date'
                            />
                            {/* <Form.Field>
                        <label>Event Date</label>
                        <input
                            type='date'
                            placeholder='Event Date'
                            name='date'
                            value={event.date}
                            onChange={this.onInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input
                            placeholder='City event is taking place'
                            name='city'
                            value={event.city}
                            onChange={this.onInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input
                            placeholder='Enter the Venue of the event'
                            name='venue'
                            value={event.venue}
                            onChange={this.onInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input
                            placeholder='Enter the name of person hosting'
                            name='hostedBy'
                            value={event.hostedBy}
                            onChange={this.onInputChange}
                        />
                    </Form.Field> */}
                            <Button positive type='submit'>
                                Submit
                            </Button>
                            <Button
                                type='button'
                                onClick={this.props.history.goBack}
                            >
                                Cancel
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(
    mapState,
    actions
)(reduxForm({ form: "eventForm" })(EventForm));
