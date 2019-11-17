import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import {
    Input,
    Button,
    Col,
    Row,
  Navbar,
NavbarBrand } from 'reactstrap';
import AuthHelperMethods from './AuthHelperMethods'
import { history } from "./history"
import Logo from './TVO_Bug.png';

export default class Login extends React.Component {

    Auth = new AuthHelperMethods()

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    if (this.Auth.loggedIn()){
      history.push('/app');
    }else{
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { username , password } = this.state;
    const response = await this.Auth.login(username,password)

    if (!response){
      return this.setState({error: true});
    }
    return this.props.history.push("/app");
    /*console.log(username);
    console.log(password);
    this.getAssets(username, password);*/
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  renderError = () => {
    if (this.state.error) {
      return <div><p style={{textAlign: "center"}}>Incorrect user name or password. Try again.</p></div>
    }
  }

  getAssets = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:4000/api/authenticate", {username: username, password: password});
      console.log("response", response.status);
      if(response.status === 200) {
        console.log("Login succeeded, go to assets page");
        this.setState({redirect: true});
      }else {
        console.log("Login failed, display error");
        this.setState({error: true});
      }
    } catch(error) {
      console.log("error", error);
    }
  };

  render(){
    return(
      <>
      <Row>
      <Col style={{backgroundColor:"#E7133D"}}>
        <Navbar expand="md">
            <Col >    
              <Link to="/"><img src={Logo} alt="TVO Logo" className="float-left"/></Link>
            </Col>
            <Col>
            <NavbarBrand href="/" style={{ marginLeft: "20%", color: '#FFFFFF', fontSize: "30px"}}>Online Video Delivery Solution</NavbarBrand>
            </Col>
            <Col>
            </Col>
         </Navbar>
      </Col>   
      </Row>
      <div className="col">
          {this.renderRedirect()}
          <Row>
              <Col>
                  <p style={{textAlign: "left", fontSize: "30px"}}>Login</p>
              </Col>
          </Row>
          <Row>
              <Col sm="12" md={{ size: 2, offset: 5 }} style={{paddingTop: "2%"}}>
                  <p className="text-center">Username</p>
                  <Input name="username" type="text" onChange={this.handleChange} />
                  <p className="text-center">Password</p>
                  <Input name="password" type="password" onChange={this.handleChange} />
                  <div></div>
                  <Button onClick={this.handleSubmit} style={{marginTop: "30px", marginLeft: "35%"}}>Submit</Button>
              </Col>
              
          </Row>
          {this.renderError()}
        </div>
        </>
    )}
  }
