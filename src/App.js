import React from 'react';
import './App.css';
import Nav from './Navbar';
import Main from './Main';
import Users from './Users';
import UserEdit from './UserEdit';
import Metadata from './Metadata';
import MetadataEdit from './MetadataEdit';
import Schedule from './Schedule';
import Cart from './Cart';
import { Container, Row, Col } from 'reactstrap';
import {Route} from "react-router-dom";
import AuthHelperMethods from './AuthHelperMethods';
import withAuth from './withAuth';

const data = [
  {
    id: '3841213',
    series: 'Paw Patrol',
    title: 'Pups Take Charge',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2022-05-22 23:30',
    metadata: [
      {
        id: '3841213',
        platform: 'Brightcove / TVOKids',
        title: 'Pups Save the Land Pirates',
        description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!'
      },
      {
        id: '3841213',
        platform: 'Podcast / Kids',
        title: 'Pups Save the Pirates',
        description: 'The Pirates are sent sailing into the desert and become lost!'
      },
      {
        id: '3841213',
        platform: 'YouTube / Paw Patrol',
        title: 'Pups Save the Day',
        description: 'Some pirates go sailing and cannot find their way home!'
      }
    ],
    schedule: [
      {
        id: '3841213',
        platform: 'Brightcove / TVOKids',
        start: '2019-05-22 23:30',
        end: '2019-06-22 23:30'
      },
      {
        id: '3841213',
        platform: 'Brightcove / TVOKids',
        start: '2019-07-22 23:30',
        end: '2022-08-22 23:30'
      },
      {
        id: '3841213',
        platform: 'Brightcove / TVOKids',
        start: '2019-09-22 23:30',
        end: '2022-10-22 23:30'
      },
      {
        id: '3841213',
        platform: 'Podcast / Kids',
        start: '2018-05-22 23:30',
        end: '2021-05-22 23:30'
      },
      {
        id: '3841213',
        platform: 'YouTube / Paw Patrol',
        start: '2019-05-22 23:30',
        end: '2022-05-22 23:30'
      },
      {
        id: '3841213',
        platform: 'YouTube / Paw Patrol',
        start: '2019-08-22 23:30',
        end: '2022-11-22 23:30'
      }
    ]
  },
  {
    id: '9031278',
    series: 'Annedroids',
    title: 'Compubot',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
    metadata: [
      {
        id: '9031278',
        platform: 'Brightcove / TVOKids',
        title: 'Compubot takes over!',
        description: 'Compubot tries to take over the world!'
      },
      {
        id: '9031278',
        platform: 'YouTube / TVOKids',
        title: 'Compubot takes over the world',
        description: 'Compubot tries to take over the world!'
      }
    ],
    schedule: [
      {
        id: '9031278',
        platform: 'Brightcove / TVOKids',
        start: '2019-05-22 23:30',
        end: '2020-06-22 23:30'
      },
      {
        id: '9031278',
        platform: 'Brightcove / TVOKids',
        start: '2019-07-22 23:30',
        end: '2023-08-22 23:30'
      },
      {
        id: '9031278',
        platform: 'YouTube / Paw Patrol',
        start: '2019-09-22 23:30',
        end: '2099-10-22 23:30'
      },
    ]
  },
  {
    id: '87654324444',
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
    id: '2355722222',
    series: 'Wild Kratts',
    title: 'Elephants',
    status: 'Active',
    start: '2019-05-22 23:30',
    end: '2030-05-22 23:30',
  }
]

class App extends React.Component {
  Auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data
    };
  }

  _handleLogout = () => {
    this.Auth.logout()
    return this.props.history.push("/login");
    }
  
  handleMetadataClick = (value) => {
    console.log('handleMetadataClick');
    data.forEach((data)=>{
      if(data.id === value) {
        this.metadata = data.metadata;
      }
    });
    this.props.history.push("/app/metadata");
  };

  handleMetadataEditClick = (id, platform, title, description) => {
    console.log('handleMetadataEditClick');
    this.id = id;
    this.platform = platform;
    this.title = title;
    this.description = description;
    this.props.history.push("/app/metadatedit");
  };

  handleMetadataFormSubmit = (value) => {
    console.log('handleMetadataFormSubmit')
    this.props.history.push("/app/metadata");
  };

  handleMetadataFormCancel = (value) => {
    console.log('handleMetadataFormCancel')
    this.props.history.push("/app/metadata");
  };

  handleScheduleClick = (value) => {
    console.log('handleScheduleClick');
    data.forEach((data)=>{
      if(data.id === value) {
        this.schedule = data.schedule;
      }
    });
    this.props.history.push("/app/schedule");
  };

  handleScheduleEditClick = (value) => {
    console.log('handleScheduleEditClick')
    console.log('Edit ' + value);
  }

  handleScheduleDeleteClick = (value) => {
    console.log('handleScheduleDeleteClickk')
    console.log('Delete ' + value);
  }

  render(){
    return (
    <div className="App">
      <Container fluid>
        <Row >
          <Col style={{backgroundColor:"#E7133D"}}>
            <Nav  />
          </Col>
        </Row>
        <Row >
            <Route exact path="/app/" render={() => <Main data={this.state.data} handleMetadataClick={this.handleMetadataClick} handleScheduleClick={this.handleScheduleClick}/>} />
            <Route path="/app/users" exact component={Users} />
            <Route path="/app/useredit" exact component={UserEdit} />
            <Route exact path="/app/metadata" render={() => <Metadata metadata={this.metadata} handleMetadataEditClick={this.handleMetadataEditClick} />} />
            <Route exact path="/app/metadatedit" render={() => <MetadataEdit id={this.id} platform={this.platform} title={this.title} description={this.description} handleMetadataFormCancel={this.handleMetadataFormCancel} handleMetadataFormSubmit={this.handleMetadataFormSubmit} />} />
            <Route exact path="/app/schedule" render={() => <Schedule schedule={this.schedule} handleScheduleEditClick={this.handleScheduleEditClick} handleScheduleDeleteClick={this.handleScheduleDeleteClick} />} />
            <Route path="/app/cart" exact component={Cart}/>
        </Row>
      </Container>
    </div>
  );
}
}
export default withAuth(App);