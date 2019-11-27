import React from 'react';
import {Row} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css';
import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Main = (props) => {

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
            <CreateIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => props.handleMetadataClick(row.original.id)}></CreateIcon>
            &nbsp;&nbsp;&nbsp;
            <ScheduleIcon style={{ cursor: 'pointer', fontSize: 18 }} onClick={() => props.handleScheduleClick(row.original.id)}></ScheduleIcon>
          </span>
        )
      }
    ]
    return(   
        <div className="col">
            <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
            <ReactTable
              data={props.data}
              columns={columns}
              sortable={true}
              className='-striped -highlight'
            />
        </div>
    )

}

export default Main;