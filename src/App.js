import React from 'react';
import './App.css';
import Nav from './Navbar';
import Main from './Main';
import Login from './Login'
import Admin from './Admin';
import Asset from './Asset';
import EditAsset from './EditAsset';
import UpdateUsers from './UpdateUsers';
import { Container, Row, Col } from 'reactstrap';
import {Router, Route} from "react-router-dom";
import AuthHelperMethods from './AuthHelperMethods';
import withAuth from './withAuth';




class App extends React.Component {
  Auth = new AuthHelperMethods();

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  

  _handleLogout = () => {
    this.Auth.logout()
    return this.props.history.push("/login");
    }
  
  render(){
    return (
    <div className="App">
      <Container fluid>
        <Row fluid>
          <Col style={{backgroundColor:"#E7133D"}}>
            <Nav fluid />
          </Col>
        </Row>
        <Row fluid>
            <Route path="/app/" exact component={Main} />
            <Route path="/app/admin" exact component={Admin} />
            <Route path="/app/publishpointasset" exact component={Asset}/>
            <Route path="/app/asset" exact component={EditAsset} />
            <Route path="/app/updateusers" exact component={UpdateUsers}/>
        </Row>
      </Container>
    </div>
  );
}
}
export default withAuth(App);
