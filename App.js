import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {configureStore}  from './src/store';
// import allReducers from './src/reducers/';
import CreateReactNativeApp from './src/native';

const store = configureStore();

// const store = createStore(allReducers);


export default class App extends React.Component {
  render() {
    return(
      <Provider store= {store}>
        <CreateReactNativeApp />
     </Provider>
    );
  }
}


