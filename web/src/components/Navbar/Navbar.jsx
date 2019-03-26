import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Nav from "react-bootstrap/Nav";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" />
          <Nav.Link href="/"> Home </Nav.Link>
          <Nav.Link href="/matches"> Meciuri </Nav.Link>
          <Nav.Link href="/login"> Login </Nav.Link>
          <Nav.Link href="/referees"> Arbitri </Nav.Link>
        </Navbar>
      </React.Fragment>
    );
  }
}

// TODO: Add proptypes

export default App;
