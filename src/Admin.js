import React from 'react';
import {Row} from 'reactstrap'; 
import Users from './Users';

export default class Admin extends React.Component {
    render(){
        return(   
            <div className="col">
                <p style={{textAlign: "left", fontSize: "30px"}}>Update Users</p>
                <Row>
                    <Users></Users>
                </Row>
            </div>
        )}


}