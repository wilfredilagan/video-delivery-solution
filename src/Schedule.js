import React, { Component, useContext, useState, useEffect } from 'react';
import ReactTable from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css'
import { Input, Button, Col, Row } from 'reactstrap';
import { NavLink, Link} from "react-router-dom";
import UserContext from './UserContext';
import ScheduleAdd from './ScheduleAdd';
import ScheduleEdit from './ScheduleEdit';

const Schedule = (props) => {
  
  const { videoIdState, setVideoId, dataState, updateDataState, scheduleState, setScheduleState, eventState, setEventState, editingEvent, setEditingEvent } = useContext(UserContext);

  useEffect(()=> {
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        const pageSchedule = data.pubPointAssetsByVideoId[0].pubPointSchedule;
        pageSchedule.platform = data.pubPointAssetsByVideoId[0].publishPoint;
        setScheduleState(pageSchedule);
      }
    });
  })

  const editEvent = (row) => {
    console.log('Edit event button was clicked');
    setEventState(row);
    console.log(row);
    setEditingEvent(true);
  }

  const deleteEvent = (row) => {
    console.log('Delete event button was clicked');
    console.log(videoIdState);
    console.log(row);
    //DB call: DELETE event (row.pubPointScheduleId) for current video id (videoIdState).
    //DB call: GET schedule for current video id (videoIdState).
    //Update scheduleState using setScheduleState.
  }

  const columns = [
  {
    Header: 'Platform',
    accessor: 'platform',
  },{
    Header: 'Start',
    accessor: 'pubPointSchedulePubDate',
  },{
    Header: 'End',
    accessor: 'pubPointScheduleKillDate',
  },{
    Header: 'Actions',
    accessor: 'actions',
    width: 90,
    Cell: row => (
      <>
        <EditIcon style={{ fontSize: 18 }} onClick={() => editEvent(row.original)}></EditIcon>
        &nbsp;&nbsp;&nbsp;
        <DeleteIcon style={{ fontSize: 18 }} onClick={() => deleteEvent(row.original)} />
      </>
    ),
    style: {
      cursor: 'pointer', 
      textAlign: 'center'
    }
  }]

  return (
    <div className="col">
      <p style={{textAlign: "left", fontSize: "30px"}}>Schedule</p>
      <div>
        {
          editingEvent ? (
            <>
              <h2>Update event</h2>
              
              <ScheduleEdit />
            </>
          ) : (
            <>
              <h2>Add event</h2>
              <ScheduleAdd />
            </>
          )
        }
      </div>
      <ReactTable
        data={[scheduleState]}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
}

export default Schedule;