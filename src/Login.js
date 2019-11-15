import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
    Input,
    Button,
    Col,
    Row } from 'reactstrap';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username , password } = this.state;
    console.log(username);
    console.log(password);
    this.getAssets(username, password);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  renderError = () => {
    if (this.state.error) {
      return <div><p>Incorrect user name or password. Try again.</p></div>
    }
  }

  getAssets = async (username, password) => {
    try {
      const response = await axios.post("/api/authenticate", {username: username, password: password});
      console.log("response", response);
      if(response === 'HTTP/1.1 200 OK') {
        console.log("Login succeeded, go to assets page");
        this.setState({redirect: true});
      }else {
        console.log("Login failed, display error");
        this.setState({error: true});
      }
    } catch(error) {
      console.log("error", error);
    }
  };

  render(){
    return(
      <div className="col">
          {this.renderRedirect()}
          <Row>
              <Col fluid>
                  <p style={{textAlign: "left", fontSize: "30px"}}>Login</p>
              </Col>
          </Row>
          <Row>
              <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}fluid>
                  <p className="text-center">Username</p>
                  <Input name="username" type="text" onChange={this.handleChange} />
                  <p>Password</p>
                  <Input name="password" type="password" onChange={this.handleChange} />
                  <div></div>
                  <Button onClick={this.handleSubmit} style={{marginTop: "30px"}}>Submit</Button>
              </Col>
          </Row>
          {this.renderError()}
      </div>
    )}

}