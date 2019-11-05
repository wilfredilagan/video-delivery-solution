import React from 'react';
import {
    Input,
    Button,
    Col,
    Row } from 'reactstrap';
export default class Login extends React.Component {
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
                        <Input></Input>
                        <p>Password</p>
                        <Input ></Input>
                        <div></div>
                        <p>Department</p>
                        <Input type="select">
                            <option>CAD</option>
                            <option>TVOKids</option>
                        </Input>
                        <p>Role</p>
                        <Input type="select">
                            <option>Content Scheduler</option>
                            <option>Marketing</option>
                            <option>Admiin</option>
                        </Input>
                        <div></div>
                        <p>Group Type</p>
                        <Input>
                            <option>kids</option>
                            <option>docs</option>
                        </Input>
                        <Button style={{marginTop: "30px", marginLeft: "10px"}}>Add</Button>
                        <Button style={{marginTop: "30px", marginLeft: "10px"}}>Update</Button>
                        <Button style={{marginTop: "30px", marginLeft: "10px"}}>Delete</Button>
                    </Col>
                </Row>
            </div>
        )}


}