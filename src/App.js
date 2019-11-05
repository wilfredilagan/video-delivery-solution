import React from 'react';
import './App.css';
import Nav from './Navbar';
import Main from './Main';
import Login from './Login'
import Admin from './Admin';
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
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
