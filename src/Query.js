import React, { useState, Fragment } from "react";
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks'

const getVideoAssets = gql`
    query MyQuery {
        videoAssets {
        videoId
        mainTitle
        mainDescription
        lastKillDate
        earlyPubDate
        seriesId
        status
        pubPointAssetsByVideoId {
            publishPoint
            pubPointMetadata {
            pubPointMetadataDesc
            pubPointMetadataTitle
            }
            pubPointSchedule {
            pubPointSchedulePubDate
            pubPointScheduleKillDate
            }
        }
        }
    }`

class Query extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
        };
        this.getVideoAssetsQuery = this.getVideoAssetsQuery.bind(this);
    }

    getVideoAssetsQuery = () =>{
        const { loading, error, data } = useQuery(getVideoAssets);
    
        if (loading) {
            return <div>Loading...</div>;
        }
        if (error) {
            console.error(error);
            return <div>Error!</div>;
        }
        return data;
    };

    componentDidMount(){
        const data = this.getVideoAssetsQuery();
        console.log(data);
    }

    render(){
        return(
            <div></div>
        )
    }

}
export default Query;