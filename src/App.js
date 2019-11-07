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
import { BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
      <Container fluid>
        <Row fluid>
          <Col style={{backgroundColor:"#E7133D"}}>
            <Nav fluid />
          </Col>
        </Row>
        <Row fluid>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/publishpointasset" exact component={Asset}/>
            <Route path="/asset" exact component={EditAsset} />
            <Route path="/updateusers" exact component={UpdateUsers}/>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
