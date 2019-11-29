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
                <Input type='text' name='platform' value={props.metadataForm.platform} onChange={props.onChangeMetadata} disabled />
                <p>Title</p>
                <Input type='text' name='title' value={props.metadataForm.title} onChange={props.onChangeMetadata} size="60" />
                <div></div>
                <p>Description</p>
                <Input type='text' name='description' value={props.metadataForm.description} onChange={props.onChangeMetadata} />
                <p>Tags</p>
                <Input type='text' name='tags' />
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.submitMetadata()}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}

export default MetadataEdit;