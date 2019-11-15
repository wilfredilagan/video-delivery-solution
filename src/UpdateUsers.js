import React from 'react';
import {
    Input,
    Button,
    Col,
    Row } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          department: 'cad',
          role: 'scheduler',
          group: 'kids',
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
        console.log(this.state);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const { username , password, department, role, group } = this.state;
        console.log(username);
        console.log(password);
        console.log(department);
        console.log(role);
        console.log(group);
        this.getAssets(username, password, department, role, group);
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
    
      getAssets = async (username, password, department, role, group) => {
        try {
          const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {username: username, password: password, department: department, role: role, group: group});
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
                <Row>
                    <Col fluid>
                        <p style={{textAlign: "left", fontSize: "30px"}}>Admin</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}fluid>
                        <p>Username</p>
                        <Input name="username" type="text" onChange={this.handleChange} />
                        <p>Password</p>
                        <Input name="password" type="password" onChange={this.handleChange} />
                        <div></div>
                        <p>Department</p>
                        <Input name="department" type="select" onChange={this.handleChange} >
                            <option value="cad">CAD</option>
                            <option value="tvokids">TVOKids</option>
                        </Input>
                        <p>Role</p>
                        <Input name="role" type="select" onChange={this.handleChange} >
                            <option value="scheduler">Content Scheduler</option>
                            <option value="marketing">Marketing</option>
                            <option value="admin">Admiin</option>
                        </Input>
                        <div></div>
                        <p>Group</p>
                        <Input name="group" type="select" onChange={this.handleChange} >
                            <option value="kids">kids</option>
                            <option value="docs">docs</option>
                        </Input>
                        <Button onClick={this.handleSubmit} style={{marginTop: "30px", marginLeft: "10px"}}>Add</Button>
                        {/* <Button style={{marginTop: "30px", marginLeft: "10px"}}>Update</Button>
                        <Button style={{marginTop: "30px", marginLeft: "10px"}}>Delete</Button> */}
                    </Col>
                </Row>
            </div>
        )}


}