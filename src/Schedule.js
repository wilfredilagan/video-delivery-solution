import React, { Component, useContext, useEffect } from 'react';
import ReactTable from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css'
import { Input, Button, Col, Row } from 'reactstrap';
import { NavLink, Link} from "react-router-dom";
import UserContext from './UserContext'

const Schedule = (props) => {
 
  const { videoIdState, setVideoId, dataState, updateDataState, scheduleState, setSchedule  } = useContext(UserContext);

  useEffect(()=> {
    console.log('editSchedule = ' + videoIdState);
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        const pageSchedule = data.pubPointAssetsByVideoId[0].pubPointSchedule;
        pageSchedule.platform = data.pubPointAssetsByVideoId[0].publishPoint;
        setSchedule(pageSchedule);
        console.log(scheduleState);
      }
    });
  })

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
        <EditIcon style={{ fontSize: 18 }} onClick={() => props.handleScheduleEditClick(row.original.platform)}></EditIcon>
        &nbsp;&nbsp;&nbsp;
        <DeleteIcon style={{ fontSize: 18 }} onClick={() => props.handleScheduleDeleteClick(row.original.platform)} />
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

      <Row style={{paddingBottom: "2%"}}>
        <Col md={2}>      
          <Input name="pubpoint" placeholder="Publish Point" type="select">
            <option value="cad">Brightcove / tvo.org</option>
            <option value="cad">Brightcove / TVO/Kids</option>
            <option value="cad">Podcast</option>
            <option value="tvokids">YouTube</option>
          </Input>
        </Col> 
        <Col md={2}> 
          <Input placeholder="Start" name="start" type="text" />
        </Col> 
        <Col md={2}> 
          <Input placeholder="End" name="end" type="text" />
        </Col> 
        <Col md={1}> 
          <Button >Add</Button>
        </Col> 
      </Row>
          <NavLink to="/app/" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Publish</NavLink>
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