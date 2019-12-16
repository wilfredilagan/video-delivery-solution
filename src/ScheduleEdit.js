import React, {useContext, useState} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {gql} from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const updateScheduleMutation = gql`

mutation updateSchedule($pubPointScheduleId: Int!, $pubPointScheduleKillDate: Datetime!, $pubPointSchedulePubDate: Datetime! ) {
  __typename
  updatePubPointSchedule(input: {patch: {pubPointScheduleKillDate: $pubPointScheduleKillDate, pubPointSchedulePubDate: $pubPointSchedulePubDate}, pubPointScheduleId: $pubPointScheduleId}){
    clientMutationId
  }
}`


const ScheduleEdit = (props) => {

  const { videoIdState, eventState, setEditingEvent } = useContext(UserContext);

  const [startDate, setStartDate] = useState(new Date(eventState.pubPointSchedulePubDate));
  const [endDate, setEndDate] = useState(new Date(eventState.pubPointScheduleKillDate));
  const [updateScheduleCall] = useMutation(updateScheduleMutation);

  const updateEvent = (row) => {
    console.log('Update event button was clicked');
    console.log(videoIdState);
    console.log(eventState.pubPointScheduleId);
    console.log(eventState.platform);
    console.log(startDate);
    console.log(endDate);
    updateScheduleCall({variables: {pubPointScheduleId: eventState.pubPointScheduleId, pubPointSchedulePubDate: startDate, pubPointScheduleKillDate: endDate}})
    //DB call: GET schedule for current video (videoIdState).
    //Update scheduleState using setScheduleState.
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