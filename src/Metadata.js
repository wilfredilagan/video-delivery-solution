import React, { Component } from 'react';
import ReactTable from 'react-table';
import { NavLink, Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import 'react-table/react-table.css';

class Metadata extends Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        platform: 'Brightcove / TVOKids',
        title: 'Pups Save the Land Pirates',
        description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!'
      },
      {
        platform: 'Podcast / Kids',
        title: 'Pups Save the Pirates',
        description: 'The Pirates are sent sailing into the desert and become lost!'
        
      },
      {
        platform: 'YouTube / Paw Patrol',
        title: 'Pups Save the Day',
        description: 'Some pirates go sailing and cannot find their way home!'
      }
    ]}
  }

  handleStateChange = () => {
    this.setState({myRows: [
      {
        platform: 'Bell Mobility / Kids',
        title: 'Pups Save the Land Pirates',
        description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!'
      }
  ]})
  }

  handleEditClick = (value) => {
    console.log('Edit ' + value)
    return this.props.history.push("/app/metadatedit");
  };
  
  render() {
    const data = this.state.myRows;
    const columns = [
    {
      Header: 'Platform',
      accessor: 'platform',
    },
   {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <EditIcon style={{ fontSize: 18 }} onClick={() => this.handleEditClick(row.original.platform)}></EditIcon>
      ),
      style: {
        cursor: 'pointer', 
        textAlign: 'center'
      }
    }
  ]

    return (
      <div className="col">
         <p style={{textAlign: "left", fontSize: "30px"}}>Metadata</p>
         <NavLink to="/app/metadatedit" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add</NavLink>
         &nbsp;&nbsp;&nbsp;&nbsp;
         <NavLink to="/app" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Save</NavLink>
        <ReactTable
          data={data}
          columns={columns}
          sortable={true}
          className='-striped -highlight'
        />
        <br />
        <button onClick={() => this.handleStateChange()}>Update State</button>
      </div>
    )
  }

}

export default Metadata;
