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
                        <p style={{textAlign: "left", fontSize: "30px"}}>Login</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}fluid>
                        <p className="text-center">Username</p>
                        <Input></Input>
                        <p>Password</p>
                        <Input ></Input>
                        <div></div>
                        <Button style={{marginTop: "30px"}}>Submit</Button>
                    </Col>
                </Row>
            </div>
        )}


}