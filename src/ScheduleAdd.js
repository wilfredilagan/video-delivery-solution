import React, {useContext, useState} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';


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
const createMetadataMutation = gql`
mutation createMetadata($pubPointMetadataDesc: String!, $pubPointMetadataTags: String!, $pubPointMetadataTitle: String!) {
createPubPointMetadatum(input: {pubPointMetadatum: {pubPointMetadataDesc: $pubPointMetadataDesc, pubPointMetadataTags: $pubPointMetadataTags, pubPointMetadataTitle: $pubPointMetadataTitle}})
{
  pubPointMetadatum{
    pubPointMetadataId
  }
}
}`

let metadataObject = {};

const ScheduleAdd = (props) => {

  const { videoIdState, dataState } = useContext(UserContext);

  const [platformState, setPlatformState] = useState('Brightcove / tvo.org');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [createAssetCall] = useMutation(createAssetMutation);
  const [createScheduleCall] = useMutation(createScheduleMutation);
  const [createMetadataCall] = useMutation(createMetadataMutation)

  dataState.videoAssets.forEach((data) => {
    if(data.videoId === videoIdState) {
        metadataObject = data
    }
  });

  const  addEvent = async () => {
    console.log('Add event button was clicked');
    console.log(videoIdState);
    console.log(platformState);
    console.log(startDate);
    console.log(endDate);
    let scheduleReturn = await createScheduleCall({variables: {pubPointSchedulePubDate: startDate, pubPointScheduleKillDate: endDate}});
    await console.log(scheduleReturn);
    let metadataReturn = await createMetadataCall({variables: {pubPointMetadataDesc: metadataObject.mainDescription, pubPointMetadataTitle: metadataObject.mainTitle, pubPointMetadataTags: ""}})
    await console.log(metadataReturn);
    createAssetCall({variables: {publishPoint: platformState, videoId: videoIdState, pubPointScheduleId: scheduleReturn.data.createPubPointSchedule.pubPointSchedule.pubPointScheduleId, pubPointMetadataId: metadataReturn.data.createPubPointMetadatum.pubPointMetadatum.pubPointMetadataId}})
    //DB call: POST new event to current video (videoIdState) schedule.
    //DB call: GET schedule for current video (videoIdState).
    //Update scheduleState using setScheduleState.
  }

  return (

    <Row style={{paddingBottom: "2%"}}>
      <Col md={2}>  
        <p>Platform</p>    
        <Input name="platform" type="select" onChange={(event) => setPlatformState(event.target.value)}>
          <option value="Brightcove / tvo.org">Brightcove / tvo.org</option>
          <option value="Brightcove / TVO/Kids">Brightcove / TVO/Kids</option>
          <option value="Brightcove / ILC">Brightcove / TVO/Kids</option>
          <option value="Podcast / WordBomb">Podcast / WordBomb</option>
          <option value="YouTube / Docs">YouTube / TVOKids</option>
          <option value="YouTube / Preschool">YouTube / TVOKids</option>
          <option value="YouTube / TVOKids">YouTube / TVOKids</option>
        </Input>
      </Col> 
      <Col md={2.5}>
        <p>Start</p>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="yyyy-MM-dd HH:mm"
        />
      </Col> 
      <Col md={2.5}>
        <p>End</p>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          dateFormat="yyyy-MM-dd HH:mm"
        />
      </Col> 
      <Col md={1}> 
        <Button onClick={addEvent}>Add</Button>
      </Col> 
    </Row>

  )

}

export default ScheduleAdd;