import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "../Navbar/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faPaperPlane,
  faPlay
} from "@fortawesome/free-solid-svg-icons";

import { SHA3 } from "sha3";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordType: "password"
    };

    this.hash = new SHA3(256);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShowHide = this.handleShowHide.bind(this);
  }

  validateForm() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var inputsNotEmpty =
      this.state.email.length > 0 && this.state.password.length > 0;
    return re.test(String(this.state.email).toLowerCase()) && inputsNotEmpty;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    let request = {
      email: this.state.email,
      password: this.hash.update(this.state.password).digest("hex")
    };
    console.log(request);
    event.preventDefault();
    event.stopPropagation();
  };

  handleShowHide = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      passwordType: this.state.passwordType === "input" ? "password" : "input"
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <Row>
            <Col md="6">
              <Card border="dark">
                <Card.Header>
                  <h4 className="h4-responsive">Logare</h4>
                </Card.Header>
                <Card.Body>
                  <Form
                    onSubmit={this.handleSubmit}
                    validated={this.validateForm()}
                  >
                    <Form.Group controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        autoFocus
                        type="email"
                        placeholder="Introduceti e-mail..."
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="inputLogin"
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Parola</Form.Label>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type={this.state.passwordType}
                          placeholder="Introduceti parola..."
                          value={this.state.password}
                          onChange={this.handleChange}
                          className="inputLogin passwordInput"
                        />
                        <InputGroup.Append>
                          <Button
                            variant="outline-dark"
                            onClick={this.handleShowHide}
                            className="hideShowButton"
                          >
                            <FontAwesomeIcon
                              icon={
                                this.state.passwordType === "password"
                                  ? faEye
                                  : faEyeSlash
                              }
                            />
                          </Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">
                      Logare
                      <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                    </Button>
                  </Form>
                </Card.Body>
                <Card.Footer />
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
