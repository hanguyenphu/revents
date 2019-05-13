import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
class NavBar extends Component {
    render() {
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>
                        <img src="assets/logo.png" alt="logo" />    
                        Re-events
                    </Menu.Item>

                    <Menu.Item name="Events" /> 

                    <Menu.Item>
                        <Button floated="right" positive inverted content="Create Event"/>
                    </Menu.Item>

                    <Menu.Item position="right">
                        <Button basic inverted content="Login"></Button>
                        <Button basic inverted content="Sign up" style={{marginLeft: '0.5em'}}></Button>
                    </Menu.Item>
                </Container>

            </Menu>
        );
    }
}

export default NavBar;