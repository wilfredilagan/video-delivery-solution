import React, {useContext, useState, useEffect} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import {gql} from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const getVideoAssets = gql`
    query MyQuery {
        videoAssets {
        videoId
        mainTitle
        mainDescription
        lastKillDate
        earlyPubDate
        seriesId
        status
        pubPointAssetsByVideoId {
            publishPoint
            pubPointMetadata {
            pubPointMetadataId
            pubPointMetadataDesc
            pubPointMetadataTitle
            pubPointMetadataTags
            }
            pubPointSchedule {
            pubPointScheduleId
            pubPointSchedulePubDate
            pubPointScheduleKillDate
            }
        }
        }
    }`

const createAssetMutation = gql`
mutation createAsset ($publishPoint: String!, $videoId: String!, $pubPointMetadataId: Int!, $pubPointScheduleId:Int!) {
    __typename
    createPubPointAsset(input: {pubPointAsset: {publishPoint: $publishPoint, videoId: $videoId, pubPointMetadataId: $pubPointMetadataId, pubPointScheduleId: $pubPointScheduleId}}){
    pubPointAsset{
      pubPointAssetId
    }
  }
}`

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
      const { metadataState, setMetadata, updateDataState, dataState, addMetadata, assetState, metadataAsset, videoIdState, disabledState  } = useContext(UserContext);
      
      
      const [title, setTitle]= useState('');
      const [description, setDescription] = useState('')
      const [tags, setTags]=useState('')
      useEffect(()=>{
        if (addMetadata === false){
          setTitle(metadataState.pubPointMetadataTitle);
          setDescription(metadataState.pubPointMetadataDesc);
          setTags(metadataState.pubPointMetadataTags)
        }
      },[addMetadata, setTitle, setTags, metadataState])
      
      let updateMetadataMutation = '';
      //let updateAssetMutation = '';
      if (addMetadata === true){
        updateMetadataMutation = gql`
        mutation createMetadata($pubPointMetadataDesc: String!, $pubPointMetadataTags: String!, $pubPointMetadataTitle: String!) {
        createPubPointMetadatum(input: {pubPointMetadatum: {pubPointMetadataDesc: $pubPointMetadataDesc, pubPointMetadataTags: $pubPointMetadataTags, pubPointMetadataTitle: $pubPointMetadataTitle}})
        {
          pubPointMetadatum{
            pubPointMetadataId
          }
        }
      }`
      } else{
        updateMetadataMutation = gql`
        mutation updateMetadata($pubPointMetadataDesc: String!, $pubPointMetadataId: Int!, $pubPointMetadataTags: String!, $pubPointMetadataTitle: String!) {
          updatePubPointMetadatum(input: {patch: {pubPointMetadataDesc: $pubPointMetadataDesc, pubPointMetadataId: $pubPointMetadataId, pubPointMetadataTags: $pubPointMetadataTags, pubPointMetadataTitle: $pubPointMetadataTitle}, pubPointMetadataId: $pubPointMetadataId}) {
            clientMutationId
          }
        }`
      }

      const [updateMetadataCall] = useMutation(updateMetadataMutation);
      const [createAssetCall] = useMutation(createAssetMutation)
      const { loading, error, data, refetch } = useQuery(getVideoAssets);
      if (error) return <p>Error...</p>;
      if (loading || !data) return <p>Fetching...</p>;
      updateDataState(data);


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
                <Input type='text' name='platform' value={metadataState.platform} disabled={disabledState} />
                <p>Title</p>
                <Input type='text' name='title' value={title} size="60" onChange={e => setTitle(e.target.value)} />
                <div></div>
                <p>Description</p>
                <Input type='text' name='description' value={description} onChange={e=> setDescription(e.target.value)} />
                <p>Tags</p>
                <Input type='text' name='tags' value={tags} onChange={e=> setTags(e.target.value)} />
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={async () => {
                  if (addMetadata === true){
                    const metadataReturn = await updateMetadataCall({variables: {pubPointMetadataTitle: title, pubPointMetadataDesc: description, pubPointMetadataTags: tags}})
                    console.log(metadataReturn);
                    const assetReturn = await createAssetCall({variables:{publishPoint: assetState[0].publishPoint,videoId: videoIdState, pubPointScheduleId: assetState[0].pubPointSchedule.pubPointScheduleId, pubPointMetadataId: metadataReturn.data.createPubPointMetadatum.pubPointMetadatum.pubPointMetadataId }})
                    const dataRefetch = await refetch();
                    console.log(dataRefetch);
                     updateDataState(dataRefetch.data); 
                     props.history.push('/app/metadata')
                    }else{
                      updateMetadataCall({variables: {pubPointMetadataId: metadataState.pubPointMetadataId, pubPointMetadataTitle: title, pubPointMetadataDesc: description, pubPointMetadataTags: tags}});
                     const dataRefetch = await refetch(); 
                     updateDataState(dataRefetch.data); 
                    props.history.push('/app/metadata')}}}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}



export default MetadataEdit;