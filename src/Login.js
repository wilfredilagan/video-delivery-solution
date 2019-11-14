import React from 'react';
import axios from 'axios';
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
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
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

  //Use for testing: https://jsonplaceholder.typicode.com/posts
  //Use for prod: 
  getAssets = async (username, password) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {username: username, password: password});
      console.log("response", response);
      if(response === '') {
        console.log("Login succeeded, go to assets page");
      }else {
        console.log("Login failed, display error");
      }
    } catch(error) {
      console.log("error", error);
    }
  };

  render(){
      return(
          <div className="col">
              <Row>
                  <Col fluid>
                      <p style={{textAlign: "left", fontSize: "30px"}}>Login</p>
                  </Col>
              </Row>
              <Row>
                  <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}fluid>
                      <p className="text-center">Username</p>
                      <Input name="username" type="text" onChange={this.handleInputChange} />
                      <p>Password</p>
                      <Input name="password" type="password" onChange={this.handleInputChange} />
                      <div></div>
                      <Button onClick={this.handleSubmit} style={{marginTop: "30px"}}>Submit</Button>
                  </Col>
              </Row>
          </div>
      )}

}