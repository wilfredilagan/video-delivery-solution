import React, {useContext, useState, useEffect} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {gql} from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const updateScheduleMutation = gql`

mutation updateSchedule($pubPointScheduleId: Int!, $pubPointScheduleKillDate: Datetime!, $pubPointSchedulePubDate: Datetime! ) {
  __typename
  updatePubPointSchedule(input: {patch: {pubPointScheduleKillDate: $pubPointScheduleKillDate, pubPointSchedulePubDate: $pubPointSchedulePubDate}, pubPointScheduleId: $pubPointScheduleId}){
    clientMutationId
  }
}`
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

const ScheduleEdit = (props) => {

  const { videoIdState, eventState, setEditingEvent,setAssetState, setScheduleState, updateDataState, dataState,scheduleState } = useContext(UserContext);

  const [startDate, setStartDate] = useState(new Date(eventState.pubPointSchedulePubDate));
  const [endDate, setEndDate] = useState(new Date(eventState.pubPointScheduleKillDate));
  const [updateScheduleCall] = useMutation(updateScheduleMutation);
  
  useEffect(()=> {
    let pageAsset = [];
    let scheduleTemp = {};
    let scheduleAsset = [];
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          scheduleTemp = a.pubPointSchedule;
          scheduleTemp.platform = a.publishPoint;
          scheduleTemp.pubPointAssetId = a.pubPointAssetId
          scheduleAsset.push(scheduleTemp);
        })
        setAssetState(pageAsset);
        setScheduleState(scheduleAsset);
      }
    });
    
  }, [])

  const { loading, error, data, refetch} = useQuery(getVideoAssets);
  if (error) return <p>Error...</p>;
  if (loading || !data) return <p>Fetching...</p>;
  updateDataState(data);
  console.log(dataState);
  

  
  const updateScheduleState = async () =>{
    console.log('test');
    let pageAsset = [];
    let scheduleTemp = {};
    let scheduleAsset = [];
    let rData = await refetchedData();
    rData.data.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          scheduleTemp = a.pubPointSchedule;
          scheduleTemp.platform = a.publishPoint;
          scheduleTemp.pubPointAssetId = a.pubPointAssetId
          scheduleAsset.push(scheduleTemp);
        })
        setAssetState(pageAsset);
        setScheduleState(scheduleAsset);
        console.log(scheduleState)
      }
    });
    
  }

  const refetchedData = async () =>{
    const dataRefetch = await refetch();
    console.log(dataRefetch);
    return dataRefetch;
  }

  


  const updateEvent = (row) => {
    console.log('Update event button was clicked');
    updateScheduleCall({variables: {pubPointScheduleId: eventState.pubPointScheduleId, pubPointSchedulePubDate: startDate, pubPointScheduleKillDate: endDate}})
    //DB call: GET schedule for current video (videoIdState).
    //Update scheduleState using setScheduleState.
    setScheduleState(()=>{updateScheduleState()});
    setEditingEvent(false);
  }

  return (

    <Row style={{paddingBottom: "2%"}}>
      <Col md={2}>  
        <p>Platform</p>    
        <Input name="platform" disabled value={eventState.platform} type="text" />
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
        <Button onClick={updateEvent}>Update</Button>
      </Col> 
      <Col md={1}> 
        <Button onClick={() => {setEditingEvent(false)}}>Cancel</Button>
      </Col> 
    </Row>

  )

}

export default ScheduleEdit;