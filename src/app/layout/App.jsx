import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboar';
import NavBar from '../../features/nav/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="main">
        <EventDashboard />  
      </Container>
    </div>
  );
}

export default App;
