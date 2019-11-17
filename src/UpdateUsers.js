import React from 'react';
import {
    Input,
    Button,
    Col,
    Row } from 'reactstrap';
import axios from 'axios';
import AuthHelperMethods from './AuthHelperMethods';
import { history } from './history';
import withAuth from './withAuth';

class UpdateUsers extends React.Component {

    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          email: '',
          department: 'cad',
          role: 'scheduler',
          profile_picture: '',
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
        const { username , password, email, department, role, profile_picture} = this.state;
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(department);
        console.log(role);
        console.log(profile_picture)
        this.getAssets(username, password, email, department, role, profile_picture);
      }
    
      renderConfirmation = () => {
        if (this.state.confirmation) {
          return <div><p>User successfully added</p></div>
        }
      }
    
      async getAssets (username, password, email, department, role, profile_picture) {
        try {
          console.log(username);
          const response = await axios.post("http://localhost:4000/api/adduser", {username: username, password: password, email_address: email, department: department, role: role, profile_picture: profile_picture});
          console.log("response", response);
          if(response) {
            console.log("Login succeeded, display confirmation");
            this.setState({confirmation: true});
            setTimeout(() => {
              history.push("/login");
            }, 3000);
          }
        } catch(error) {
          console.log("error", error);
        }
      };

      
    
    render(){
        return(
            <div className="col">
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
                        <p>Profile Picture</p>
                        <Input name="profile_picture" type="file" onChange={this.handleChange} />
                        <Button onClick={this.handleSubmit} style={{marginTop: "30px", marginLeft: "10px"}}>Add</Button>
                        {/* <Button style={{marginTop: "30px", marginLeft: "10px"}}>Update</Button>
                        <Button style={{marginTop: "30px", marginLeft: "10px"}}>Delete</Button> */}
                    </Col>
                </Row>
                {this.renderConfirmation()}
            </div>
        )}

}

export default withAuth(UpdateUsers);