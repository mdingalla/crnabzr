import React from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack ,Lightbox} from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Root, StyleProvider } from 'native-base';


import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './../routes';
import Loading from './../components/screens/Loading';

import MainTabNavigator from './../components/navigation/MainTabNavigator';


// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const App = ({ store, persistor }) => (
  // <Root>
  //   <Provider store={store}>
  //     <PersistGate
  //       loading={<Loading />}
  //       persistor={persistor} >
  //       <StyleProvider style={getTheme(theme)}>
  //           {Routes}
  //       </StyleProvider>
  //     </PersistGate>
  //   </Provider>
  // </Root>

  <MainTabNavigator/>
);


App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
