import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Input,
    Button,
    Col } from 'reactstrap';
import Logo from './TVO_Bug.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link} from "react-router-dom";
import AuthHelperMethods from "./AuthHelperMethods";
import { history } from './history';
  
  export default class Navigation extends React.Component {
    Auth = new AuthHelperMethods();
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
       this.logoutClick = this.logoutClick.bind(this);
    }
   

    logoutClick(){
      this.Auth.logout()
      return history.push('/login');
    }

    render() {
      return (
        <div>
            <Navbar expand="md">
            <Col >    
              <Link to="/app"><img src={Logo} alt="TVO Logo" className="float-left"/></Link>
            </Col>
            <Col>
            <NavbarBrand style={{ marginLeft: '9%', color: '#FFFFFF', fontSize: "30px"}}>Online Video Delivery Solution</NavbarBrand>
            </Col>
            <Col>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavLink to="/app/users" style={{justifyContent: 'center', color: '#FFFFFF', fontSize: "20px", marginTop: "4px"}}>Admin</NavLink>
                  <NavLink to="/login" onClick= {this.logoutClick} style={{justifyContent: 'center', color: '#FFFFFF', fontSize: "20px", marginTop: "4px", marginLeft: "15px"}}>Logout</NavLink>
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{color: '#FFFFFF', fontSize: "16px"}}>
                  <FontAwesomeIcon icon={faSearch} size="lg" style={{color:'white', justifyContent: 'right', marginTop: '0px', marginLeft:'8px'}} /> 
                  </DropdownToggle>
                  <DropdownMenu right>
                      <div><Input></Input></div>
                      <div>
                      <Link to="/app/searchResults"><Button>Search</Button></Link>
                      </div>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Col>
          </Navbar>
        </div>
      );
    }
  }
