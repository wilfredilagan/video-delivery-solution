import React, { Component } from 'react';
import ReactTable from 'react-table'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css'
import { Input, Button, Col, Row } from 'reactstrap';
import { NavLink, Link} from "react-router-dom";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        platform: 'Brightcove / TVOKids',
        start: '2019-05-22 23:30',
        end: '2019-06-22 23:30'
      },
      {
        platform: 'Brightcove / TVOKids',
        start: '2019-07-22 23:30',
        end: '2022-08-22 23:30'
      },
      {
        platform: 'Brightcove / TVOKids',
        start: '2019-09-22 23:30',
        end: '2022-10-22 23:30'
      },
      {
        platform: 'Podcast / Kids',
        start: '2018-05-22 23:30',
        end: '2021-05-22 23:30'
        
      },
      {
        platform: 'YouTube / Paw Patrol',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30'
      },
      {
        platform: 'YouTube / Paw Patrol',
        start: '2019-08-22 23:30',
        end: '2022-11-22 23:30'
      }
    ]}
  }

  handleStateChange = () => {
    this.setState({myRows: [
      {
        platform: 'Bell Mobility / Kids',
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
          <EditIcon style={{ fontSize: 18 }} onClick={() => this.handleEditClick(row.original.platform)}></EditIcon>
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
         <p style={{textAlign: "left", fontSize: "30px"}}>Schedule</p>

        <Row style={{paddingBottom: "2%"}}>
          <Col md={2}>      
            <Input name="pubpoint" placeholder="Publish Point" type="select">
              <option value="cad">Brightcove / tvo.org</option>
              <option value="cad">Brightcove / TVO/Kids</option>
              <option value="cad">Podcast</option>
              <option value="tvokids">YouTube</option>
            </Input>
          </Col> 
          <Col md={2}> 
            <Input placeholder="Start" name="start" type="text" />
          </Col> 
          <Col md={2}> 
            <Input placeholder="End" name="end" type="text" />
          </Col> 
          <Col md={1}> 
            <Button >Add</Button>
          </Col> 
        </Row>
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Add to Cart</NavLink>
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

export default Schedule;