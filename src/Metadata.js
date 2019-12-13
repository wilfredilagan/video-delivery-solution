import React, { Component, useContext, useEffect } from 'react';
import ReactTable from 'react-table';
import { NavLink, Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';
import UserContext from './UserContext'

let metadataAsset = [];

const Metadata = (props) => {

  const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata, addMetadataFlag, setAssetState, assetState, scheduleState, setScheduleState, setDisabledState  } = useContext(UserContext);

  console.log(dataState);
  useEffect(()=> {
    let pageAsset = [];
    
    let metadataTemp = {}
    metadataAsset = [];
    console.log('editAsset = ' + videoIdState);
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        //console.log(data.pubPointAssetsByVideoId);
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          metadataTemp = a.pubPointMetadata;
          metadataTemp.platform = a.publishPoint;
          metadataAsset.push(metadataTemp);
          
        })
        setAssetState(pageAsset);
      }
    });
  }, [])

  const columns = [
  {
    Header: 'Platform',
    accessor: 'platform',
  },{
    Header: 'Title',
    accessor: 'pubPointMetadataTitle',
  },{
    Header: 'Description',
    accessor: 'pubPointMetadataDesc',
  },{
    Header: 'Actions',
    accessor: 'actions',
    width: 90,
    Cell: row => (
      <EditIcon style={{ fontSize: 18 }} onClick={() => { addMetadataFlag(false); setMetadata(row.original); props.history.push('/app/metadataedit')}}></EditIcon>
    ),
    style: {
      cursor: 'pointer', 
      textAlign: 'center'
    }
  }]

  return (
    <div className="col">
      <p style={{textAlign: "left", fontSize: "30px"}}>Metadata</p>
      <NavLink to="/app/metadataedit" onClick={()=>{addMetadataFlag(true); setDisabledState(false); setMetadata({})}} style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add</NavLink>
      <ReactTable
        data={metadataAsset}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
  
}

export default Metadata;
