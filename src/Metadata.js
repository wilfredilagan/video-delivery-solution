import React, { Component, useContext, useEffect } from 'react';
import ReactTable from 'react-table';
import { NavLink, Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';
import UserContext from './UserContext'

const Metadata = (props) => {

  const { videoIdState, setVideoId, dataState, updateDataState, metadataState, setMetadata  } = useContext(UserContext);

  useEffect(()=> {
    console.log('editMetadata = ' + videoIdState);
    dataState.videoAssets.forEach((data) => {
      if(data.videoId === videoIdState) {
        const pageMetadata = data.pubPointAssetsByVideoId[0].pubPointMetadata;
        pageMetadata.platform = data.pubPointAssetsByVideoId[0].publishPoint;
        console.log(pageMetadata);
        setMetadata(pageMetadata);
      }
    });
  })

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
      <EditIcon style={{ fontSize: 18 }} onClick={() => props.history.push('/app/metadataedit')}></EditIcon>
    ),
    style: {
      cursor: 'pointer', 
      textAlign: 'center'
    }
  }]

  return (
    <div className="col">
      <p style={{textAlign: "left", fontSize: "30px"}}>Metadata</p>
      <NavLink to="/app/metadataedit" onClick={()=>setMetadata({})} style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add</NavLink>
      <ReactTable
        data={[metadataState]}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
  
}

export default Metadata;
