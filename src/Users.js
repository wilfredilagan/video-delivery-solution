import React, { Component } from 'react';
import { Input, Button, Col, Row } from 'reactstrap';
import ReactTable from 'react-table';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import 'react-table/react-table.css';
import withAuth from './withAuth';

class Users extends Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        username: 'wiligan',
        password: 'letmein',
        email: 'wiligan@tvo.org',
        group: 'Super',
        role: 'Admin'
      },
      {
        username: 'klennox',
        password: 'password1234',
        email: 'klennox@tvo.org',
        group: 'Super',
        role: 'Admin'
      },
      {
        username: 'creyes',
        password: 'changeme',
        email: 'creyes@tvo.org',
        group: 'TVOKids',
        role: 'Marketing'
      },
      {
        username: 'schristenson',
        password: 'p455w0rd',
        email: 'schristenson@tvo.org',
        group: 'CAD',
        role: 'Scheduler'
      },
      {
        username: 'vtagareli',
        password: 'abc123',
        email: 'vtagareli@tvo.org',
        group: 'TVOKids',
        role: 'Scheduler'
      }
    ]}
  }

  handleStateChange = () => {
    this.setState({myRows: [
      {
        platform: 'Bell Mobility / Kids',
        title: 'Pups In Charge',
        start: '2017-05-22 23:30',
        end: '2099-05-22 23:30'
        
      },
      {
        platform: 'Brightcove / TVOKids',
        title: 'Pups Take Charge',
        start: '2016-05-22 23:30',
        end: '2040-05-22 23:30'
       
      },
      {
        platform: 'Intranet',
        title: 'Pups Save the Day!',
        start: '2016-05-22 23:30',
        end: '2023-05-22 23:30'
        
      },
      {
        platform: 'CBC',
        title: 'Pups Take Charge!',
        start: '2019-05-22 23:30',
        end: '2025-05-22 23:30'
      }
  ]})
  }

  handleAddClick = (value) => {
    console.log('Add ' + value)
    return this.props.history.push("/app/useredit");
  };

  handleEditClick = (value) => {
    console.log('Edit ' + value)
    return this.props.history.push("/app/useredit");
  };

  handleDeleteClick = value => console.log('Delete ' + value);
  
  render() {
    const data = this.state.myRows;
    const columns = [
    {
      Header: 'Username',
      accessor: 'username',
    },
   {
      Header: 'Password',
      accessor: 'password',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Group',
      accessor: 'group',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <>
          <EditIcon style={{ fontSize: 18 }} onClick={() => this.handleEditClick(row.original.username)} />
          &nbsp;&nbsp;&nbsp;
          <DeleteIcon style={{ fontSize: 18 }} onClick={() => this.handleDeleteClick(row.original.username)} />
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
        <p style={{textAlign: "left", fontSize: "30px"}}>Update Users</p>
        <Button onClick={this.handleAddClick} style={{marginTop: "30px", marginLeft: "10px", marginBottom: "10px"}}>Add User</Button>
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

export default withAuth(Users);