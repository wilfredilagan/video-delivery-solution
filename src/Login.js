import React from 'react';
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
    console.log(this.state.username);
    console.log(this.state.password);
    //Add Axios code here
    //If credentials are valid, user role is returned
    //If user role is returned, route us to main page
    //If user role is not returned, display error
  }

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