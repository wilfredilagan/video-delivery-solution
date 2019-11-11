import React, { Component } from 'react';
import ReactTable from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css'
import {Link} from "react-router-dom";

class Asset extends Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        platform: 'Brightcove / TVOKids',
        title: 'Pups Save the Land Pirates',
        description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30'
      },
      {
        platform: 'Podcast / Kids',
        title: 'Pups Save the Pirates',
        description: 'The Pirates are sent sailing into the desert and become lost!',
        start: '2018-05-22 23:30',
        end: '2021-05-22 23:30'
        
      },
      {
        platform: 'YouTube / Paw Patrol',
        title: 'Pups Save the Day',
        description: 'Some pirates go sailing and cannot find their way home!',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30'
      }
    ]}
  }

  handleStateChange = () => {
    this.setState({myRows: [
      {
        platform: 'Bell Mobility / Kids',
        title: 'Pups Save the Land Pirates',
        description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!',
        start: '2017-05-22 23:30',
        end: '2099-05-22 23:30'
        
      }
  ]})
  }

  handleEditClick = value => console.log('Edit ' + value);
  handleDeleteClick = value => console.log('Delete ' + value);
  
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
      Header: 'Start',
      accessor: 'start',
    },
    {
      Header: 'End',
      accessor: 'end',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <>
          <Link to="/asset"><EditIcon style={{ fontSize: 18 }} onClick={() => this.handleEditClick(row.original.platform)}></EditIcon></Link>
          &nbsp;&nbsp;&nbsp;
          <DeleteIcon style={{ fontSize: 18 }} onClick={() => this.handleDeleteClick(row.original.platform)} />
        </>
      ),
      style: {
        cursor: 'pointer', 
        textAlign: 'center'
      }
    }
  ]

    return (
      <div className="col">
        <ReactTable
          data={data}
          columns={columns}
          sortable={true}
          className='-striped -highlight'
          //pages={'3'} // Display the total number of pages
          //loading={'Loading....'} // Display the loading overlay when we need it
        />
        <br />
        <button onClick={() => this.handleStateChange()}>Update State</button>
      </div>
    )
  }

}

export default Asset;
