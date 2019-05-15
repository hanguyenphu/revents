import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import Attendees from './EventListAttendee';


class EventListItem extends Component {

  

    render() {
        const { event, onEventOpen, deleteEvent } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={this.props.event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{this.props.event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{this.props.event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>

                <Segment>
                    <span>
                        <Icon name="clock" />{event.date} |
                       <Icon name="marker" />{event.venue}  {event.city}
                    </span>
                </Segment>

                <Segment secondary>
                    <List horizontal>
                        {event.attendees && event.attendees.map((attendee) => (
                            <Attendees key={attendee.id} attendee={attendee} />
                        ))}

                    </List>
                </Segment>


                <Segment clearing>
                    <span>{this.props.event.description}</span>
                    <Button as="a" onClick={onEventOpen(event)} color="teal" floated="right" content="View"></Button>
                    <Button as="a" onClick={deleteEvent(event.id)} color="red" floated="right" content="Delete"></Button>
                </Segment>
            </Segment.Group>
        );
    }
}

export default EventListItem;