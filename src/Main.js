import React from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import { NavLink, Link} from "react-router-dom";
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {myRows: [
      {
        id: '2345674',
        series: 'Paw Patrol',
        title: 'Pups Take Charge',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Compubot',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '8765432',
        series: 'Odd Squad',
        title: 'The case of the missing bike',
        status: 'Not Active',
        start: '',
        end: '',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Tigers',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '5634373',
        series: 'Odd Squad',
        title: 'Project Orange',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2029-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Paw Patrol',
        title: 'Pups To The Rescue',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Wolf Hawks',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2099-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Dumpster Diving',
        status: 'Active',
        start: '2017-05-22 23:30',
        end: '2021-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Search Partly',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '2355722',
        series: 'Wild Kratts',
        title: 'Elephants',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2020-05-22 23:30',
      },
      {
        id: '2345674',
        series: 'Paw Patrol',
        title: 'Pups Take Charge',
        status: 'Active',
        start: '2021-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Compubot',
        status: 'Active',
        start: '2010-05-22 23:30',
        end: '2045-05-22 23:30',
      },
      {
        id: '8765432',
        series: 'Odd Squad',
        title: 'The case of the missing bike',
        status: 'Not Active',
        start: '',
        end: '',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Tigers',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '5634373',
        series: 'Odd Squad',
        title: 'Project Orange',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Paw Patrol',
        title: 'Pups To The Rescue',
        status: 'Active',
        start: '2011-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Wolf Hawks',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2032-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Dumpster Diving',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Search Partly',
        status: 'Active',
        start: '2017-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '2355722',
        series: 'Wild Kratts',
        title: 'Elephants',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      }
    ]}
  }

  handleStateChange = () => {
    this.setState({myRows: [
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'I, Android',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '2345674',
        series: 'Paw Patrol',
        title: 'Pups Save a Frog Mayor',
        status: 'Active',
        start: '2017-05-22 23:30',
        end: '2022-05-22 23:30',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Spots in the Desert',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '8765432',
        series: 'Odd Squad',
        title: 'The case of the missing bike',
        status: 'Not Active',
        start: '',
        end: '',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Deer Buckaroo',
        status: 'Active',
        start: '2016-05-22 23:30',
        end: '2032-05-22 23:30',
      },
      {
        id: '5634373',
        series: 'Odd Squad',
        title: 'Project Orange',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2029-05-22 23:30',
      },
 
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Hercules the Giant Beetle',
        status: 'Active',
        start: '2014-05-22 23:30',
        end: '2099-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Broken Parts',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2021-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Paw Patrol',
        title: 'Pups Save a Monky-Dinger',
        status: 'Active',
        start: '2012-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Bugged Out',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '2355722',
        series: 'Wild Kratts',
        title: 'Capture the Fishmobiles',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2020-05-22 23:30',
      },
      {
        id: '2345674',
        series: 'Paw Patrol',
        title: 'Pups Save a Cloud Surfer',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '8765432',
        series: 'Odd Squad',
        title: 'The case of the missing bike',
        status: 'Not Active',
        start: '',
        end: '',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Map Quest',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2045-05-22 23:30',
      },
      {
        id: '5678567',
        series: 'Wild Kratts',
        title: 'Creepy Creatures! -Part 2',
        status: 'Active',
        start: '2017-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '5634373',
        series: 'Odd Squad',
        title: 'Project Orange',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Bionic Grandma',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2045-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Paw Patrol',
        title: 'Pups Save the Shivering Sheep',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'Friendiversary',
        status: 'Active',
        start: '2019-05-22 23:30',
        end: '2030-05-22 23:30',
      },
      {
        id: '1323876',
        series: 'Annedroids',
        title: 'RoboMutt',
        status: 'Active',
        start: '2018-05-22 23:30',
        end: '2030-05-22 23:30',
      }
    ]})
  }

  handleMetadataClick = (value) => {
    console.log('Asset ' + value + ' sent to metadata edit component')
    return this.props.history.push("/app/metadata");
  };

  handleScheduleClick = () => {
    console.log('Update schedule link was clicked');
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
      Header: 'Status',
      accessor: 'status',
    },{
      Header: 'Start',
      accessor: 'start',
    },{
      Header: 'End',
      accessor: 'end',
    }
    ,{
      Header: 'Actions',
      accessor: 'actions',
      width: 90,
      Cell: row => (
        <span>
            <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => this.handleMetadataClick(row.original.id)}></CreateIcon>
            &nbsp;&nbsp;&nbsp;
            <input type='checkbox' />
          </span>
        )
      }
    ]
    return(   
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
            <NavLink to="/app/schedule" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}} onClick={() => this.handleScheduleClick()}>Update Schedule</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}}>View Cart</NavLink>
            <ReactTable
              data={data}
              columns={columns}
              sortable={true}
              className='-striped -highlight'
            />
            <br />
            <button onClick={() => this.handleStateChange()}>Update State</button>
        </div>
    )}

}