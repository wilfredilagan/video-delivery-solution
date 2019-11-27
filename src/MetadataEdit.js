import React from 'react';
import {Input, Button, Col, Row } from 'reactstrap';

const MetadataEdit = (props) => {

      return(
          <div className="col">
              <Row>
                <Col fluid>
                  <p style={{textAlign: "left", fontSize: "30px"}}>Edit Metadata</p>
                </Col>
              </Row>
              <Row>
              <Col sm="12" md={{ size: 3, offset: 5 }} style={{paddingTop: "2%"}}>
                <p>Publish Point</p>
                <Input value={props.platform} disabled></Input>
                <p>Title</p>
                <Input size="60" value={props.title}></Input>
                <div></div>
                <p>Description</p>
                <Input value={props.description}></Input>
                <p>Tags</p>
                <Input>
                </Input>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormSubmit()}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}

export default MetadataEdit;