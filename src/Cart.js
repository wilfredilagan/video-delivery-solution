import React from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink, Link} from "react-router-dom";

export default class Cart extends React.Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        id: '2345674',
        series: 'Paw Patrol',
        title: 'Pups Take Charge',
        schedule: '<li>Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</li><li>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30</li>'
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Compubot',
        schedule: 'Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</br>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30'
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Tigers',
        schedule: 'Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</br>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30'
      },
      {
        id: '5634373',
        series: 'Odd Squad',
        title: 'Project Orange',
        schedule: 'Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</br>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30'
      },
      {
        id: '1323876',
        series: 'Paw Patrol',
        title: 'Pups To The Rescue',
        schedule: 'Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</br>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30'
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Wolf Hawks',
        schedule: 'Brightcove / TVOKids: 2019-05-22 23:30 - 2022-05-22 23:30</br>Brightcove / TVOKids: 2019-05-22 23:30 - 2030-05-22 23:30'
      }
    ]}
  }

  handleDeleteClick = (value) => {
    console.log('Remove asset ' + value + ' from cart')
  };

  render() {
    const data = this.state.myRows;
    const columns = [{
      Header: 'ID',
      accessor: 'id',
      },{
      Header: 'Series',
      accessor: 'series',
    },{
      Header: 'Title',
      accessor: 'title',
    },{
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <DeleteIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => this.handleDeleteClick(row.original.id)}></DeleteIcon>
      )
    }
  ]
    return(   
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Cart</p>
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Publish</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px", marginTop: "4px"}}>Empty Cart</NavLink>
            <ReactTable
              data={data}
              columns={columns}
              sortable={true}
              className='-striped -highlight'
              SubComponent={row => {
                return (
                <div style={{textAlign: 'left', marginLeft: '100px'}}>
                  Brightcove / TVOKids: 2019-05-22 23:30 - 2022-06-22 23:30<br/>
                  Brightcove / TVOKids: 2019-07-22 23:30 - 2022-08-22 23:30<br/>
                  Brightcove / TVOKids: 2019-09-22 23:30 - 2022-10-22 23:30<br/>
                  Podcast / Kids: 2019-05-22 23:30 - 2099-05-22 23:30<br/>
                  YouTube / Paw Patrol: 2019-05-22 23:30 - 2022-06-22 23:30<br/>
                  YouTube / Paw Partrol: 2019-07-22 23:30 - 2022-08-22 23:30<br/>
                  YouTube / Paw Partrol: 2019-09-22 23:30 - 2022-10-22 23:30
                </div>)
                }
              }
            />
            <br />
            <button onClick={() => this.handleStateChange()}>Update State</button>
        </div>
    )}

}