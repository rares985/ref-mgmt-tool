import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Tabs defaultActiveKey="Stiri" className="mb-4" id="noanim-tab-example">
          <Tab eventKey="Stiri" title="Stiri" />
          <Tab eventKey="delegari" title="Delegari" />
          <Tab eventKey="Arbitri" title="Arbitri" />
          <Tab eventKey="Login" title="Login" />
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
