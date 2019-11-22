import React from 'react';
import {Input, Button, Col, Row } from 'reactstrap';

export default class Login extends React.Component {

  handleCancelClick = (value) => {
    console.log('Cancel')
    return this.props.history.push("/app/metadata");
  };

  handleSubmitClick = (value) => {
    console.log('Submit')
    return this.props.history.push("/app/metadata");
  };

  render(){
      return(
          <div className="col">
              <Row>
                <Col fluid>
                  <p style={{textAlign: "left", fontSize: "30px"}}>Edit Metadata</p>
                </Col>
              </Row>
              <Row>
              <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}>
                <p>Publish Point</p>
                <Input></Input>
                <p>Title</p>
                <Input ></Input>
                <div></div>
                <p>Description</p>
                <Input></Input>
                <p>Tags</p>
                <Input>
                </Input>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => this.handleCancelClick()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => this.handleSubmitClick()}>Submit</Button>
                </Col>
              </Row>
          </div>
      )}


}