import React, {useState} from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ScheduleIcon from '@material-ui/icons/Schedule';

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
            }
            pubPointSchedule {
            pubPointSchedulePubDate
            pubPointScheduleKillDate
            }
        }
        }
    }`


  const GetVideoAssetsQuery = () => {
    const { loading, error, data } = useQuery(getVideoAssets);
    if (error) return <p>Error...</p>;
    if (loading || !data) return <p>Fetching...</p>;
    console.log(data.videoAssets);
    return  <ReactTable
      data={data.videoAssets}
      columns={columns}
      sortable={true}
      className='-striped -highlight'
    />
  }

const Main = (props) => {

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
            <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => props.gotoMetadata(row.original.id)}></CreateIcon>
            &nbsp;&nbsp;&nbsp;
            <ScheduleIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => props.gotoSchedule(row.original.id)}></ScheduleIcon>
          </span>
        )
      }
    ]
    return(   
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
            <GetVideoAssetsQuery/>
        </div>
    )

}

export default Main;