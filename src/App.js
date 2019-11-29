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

class App extends React.Component {
  Auth = new AuthHelperMethods();

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      metadataForm: {
        platform: 'test',
        title: 'test',
        description: 'test'
      },
      data: [
        {
          id: '145297',
          series: 'Paw Patrol',
          title: 'Pups Take Charge',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2022-05-22 23:30',
          metadata: [
            {
              id: 1,
              platform: 'Brightcove / TVOKids',
              title: 'Pups Save the Land Pirates',
              description: 'Pirates Alex, Julia, Julius and Chick-ARR-letta, are sent sailing into the desert and become lost!'
            },
            {
              id: 2,
              platform: 'Podcast / Kids',
              title: 'Pups Save the Pirates',
              description: 'The Pirates are sent sailing into the desert and become lost!'
            },
            {
              id: 3,
              platform: 'YouTube / Paw Patrol',
              title: 'Pups Save the Day',
              description: 'Some pirates go sailing and cannot find their way home!'
            }
          ],
          schedule: [
            {
              id: 1,
              platform: 'Brightcove / TVOKids',
              start: '2019-05-22 23:30',
              end: '2019-06-22 23:30'
            },
            {
              id: 2,
              platform: 'Brightcove / TVOKids',
              start: '2019-07-22 23:30',
              end: '2022-08-22 23:30'
            },
            {
              id: 3,
              platform: 'Brightcove / TVOKids',
              start: '2019-09-22 23:30',
              end: '2022-10-22 23:30'
            },
            {
              id: 4,
              platform: 'Podcast / Kids',
              start: '2018-05-22 23:30',
              end: '2021-05-22 23:30'
            },
            {
              id: 5,
              platform: 'YouTube / Paw Patrol',
              start: '2019-05-22 23:30',
              end: '2022-05-22 23:30'
            },
            {
              id: 6,
              platform: 'YouTube / Paw Patrol',
              start: '2019-08-22 23:30',
              end: '2022-11-22 23:30'
            }
          ]
        },
        {
          id: '2451217',
          series: 'Annedroids',
          title: 'Compubot',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [
            {
              id: 4,
              platform: 'Brightcove / TVOKids',
              title: 'Compubot takes over!',
              description: 'Compubot tries to take over the world!'
            },
            {
              id: 5,
              platform: 'YouTube / TVOKids',
              title: 'Compubot takes over the world',
              description: 'Compubot tries to take over the world!'
            }
          ],
          schedule: [
            {
              id: 7,
              platform: 'Brightcove / TVOKids',
              start: '2019-05-22 23:30',
              end: '2020-06-22 23:30'
            },
            {
              id: 8,
              platform: 'Brightcove / TVOKids',
              start: '2019-07-22 23:30',
              end: '2023-08-22 23:30'
            },
            {
              id: 9,
              platform: 'YouTube / Paw Patrol',
              start: '2019-09-22 23:30',
              end: '2099-10-22 23:30'
            },
          ]
        },
        {
          id: '6543444',
          series: 'Odd Squad',
          title: 'The case of the missing bike',
          status: 'Not Active',
          start: '',
          end: '',
          metadata: [],
          schedule: []
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Tigers',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '5634373',
          series: 'Odd Squad',
          title: 'Project Orange',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2029-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Paw Patrol',
          title: 'Pups To The Rescue',
          status: 'Active',
          start: '2018-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Wolf Hawks',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2099-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Dumpster Diving',
          status: 'Active',
          start: '2017-05-22 23:30',
          end: '2021-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Search Partly',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '2355722',
          series: 'Wild Kratts',
          title: 'Elephants',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2020-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '2345674',
          series: 'Paw Patrol',
          title: 'Pups Take Charge',
          status: 'Active',
          start: '2021-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Compubot',
          status: 'Active',
          start: '2010-05-22 23:30',
          end: '2045-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '8765432',
          series: 'Odd Squad',
          title: 'The case of the missing bike',
          status: 'Not Active',
          start: '',
          end: '',
          metadata: [],
          schedule: []
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Tigers',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '5634373',
          series: 'Odd Squad',
          title: 'Project Orange',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2022-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Paw Patrol',
          title: 'Pups To The Rescue',
          status: 'Active',
          start: '2011-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Wolf Hawks',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2032-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Dumpster Diving',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Search Partly',
          status: 'Active',
          start: '2017-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        },
        {
          id: '2355722222',
          series: 'Wild Kratts',
          title: 'Elephants',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30',
          metadata: [],
          schedule: []
        }
      ]
    }; //End of state
  } //End of constructor

  _handleLogout = () => {
    this.Auth.logout()
    return this.props.history.push("/login");
    }
  
  gotoMetadata = (id) => {
    this.state.data.forEach((data)=>{
      if(data.id === id) {
        this.metadata = data.metadata;
      }
    });
    console.log('gotoMetadata');
    console.log(this.metadata);
    this.props.history.push("/app/metadata");
  };

  gotoSchedule = (value) => {
    console.log('gotoSchedule');
    this.state.data.forEach((data)=>{
      if(data.id === value) {
        this.schedule = data.schedule;
      }
    });
    this.props.history.push("/app/schedule");
  };

  editMetadata = (id) => {
    console.log('editMetadata');
    this.state.data.forEach((data) => {
      if(typeof data.metadata != 'undefined') {
        data.metadata.forEach((metadata) => {
          if(metadata.id === id) {
            this.metadata = metadata;
            console.log(metadata);
          }
        });
      }
  });
    this.props.history.push("/app/metadatedit");
  };

  onChangeMetadata = (event) => {
    //console.log(event.target.value);
    this.setState({
      metadataForm: {[event.target.name]: event.target.value}
    });
  }

  submitMetadata = (value) => {
    console.log('submitMetadata')
    console.log(value)
    this.props.history.push("/app/metadata");
  };

  handleMetadataFormCancel = (value) => {
    console.log('handleMetadataFormCancel')
    this.props.history.push("/app/metadata");
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
            <Route exact path="/app/" render={() => <Main data={this.state.data} gotoMetadata={this.gotoMetadata} gotoSchedule={this.gotoSchedule}/>} />
            <Route path="/app/users" exact component={Users} />
            <Route path="/app/useredit" exact component={UserEdit} />
            <Route exact path="/app/metadata" render={() => <Metadata metadata={this.metadata} editMetadata={this.editMetadata} />} />
            <Route exact path="/app/metadatedit" render={() => <MetadataEdit onChangeMetadata={this.onChangeMetadata} metadataForm={this.state.metadataForm} />} />
            <Route exact path="/app/schedule" render={() => <Schedule schedule={this.schedule} handleScheduleEditClick={this.handleScheduleEditClick} handleScheduleDeleteClick={this.handleScheduleDeleteClick} />} />
            <Route path="/app/cart" exact component={Cart}/>
        </Row>
      </Container>
    </div>
  );
}
}
export default withAuth(App);