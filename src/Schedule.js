import React, { Component, useContext, useState, useEffect, useRef } from 'react';
import ReactTable from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css'
import { Input, Button, Col, Row } from 'reactstrap';
import { NavLink, Link} from "react-router-dom";
import UserContext from './UserContext';
import ScheduleAdd from './ScheduleAdd';
import ScheduleEdit from './ScheduleEdit';
import {gql} from 'apollo-boost';
import { useMutation, useQuery} from '@apollo/react-hooks';



const deleteScheduleMutation = gql`
  mutation deleteSchedule($pubPointScheduleId: Int!, $pubPointAssetId: Int!) {
  __typename
  deletePubPointAsset(input: {pubPointAssetId: $pubPointAssetId}){
    clientMutationId
  }
  deletePubPointSchedule(input: {pubPointScheduleId: $pubPointScheduleId}) {
    query {
      pubPointAssets {
        pubPointSchedule {
          pubPointScheduleId
          pubPointScheduleKillDate
          pubPointSchedulePubDate
        }
      }
    }
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
    


const Schedule = (props) => {
  const { videoIdState, setVideoId, dataState, updateDataState, scheduleState, setScheduleState, eventState, setEventState, editingEvent, setEditingEvent, setAssetState, assetState} = useContext(UserContext);

  console.log('beginnning');

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


  const [deleteScheduleCall] = useMutation(deleteScheduleMutation);

  const { loading, error, data, refetch} = useQuery(getVideoAssets);
  if (error) return <p>Error...</p>;
  if (loading || !data) return <p>Fetching...</p>;
  updateDataState(data);

  const updateScheduleState = async () =>{
    console.log('test');
    let pageAsset = [];
    let scheduleTemp = {};
    let scheduleAsset = [];
    let rData = await refetchData();
    await console.log(rData);
    await rData.data.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          scheduleTemp = a.pubPointSchedule;
          scheduleTemp.platform = a.publishPoint;
          scheduleTemp.pubPointAssetId = a.pubPointAssetId
          scheduleAsset.push(scheduleTemp);
        })
        setScheduleState(scheduleAsset);
        setAssetState(pageAsset);
      }
    });
  }
 
  

 
  

  
 async function refetchData (){
   let dataRefetch = await refetch()
   return dataRefetch
 }
  

  const editEvent = (row) => {
    console.log('Edit event button was clicked');
    setEventState(row);
    setEditingEvent(true);
    
  }

  const deleteEvent = async (row) => {
    console.log('Delete event button was clicked');
    console.log(row);
    deleteScheduleCall({variables: {pubPointAssetId: row.pubPointAssetId, pubPointScheduleId: row.pubPointScheduleId}})
    console.log(scheduleState);
    setScheduleState(()=>{updateScheduleState()})
    //console.log(dataState);
    
    };

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
        <EditIcon style={{ fontSize: 18 }} onClick={() => {editEvent(row.original) }}></EditIcon>
        &nbsp;&nbsp;&nbsp;
        <DeleteIcon style={{ fontSize: 18 }} onClick={() => {deleteEvent(row.original)}} />
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
        data={scheduleState}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
}

export default Schedule;