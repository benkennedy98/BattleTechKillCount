import React from 'react';
import { Navbar } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Kill Board</Navbar.Brand>
      </Navbar>
    )
  }
}

export default App;