import React from 'react';
import {Row} from 'reactstrap'; 
import Assets from './Assets';

export default class Main extends React.Component {
    render(){
        return(   
            <div className="col">
                <p style={{textAlign: "left", fontSize: "30px"}}>Recent Items</p>
                <Row>
                    <Assets></Assets>
                </Row>
            </div>
        )}


}
