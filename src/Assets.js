import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import {Link} from "react-router-dom";

class Assets extends Component {
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
      },
    ]
  })
}

  handleClick = value => console.log(value);
  
  render() {
    const data = this.state.myRows;
    const columns = [{
      Header: 'ID',
      accessor: 'id',
      Cell: row => (<span onClick={() => this.handleClick(row.original.id)}><Link to="/publishpointasset">{row.original.id}</Link></span>),
      style: {cursor: 'pointer', textAlign: 'center', color: 'blue', textDecoration: 'underline'}
    }, {
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
    }]

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

export default Assets;
