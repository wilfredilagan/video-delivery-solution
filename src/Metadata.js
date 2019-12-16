import React, { Component, useContext, useEffect } from 'react';
import ReactTable from 'react-table';
import { NavLink, Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';
import UserContext from './UserContext';


const Metadata = (props) => {

  const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata, addMetadataFlag, setAssetState, assetState, scheduleState, setScheduleState, setDisabledState  } = useContext(UserContext);

  useEffect(()=> {
    console.log('after render');
    let pageAsset = [];
    let metadataAsset = []
    let metadataTemp = {}
    console.log('editAsset = ' + videoIdState);
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        data.pubPointAssetsByVideoId.forEach((a) => {
          pageAsset.push(a);
          metadataTemp = a.pubPointMetadata;
          metadataTemp.platform = a.publishPoint;
          metadataAsset.push(metadataTemp);
          
          
        })
        setAssetState(pageAsset);
        setMetadata(metadataAsset)
      }
    });
  },[]);

  //console.log(metadataState);
  //console.log(assetState);

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
      <EditIcon style={{ fontSize: 18 }} onClick={() => { setDisabledState(true); addMetadataFlag(false); setMetadata(row.original); props.history.push('/app/metadataedit')}}></EditIcon>
    ),
    style: {
      cursor: 'pointer', 
      textAlign: 'center'
    }
  }]
console.log('intial render')
  return (
    <div className="col">
      <p style={{textAlign: "left", fontSize: "30px"}}>Metadata</p>
      <NavLink to="/app/metadataedit" onClick={()=>{addMetadataFlag(true); setDisabledState(false); setMetadata({})}} style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add</NavLink>
      <ReactTable
        data={metadataState}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
  
}

export default Metadata;
