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
        <Row >
          <Col style={{backgroundColor:"#E7133D"}}>
            <Nav  />
          </Col>
        </Row>
        <Row >
            <Route path="/app/" exact component={Main} />
            <Route path="/app/users" exact component={Users} />
            <Route path="/app/useredit" exact component={UserEdit} />
            <Route path="/app/metadata" exact component={Metadata}/>
            <Route path="/app/metadatedit" exact component={MetadataEdit}/>
            <Route path="/app/schedule" exact component={Schedule}/>
            <Route path="/app/cart" exact component={Cart}/>
        </Row>
      </Container>
    </div>
  );
}
}
export default withAuth(App);
