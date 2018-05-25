import React from 'react';
import NativeRoot from './src/native/index';
import configureStore from './src/store';
import Expo from 'expo';
import Setup from './src/boot/setup';

const { persistor, store } = configureStore();


export default function App() {
  //  return <NativeRoot store={store} persistor={persistor} />;
  return <Setup/>;
}
