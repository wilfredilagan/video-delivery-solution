import React, {useContext} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';

const MetadataEdit = (props) => {

      const { metadataState, setMetadata  } = useContext(UserContext);
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
                <Input type='text' name='platform' value={metadataState.platform} disabled />
                <p>Title</p>
                <Input type='text' name='title' value={metadataState.pubPointMetadataTitle} size="60" />
                <div></div>
                <p>Description</p>
                <Input type='text' name='description' value={metadataState.pubPointMetadataDesc} onChange={props.onChangeMetadata} />
                <p>Tags</p>
                <Input type='text' name='tags' value={metadataState.pubPointMetadataTags} onChange={props.onChangeMetadata}/>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.submitMetadata(props.metadataForm)}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}

export default MetadataEdit;