import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {gql} from 'apollo-boost';
import {ApolloClient} from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://127.0.0.1:4000/gql/graphql'
})

const client = new ApolloClient({
    cache,
    link
  });
  

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

client
  .query({
    query: getVideoAssets})
  .then (result => console.log(result))

ReactDOM.render(
<Router>
    <Route exact path="/login" component={Login} />
    <Route exact path="/"><Redirect to="/app"></Redirect></Route>
    <Route path="/app" component={App} />
</Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();