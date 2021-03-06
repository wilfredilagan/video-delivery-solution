import React, {useState, useContext, useEffect} from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import UserContext from './UserContext';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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

  

const Main = (props) => {
  
    const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata, setScheduleState, scheduleState, setAssetState  } = useContext(UserContext);
    
    const { loading, error, data } = useQuery(getVideoAssets);
    if (error) return <p>Error...</p>;
    if (loading || !data) return <p>Fetching...</p>;
    updateDataState(data);
    

  const columns = [{
    Header: 'ID',
    accessor: 'videoId',
    },{
    Header: 'Series',
    accessor: 'seriesId',
  },{
    Header: 'Title',
    accessor: 'mainTitle',
  },{
    Header: 'Status',
    accessor: 'status',
  },{
    Header: 'Start',
    accessor: 'earlyPubDate',
  },{
    Header: 'End',
    accessor: 'lastKillDate',
  },{
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <span>
            <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={()=>{changeVideoId(row.original.videoId); props.history.push('/app/metadata') } } tabIndex="0" aria-label={"edit metadata for " + row.original.videoId} aria-hidden="false"></CreateIcon>
            &nbsp;&nbsp;&nbsp;
            <ScheduleIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={()=>{changeVideoId(row.original.videoId); props.history.push('/app/schedule') }} tabIndex="0" aria-label={"edit schedule for " + row.original.videoId} aria-hidden="false"></ScheduleIcon>
        </span>
        )
      }
    ]
    const changeVideoId = (videoId)=>setVideoId(videoId);
    return(   

        <div className="col">
            <h1 style={{textAlign: "left", fontSize: "30px"}}>Recent Items</h1>
            <ReactTable
              data={data.videoAssets}
              columns={columns}
              sortable={true}
              className='-striped -highlight'
  />
        </div>
    )

}

export default Main;