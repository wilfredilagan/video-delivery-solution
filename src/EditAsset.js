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
                    <Col>
                        <p>ID</p>
                        <Input></Input>
                        <p>Title</p>
                        <Input ></Input>
                        <div></div>
                        <p>Description</p>
                        <Input></Input>
                        <p>Tags</p>
                        <Input>
                        </Input>
                        
                    </Col>
                    <Col>
                    <p>ID</p>
                        <Input></Input>
                        <p>Publish Point Title</p>
                        <Input ></Input>
                        <div></div>
                        <p>Publish Point Description</p>
                        <Input></Input>
                        <p>Publish Point Tags</p>
                        <Input>
                        </Input>
                    </Col>
                    <Col>
                        <p>Publish Date</p>
                        <Input></Input>
                        <p>Kill Date</p>
                        <Input>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <div style={{alignContent: "center"}}>
                    <Button style={{marginTop: "30px", marginLeft: "10px"}}>Add</Button>
                    <Button style={{marginTop: "30px", marginLeft: "10px"}}>Update</Button>
                    <Button style={{marginTop: "30px", marginLeft: "10px"}}>Delete</Button>
                    </div>
                </Row>
            </div>
        )}


}