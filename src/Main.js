import React, {useState, useContext} from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import UserContext from './UserContext';
import {history} from './history';
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
            publishPoint
            pubPointMetadata {
            pubPointMetadataDesc
            pubPointMetadataTitle
            pubPointMetadataTags
            }
            pubPointSchedule {
            pubPointSchedulePubDate
            pubPointScheduleKillDate
            }
        }
        }
    }`

  

const Main = (props) => {
    const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata  } = useContext(UserContext);
    const [redirect, updateRedirect] = useState('/app/metadata');
    const { loading, error, data } = useQuery(getVideoAssets);
    if (error) return <p>Error...</p>;
    if (loading || !data) return <p>Fetching...</p>;
    updateDataState(data);
    console.log(data);
  
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
            <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => {setVideoId(row.original.videoId); editMetadata(videoIdState); history.push('/app/metadata')}}></CreateIcon>
            &nbsp;&nbsp;&nbsp;
            <ScheduleIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => props.gotoSchedule(row.original.id)}></ScheduleIcon>
        </span>
        )
      }
    ]
    console.log(videoIdState)

    const editMetadata = (id) => {
      console.log('editMetadata = ' + id);
      dataState.videoAssets.forEach((data) => {
        if(data.videoId === id) {
          const pageMetadata = data.pubPointAssetsByVideoId[0].pubPointMetadata;
          pageMetadata.platform = data.pubPointAssetsByVideoId[0].publishPoint;
          console.log(pageMetadata);
          setMetadata(pageMetadata);
          console.log(metadataState);
        }
      })
    }

    return(   

        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
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