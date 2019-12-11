import React, {useContext, useState} from 'react';
import {Input, Button, Col, Row } from 'reactstrap';
import UserContext from './UserContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduleEdit = (props) => {

  const { eventState, setEditingEvent } = useContext(UserContext);

  const [startDate, setStartDate] = useState(new Date(eventState.pubPointSchedulePubDate));
  const [endDate, setEndDate] = useState(new Date(eventState.pubPointScheduleKillDate));

  const updateEvent = (row) => {
    console.log('Update event button was clicked');
    console.log(eventState.pubPointScheduleId);
    console.log(eventState.platform);
    console.log(startDate);
    console.log(endDate);
    //WRITE TO DB: pubPointScheduleId, start, end
    //CALL DB: pubPointScheduleId
    //use setScheduleState to update the state
    setEditingEvent(false);
  }

  return (

    <Row style={{paddingBottom: "2%"}}>
      <Col md={2}>  
        <p>Platform</p>    
        <Input name="platform" disabled placeholder={eventState.platform} type="text" />
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