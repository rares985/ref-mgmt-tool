import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./Login";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="m-3">
          <Row>
            <Col xs={1} />
          </Row>
        </Container>
        <Tabs defaultActiveKey="Login" className="mb-4" id="noanim-tab-example">
          <Tab eventKey="Stiri" title="Stiri">
            Stiri
          </Tab>
          <Tab eventKey="delegari" title="Delegari" />
          <Tab eventKey="Arbitri" title="Arbitri" />
          <Tab eventKey="Login" title="Login">
            <Login />
          </Tab>
          <Tab eventKey="Help" title="Help">
            Help
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

// TODO: Add proptypes

export default App;
