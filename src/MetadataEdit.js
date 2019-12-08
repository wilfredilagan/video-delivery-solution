import React, {useContext, useState} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const MetadataEdit = (props) => {

  

      const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);
      
        return {
          value,
          setValue,
          reset: () => setValue(""),
          bind: {
            value,
            onChange: event => {
              setValue(event.target.value);
            }
          }
        };
      };
      const { metadataState, setMetadata  } = useContext(UserContext);
      console.log(metadataState);
      const [title, setTitle]= useState(metadataState.pubPointMetadataTitle);
      const [description, setDescription] = useState(metadataState.pubPointMetadataDesc)
      const [tags, setTags]=useState(metadataState.pubPointMetadataTags)

      const updateMetadataMutation = gql`
        mutation MyMutation ($pubPointMetadataDesc: String!, $pubPointMetadataTags: String!, $pubPointMetadataTitle: String!, $pubPointMetadataId: Integer!) {
          updatePubPointMetadatum(pubPointMetadataDesc: $pubPointMetadataDesc, pubPointMetadataTags: $pubPointMetadataTags, pubPointMetadataTitle: $pubPointMetadataTitle, pubPointMetadataId: $pubPointMetadataId){
            pubPointMetadataId
            pubPointMetadataTitle
            pubPointMetadataDesc
            pubPointMetadataTags
          }
        }`


        const [updateMetadataCall] = useMutation(updateMetadataMutation)

      return(
          <div className="col">
              <Row>
                <Col>
                  <p style={{textAlign: "left", fontSize: "30px"}}>Edit Metadata</p>
                </Col>
              </Row>
              <Row>
              <Col sm="12" md={{ size: 3, offset: 5 }} style={{paddingTop: "2%"}}>
                <p>Publish Point</p>
                <Input type='text' name='platform' value={metadataState.platform} disabled />
                <p>Title</p>
                <Input type='text' name='title' value={title} size="60" onChange={e => setTitle(e.target.value)} />
                <div></div>
                <p>Description</p>
                <Input type='text' name='description' value={description} onChange={e=> setDescription(e.target.value)} />
                <p>Tags</p>
                <Input type='text' name='tags' value={tags} onChange={e=> setTags(e.target.value)} />
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => updateMetadataCall({variables: {pubPointMetadataId: metadataState.pubPointMetadataId, pubPointMetadataTitle: title, pubPointMetadataDesc: description, pubPointMetadataTags: tags}})}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}



export default MetadataEdit;