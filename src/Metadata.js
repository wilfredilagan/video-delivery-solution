import React, { Component } from 'react';
import ReactTable from 'react-table';
import { NavLink, Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';

const Metadata = (props) => {

  const columns = [
  {
    Header: 'Platform',
    accessor: 'platform',
  },{
    Header: 'Title',
    accessor: 'title',
  },{
    Header: 'Description',
    accessor: 'description',
  },{
    Header: 'Actions',
    accessor: 'actions',
    width: 90,
    Cell: row => (
      <EditIcon style={{ fontSize: 18 }} onClick={() => props.handleMetadataEditClick(row.original.id, row.original.platform, row.original.title, row.original.description)}></EditIcon>
    ),
    style: {
      cursor: 'pointer', 
      textAlign: 'center'
    }
  }]

  return (
    <div className="col">
      <p style={{textAlign: "left", fontSize: "30px"}}>Metadata</p>
      <NavLink to="/app/metadatedit" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add</NavLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <NavLink to="/app" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Save</NavLink>
      <ReactTable
        data={props.metadata}
        columns={columns}
        sortable={true}
        className='-striped -highlight'
      />
    </div>
  )
  
}

export default Metadata;
