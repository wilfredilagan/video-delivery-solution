import React from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import { NavLink, Link} from "react-router-dom";
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import checkboxHOC from "react-table/lib/hoc/selectTable";
const CheckboxTable = checkboxHOC(ReactTable);

const data = [
  {
    id: '12345674',
    series: 'Paw Patrol',
    title: 'Pups Go to School',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2022-05-22 23:30',
  },
  {
    id: '12323876',
    series: 'Annedroids',
    title: 'Computronics',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '38765432',
    series: 'Odd Squad',
    title: 'Case of the missing toothpaste',
    status: 'Not Active',
    start: '',
    end: '',
  },
  {
    id: '45678567',
    series: 'Wild Kratts',
    title: 'Tigers',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '55634373',
    series: 'Odd Squad',
    title: 'Project Pink',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2029-05-22 23:30',
  },
  {
    id: '61323876',
    series: 'Paw Patrol',
    title: 'Pups Save Pups',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '75678567',
    series: 'Wild Kratts',
    title: 'Fish',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2099-05-22 23:30',
  },
  {
    id: '81323876',
    series: 'Annedroids',
    title: 'Robo Wars',
    status: 'Active',
    start: '2017-05-22 23:30',
    end: '2021-05-22 23:30',
  },
  {
    id: '91323876',
    series: 'Annedroids',
    title: 'Missing Parts',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '02355722',
    series: 'Wild Kratts',
    title: 'Whales',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2020-05-22 23:30',
  },
  {
    id: '22345674',
    series: 'Paw Patrol',
    title: 'Pups Take Charge',
    status: 'Active',
    start: '2021-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '41323877',
    series: 'Annedroids',
    title: 'Compubot',
    status: 'Active',
    start: '2010-05-22 23:30',
    end: '2045-05-22 23:30',
  },
  {
    id: '68765432',
    series: 'Odd Squad',
    title: 'The case of the missing french fry',
    status: 'Not Active',
    start: '',
    end: '',
  },
  {
    id: '85678567',
    series: 'Wild Kratts',
    title: 'Tigers',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '05634373',
    series: 'Odd Squad',
    title: 'Project Blue',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2022-05-22 23:30',
  },
  {
    id: '71323876',
    series: 'Paw Patrol',
    title: 'Pups To The Rescue',
    status: 'Active',
    start: '2011-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '65678567',
    series: 'Wild Kratts',
    title: 'Wolf Hawks',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2032-05-22 23:30',
  },
  {
    id: '51323876',
    series: 'Annedroids',
    title: 'Dumpster Diving',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '41323876',
    series: 'Annedroids',
    title: 'Search Partly',
    status: 'Active',
    start: '2017-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '32355722',
    series: 'Wild Kratts',
    title: 'Elephants',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '51323876',
    series: 'Annedroids',
    title: 'I, Android',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '62345674',
    series: 'Paw Patrol',
    title: 'Pups Save a Frog Mayor',
    status: 'Active',
    start: '2017-05-22 23:30',
    end: '2022-05-22 23:30',
  },
  {
    id: '75678567',
    series: 'Wild Kratts',
    title: 'Spots in the Desert',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '88765432',
    series: 'Odd Squad',
    title: 'The case of the missing bike',
    status: 'Not Active',
    start: '',
    end: '',
  },
  {
    id: '95678567',
    series: 'Wild Kratts',
    title: 'Deer Buckaroo',
    status: 'Active',
    start: '2016-05-22 23:30',
    end: '2032-05-22 23:30',
  },
  {
    id: '05634373',
    series: 'Odd Squad',
    title: 'Project Purple',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2029-05-22 23:30',
  },

  {
    id: '05678567',
    series: 'Wild Kratts',
    title: 'Hercules the Giant Beetle',
    status: 'Active',
    start: '2014-05-22 23:30',
    end: '2099-05-22 23:30',
  },
  {
    id: '13203876',
    series: 'Annedroids',
    title: 'Broken Parts',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2021-05-22 23:30',
  },
  {
    id: '13238076',
    series: 'Paw Patrol',
    title: 'Pups Save a Monky-Dinger',
    status: 'Active',
    start: '2012-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '33238769',
    series: 'Annedroids',
    title: 'Bugged Out',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '23557224',
    series: 'Wild Kratts',
    title: 'Capture the Fishmobiles',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2020-05-22 23:30',
  },
  {
    id: '23454674',
    series: 'Paw Patrol',
    title: 'Pups Save a Cloud Surfer',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '87635432',
    series: 'Odd Squad',
    title: 'The missing pencil',
    status: 'Not Active',
    start: '',
    end: '',
  },
  {
    id: '13238576',
    series: 'Annedroids',
    title: 'Map Quest',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2045-05-22 23:30',
  },
  {
    id: '56678567',
    series: 'Wild Kratts',
    title: 'Creepy Creatures! -Part 2',
    status: 'Active',
    start: '2017-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '56343737',
    series: 'Odd Squad',
    title: 'Project Orange',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2022-05-22 23:30',
  },
  {
    id: '13238766',
    series: 'Annedroids',
    title: 'Bionic Grandma',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2045-05-22 23:30',
  },
  {
    id: '13238765',
    series: 'Paw Patrol',
    title: 'Pups Save the Shivering Sheep',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '13238764',
    series: 'Annedroids',
    title: 'Friendiversary',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  },
  {
    id: '98238766',
    series: 'Annedroids',
    title: 'RoboMutt',
    status: 'Active',
    start: '2018-05-22 23:30',
    end: '2030-05-22 23:30',
  }]

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      selection: [],
      selectAll: false
    };
  }

  handleMetadataClick = (value) => {
    console.log('Asset ' + value + ' sent to metadata edit component')
    return this.props.history.push("/app/metadata");
  };

  handleScheduleClick = () => {
    console.log(this.state.selection);
  };

  toggleSelection = (key) => {
    key = key.replace("select-", "");
    let selection = [...this.state.selection];
    const keyIndex = selection.indexOf(key);
    if (keyIndex >= 0) {
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ];
    } else {
      selection.push(key);
    }
    this.setState({ selection });
  };

  toggleAll = () => {
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      currentRecords.forEach(item => {
        selection.push(item._original.id);
      });
    }
    this.setState({ selectAll, selection });
  };

  isSelected = key => {
    return this.state.selection.includes(key);
  };

  render() {
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
    },{
      Header: '',
      accessor: 'actions',
      width: 40,
      Cell: row => (
        <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => this.handleMetadataClick(row.original.id)}></CreateIcon>
        )
      }
    ]

    return(   
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
            <NavLink to="/app/schedule" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}} onClick={() => this.handleScheduleClick()}>Update Schedule</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}}>View Cart</NavLink>
            <CheckboxTable
              data={this.state.data}
              columns={columns}
              sortable={true}
              className='-striped -highlight'
              keyField="id"
              ref={r => (this.checkboxTable = r)}
              isSelected={this.isSelected}
              selectType="checkbox"
              toggleSelection={this.toggleSelection}
              toggleAll={this.toggleAll}
              selectAll={this.state.selectAll}
            />
        </div>
    )}

}