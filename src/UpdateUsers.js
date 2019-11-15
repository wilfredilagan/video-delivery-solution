import React from 'react';
import {
    Input,
    Button,
    Col,
    Row } from 'reactstrap';
import axios from 'axios';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          email: '',
          department: 'cad',
          role: 'scheduler',
          group: 'kids',
          confirmation: false
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
        const { username , password, email, department, role, group } = this.state;
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(department);
        console.log(role);
        console.log(group);
        this.getAssets(username, password, email, department, role, group);
      }
    
      renderConfirmation = () => {
        if (this.state.confirmation) {
          return <div><p>User successfully added</p></div>
        }
      }
    
      getAssets = async (username, password, email, department, role, group) => {
        try {
          const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {username: username, password: password, email: email, department: department, role: role, group: group});
          console.log("response", response);
          if(response) {
            console.log("Login succeeded, display confirmation");
            this.setState({confirmation: true});
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
                        <p>Email</p>
                        <Input name="email" type="email" onChange={this.handleChange} />
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
                {this.renderConfirmation()}
            </div>
        )}

}