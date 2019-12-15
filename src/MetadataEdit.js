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
            pubPointAssetId
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
const createScheduleMutation = gql`
mutation createSchedule($pubPointScheduleKillDate: Datetime!, $pubPointSchedulePubDate: Datetime!) {
  __typename
  createPubPointSchedule(input: {pubPointSchedule: {pubPointSchedulePubDate: $pubPointSchedulePubDate, pubPointScheduleKillDate: $pubPointScheduleKillDate}}) {
    pubPointSchedule {
      pubPointScheduleId
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
      const { metadataState, setMetadata, updateDataState, dataState, addMetadata, assetState, metadataAsset, videoIdState, disabledState, setAssetState  } = useContext(UserContext);
      
      
      const [title, setTitle]= useState('');
      const [description, setDescription] = useState('');
      const [tags, setTags]=useState('');
      const [publishPoint, setPublishPoint] = useState('')
      useEffect(()=>{
        if (addMetadata === false){
          setTitle(metadataState.pubPointMetadataTitle);
          setDescription(metadataState.pubPointMetadataDesc);
          setTags(metadataState.pubPointMetadataTags)
          setPublishPoint(metadataState.platform)
        }else{
          setPublishPoint("Brightcove / tvo.org")
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
      const [createAssetCall] = useMutation(createAssetMutation);
      const [createScheduleCall] = useMutation(createScheduleMutation);
      const { loading, error, data, refetch } = useQuery(getVideoAssets);
      if (error) return <p>Error...</p>;
      if (loading || !data) return <p>Fetching...</p>;
      updateDataState(data);

      const updateMetadataState = () =>{
        console.log(title);
      console.log(description);
      console.log(tags);
      console.log(publishPoint);
        let pageAsset = [];
        let metadataAsset = []
        let metadataTemp = {}
        console.log('editAsset = ' + videoIdState);
        dataState.videoAssets.forEach((data) => {
          if(data.videoId === videoIdState) {
            data.pubPointAssetsByVideoId.forEach((a) => {
              pageAsset.push(a);
              metadataTemp = a.pubPointMetadata;
              metadataTemp.platform = a.publishPoint;
              metadataAsset.push(metadataTemp);
          })
        setAssetState(pageAsset);
        setMetadata(metadataAsset)
         }
       });
      }

      

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
                <Input type='select' name='platform' value={publishPoint || "Brightcove / tvo.org"} onChange={e => setPublishPoint(e.target.value)} disabled={disabledState}>
                  <option value="Brightcove / tvo.org">Brightcove / tvo.org</option>
                  <option value="Brightcove / TVO/Kids">Brightcove / TVO/Kids</option>
                  <option value="Brightcove / ILC">Brightcove / TVO/Kids</option>
                  <option value="Podcast / WordBomb">Podcast / WordBomb</option>
                  <option value="YouTube / Docs">YouTube / TVOKids</option>
                  <option value="YouTube / Preschool">YouTube / TVOKids</option>
                  <option value="YouTube / TVOKids">YouTube / TVOKids</option>
                </Input>
                <p>Title</p>
                <Input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                <div></div>
                <p>Description</p>
                <Input type='text' name='description' value={description} onChange={e=> setDescription(e.target.value)} />
                <p>Tags</p>
                <Input type='text' name='tags' value={tags} onChange={e=> setTags(e.target.value)} />
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={() => props.handleMetadataFormCancel()}>Cancel</Button>
                <Button style={{marginTop: "30px", marginLeft: "10px"}} onClick={async () => {
                  if (addMetadata === true){
                    console.log(publishPoint);
                    const metadataReturn = await updateMetadataCall({variables: {pubPointMetadataTitle: title, pubPointMetadataDesc: description, pubPointMetadataTags: tags}})
                    console.log(metadataReturn);
                    const scheduleReturn = await createScheduleCall({variables: {pubPointSchedulePubDate: assetState[0].pubPointSchedule.pubPointSchedulePubDate, pubPointScheduleKillDate: assetState[0].pubPointSchedule.pubPointScheduleKillDate}})
                    const assetReturn = await createAssetCall({variables:{publishPoint: publishPoint, videoId: videoIdState, pubPointScheduleId: scheduleReturn.data.createPubPointSchedule.pubPointSchedule.pubPointScheduleId, pubPointMetadataId: metadataReturn.data.createPubPointMetadatum.pubPointMetadatum.pubPointMetadataId }})
                    const dataRefetch = await refetch();
                    console.log(dataRefetch);
                     updateDataState(dataRefetch.data);
                     updateMetadataState();
                     props.history.push('/app/metadata')
                    }else{
                      updateMetadataCall({variables: {pubPointMetadataId: metadataState.pubPointMetadataId, pubPointMetadataTitle: title, pubPointMetadataDesc: description, pubPointMetadataTags: tags}});
                     const dataRefetch = await refetch(); 
                     updateDataState(dataRefetch.data);
                     updateMetadataState();
                     console.log(metadataState);
                    props.history.push('/app/metadata')}}}>Submit</Button>
                </Col>
              </Row>
          </div>
      )
}



export default MetadataEdit;