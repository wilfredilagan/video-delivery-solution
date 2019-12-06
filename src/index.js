import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloClient} from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import history from './history';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://127.0.0.1:4000/gql/graphql'
})

const client = new ApolloClient({
    cache,
    link
  });
  

ReactDOM.render(
<ApolloProvider client={client}>
  <Router>
      <Route exact path="/login" component={Login} />
      <Route exact path="/"><Redirect to="/app"></Redirect></Route>
      <Route path="/app" component={App} history={history}/>
  </Router>
</ApolloProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();