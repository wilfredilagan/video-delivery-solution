import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Input,
    Button,
    Col } from 'reactstrap';
import Logo from './TVO_Bug.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link} from "react-router-dom";
  
  export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
    }
    render() {
      return (
        <div>
            <Navbar expand="md">
            <Col >    
              <Link to="/"><img src={Logo} alt="TVO Logo" className="float-left"/></Link>
            </Col>
            <Col>
            <NavbarBrand href="/" style={{justifyContent: 'center', color: '#FFFFFF', fontSize: "30px"}}>Online Video Delivery Solution</NavbarBrand>
            </Col>
            <Col>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <Link to="/admin"><Button>Admin</Button></Link>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{color: '#FFFFFF', fontSize: "18px"}}>
                      Login Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink to="/login">
                          Login
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color: '#FFFFFF', fontSize: "16px"}}>
                <FontAwesomeIcon icon={faSearch} size="lg" style={{color:'white', justifyContent: 'right', marginTop: '0px', marginLeft:'8px'}} /> 
                </DropdownToggle>
                <DropdownMenu right>
                    <div><Input></Input></div>
                    <div>
                    <Link to="/searchResults"><Button>Search</Button></Link>
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
