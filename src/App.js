import React, {useState} from 'react';
import './App.css';
import Nav from './Navbar';
import Main from './Main';
import Users from './Users';
import UserEdit from './UserEdit';
import Metadata from './Metadata';
import MetadataEdit from './MetadataEdit';
import Schedule from './Schedule';
/*import Cart from './Cart';*/
import { Container, Row, Col } from 'reactstrap';
import {Route} from "react-router-dom";
import withAuth from './withAuth';
import UserContext from './UserContext';




    /*<Route exact path="/app/metadatedit" render={() => <MetadataEdit onChangeMetadata={this.onChangeMetadata} metadataForm={this.state.metadataForm} submitMetadata={this.submitMetadata} />} />
    <Route exact path="/app/schedule" render={() => <Schedule schedule={this.schedule} handleScheduleEditClick={this.handleScheduleEditClick} handleScheduleDeleteClick={this.handleScheduleDeleteClick} />} />
    <Route path="/app/cart" exact component={Cart}/></div>*/


const App = () => {
  /*const Auth = new AuthHelperMethods();*/
  const [videoIdState, setVideoId] = useState('');
  const [dataState, updateDataState]= useState({});
  const [metadataState, setMetadata]= useState({});
  const [scheduleState, setScheduleState]= useState({});
  const [eventState, setEventState]= useState({});
  const [editingEvent, setEditingEvent] = useState(false);

  /* constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      metadataForm: {
        id: '',
        platform: '',
        title: '',
        description: '',
        tags: ''
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
          end: ''
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Tigers',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '5634373',
          series: 'Odd Squad',
          title: 'Project Orange',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2029-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Paw Patrol',
          title: 'Pups To The Rescue',
          status: 'Active',
          start: '2018-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Wolf Hawks',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2099-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Dumpster Diving',
          status: 'Active',
          start: '2017-05-22 23:30',
          end: '2021-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Search Partly',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '2355722',
          series: 'Wild Kratts',
          title: 'Elephants',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2020-05-22 23:30'
        },
        {
          id: '2345674',
          series: 'Paw Patrol',
          title: 'Pups Take Charge',
          status: 'Active',
          start: '2021-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Compubot',
          status: 'Active',
          start: '2010-05-22 23:30',
          end: '2045-05-22 23:30'
        },
        {
          id: '8765432',
          series: 'Odd Squad',
          title: 'The case of the missing bike',
          status: 'Not Active',
          start: '',
          end: ''
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Tigers',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '5634373',
          series: 'Odd Squad',
          title: 'Project Orange',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2022-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Paw Patrol',
          title: 'Pups To The Rescue',
          status: 'Active',
          start: '2011-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '5678567',
          series: 'Wild Kratts',
          title: 'Wolf Hawks',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2032-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Dumpster Diving',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '1323876',
          series: 'Annedroids',
          title: 'Search Partly',
          status: 'Active',
          start: '2017-05-22 23:30',
          end: '2030-05-22 23:30'
        },
        {
          id: '2355722222',
          series: 'Wild Kratts',
          title: 'Elephants',
          status: 'Active',
          start: '2019-05-22 23:30',
          end: '2030-05-22 23:30'
        }
      ]
    }; //End of state
  } //End of constructor

    const _handleLogout = () => {
    Auth.logout()
      return this.props.history.push("/login");
    }
 

  const gotoSchedule = (value) => {
    console.log('gotoSchedule');
    this.state.data.forEach((data)=>{
      if(data.id === value) {
        this.schedule = data.schedule;
      }
    });
    this.props.history.push("/app/schedule");
  };



  const onChangeMetadata = (event) => {
    console.log(this.state);
    this.setState({
      metadataForm: {...this.state.metadataForm,
      [event.target.name]: event.target.value}
    });
    console.log(this.state);
  }

  const submitMetadata = (metadataForm) => {
    console.log('submitMetadata')
    this.state.data.forEach((data) => {
      if(typeof data.metadata != 'undefined') {
        data.metadata.forEach((metadata) => {
          if(metadata.id === metadataForm.id) {
            this.setState({metadata: metadataForm});
          }
        });
      }
    });
    console.log(this.state)
    this.props.history.push("/app/metadata");
  };

  const handleMetadataFormCancel = (value) => {
    console.log('handleMetadataFormCancel')
    this.props.history.push("/app/metadata");
  };

  const handleScheduleEditClick = (value) => {
    console.log('handleScheduleEditClick')
    console.log('Edit ' + value);
  }

  const handleScheduleDeleteClick = (value) => {
    console.log('handleScheduleDeleteClickk')
    console.log('Delete ' + value);
  }*/

    return (
    <div className="App">
      <Container fluid>
        <Row >
          <Col style={{backgroundColor:"#E7133D"}}>
            <Nav  />
          </Col>
        </Row>
        <Row >
        <UserContext.Provider value={{videoIdState, setVideoId,dataState, updateDataState, metadataState, setMetadata, scheduleState, setScheduleState, eventState, setEventState, editingEvent, setEditingEvent}}>
          <Route exact path="/app/schedule" component={Schedule} />
          <Route exact path="/app/metadata" component={Metadata} />
          <Route exact path="/app/metadataedit" component={MetadataEdit}/>
          <Route exact path="/app/" component={Main}/>
          <Route path="/app/users" exact component={Users} />
          <Route path="/app/useredit" exact component={UserEdit} />
        </UserContext.Provider>
        </Row>
      </Container>
    </div>
  );
}

export default withAuth(App);