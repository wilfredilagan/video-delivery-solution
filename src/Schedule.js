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
import {gql} from 'apollo-boost';
import { useMutation, useQuery} from '@apollo/react-hooks';

let scheduleAsset = [];

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
    let pageAsset = [];
    let scheduleTemp = {}

const Schedule = (props) => {
  
  const { videoIdState, setVideoId, dataState, updateDataState, scheduleState, setScheduleState, eventState, setEventState, editingEvent, setEditingEvent, setAssetState, assetState} = useContext(UserContext);

  useEffect(()=> {
    
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
        console.log(pageAsset)
      }
    });
    
  }, [dataState,setAssetState,videoIdState])

  const [deleteScheduleCall] = useMutation(deleteScheduleMutation);

  const { loading, error, data, refetch} = useQuery(getVideoAssets);
  if (error) return <p>Error...</p>;
  if (loading || !data) return <p>Fetching...</p>;
  updateDataState(data);

  

  const editEvent = (row) => {
    console.log('Edit event button was clicked');
    setEventState(row);
    console.log(row);
    setEditingEvent(true);
  }

  const deleteEvent = async (row) => {
    console.log('Delete event button was clicked');
    console.log(videoIdState);
    console.log(row);
    deleteScheduleCall({variables: {pubPointAssetId: row.pubPointAssetId, pubPointScheduleId: row.pubPointScheduleId}})
    const dataRefetch = await refetch();
    updateDataState(dataRefetch.data);
    console.log(dataState);
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
        data={scheduleAsset}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
}

export default Schedule;