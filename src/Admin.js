import React from 'react';
import {Row} from 'reactstrap'; 
import UpdateUsers from './UpdateUsers';
import withAuth from './withAuth';

class Admin extends React.Component {
    render(){
        return(   
            <div className="col">
                <p style={{textAlign: "left", fontSize: "30px"}}>Update Users</p>
                <Row>
                    <UpdateUsers></UpdateUsers>
                </Row>
            </div>
        )}


}
export default withAuth(Admin);