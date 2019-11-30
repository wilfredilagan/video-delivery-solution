import React, {useState} from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import { NavLink, Link} from "react-router-dom";
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import checkboxHOC from "react-table/lib/hoc/selectTable";
import {gql} from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getVideoAssets = gql`
    query MyQuery {
        videoAssets {
        videoId
        mainTitle
        mainDescription
        lastKillDate
        earlyPubDate
        seriesId
        status
        pubPointAssetsByVideoId {
            publishPoint
            pubPointMetadata {
            pubPointMetadataDesc
            pubPointMetadataTitle
            }
            pubPointSchedule {
            pubPointSchedulePubDate
            pubPointScheduleKillDate
            }
        }
        }
    }`
    


const CheckboxTable = checkboxHOC(ReactTable);


    
const videoData = [
  {
    videoId: '12345674',
    seriesId: 'Paw Patrol',
    mainTitle: 'Pups Go to School',
    status: 'Active',
    earlyPubDate: '2019-05-22 23:30',
    lastKillDate: '2022-05-22 23:30',

  }]
  const columns = [{
    Header: 'ID',
    accessor: 'videoId',
    },{
    Header: 'Series',
    accessor: 'seriesId',
  },{
    Header: 'Title',
    accessor: 'mainTitle',
  },{
    Header: 'Status',
    accessor: 'status',
  },{
    Header: 'Start',
    accessor: 'earlyPubDate',
  },{
    Header: 'End',
    accessor: 'lastKillDate',
  },{
    Header: '',
    accessor: 'actions',
    width: 40,
    Cell: row => (
      <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => this.handleMetadataClick(row.original.id)}></CreateIcon>
      )
    }
  ]

  const GetVideoAssetsQuery = () => {
    const { loading, error, data } = useQuery(getVideoAssets);
    if (error) return <p>Error...</p>;
    if (loading || !data) return <p>Fetching...</p>;
    console.log(data.videoAssets);
    return <CheckboxTable
    data={data.videoAssets}
    columns={columns}
    sortable={true}
    className='-striped -highlight'
    keyField="id"
  />
  }

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      videoData,
      selection: [],
      selectAll: false,
      temp: {}
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
    
    



    return(  
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
            <NavLink to="/app/schedule" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}} onClick={() => this.handleScheduleClick()}>Update Schedule</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/app/cart" style={{justifyContent: 'center', color: 'black', fontSize: "20px"}}>View Cart</NavLink>
            <GetVideoAssetsQuery/>
        </div>
    )}

}