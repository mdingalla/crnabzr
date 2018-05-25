import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";

import NativeRoot from '../native/index';
import getTheme from "../../native-base-theme/components";
import variables from "../../native-base-theme/variables/commonColor";

import configureStore from '../store'

const { persistor, store } = configureStore();

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return <NativeRoot store={store} persistor={persistor} />;
    // return (
    //   <StyleProvider style={getTheme(variables)}>
    //     <NativeRoot store={store} persistor={persistor} />;
    //   </StyleProvider>
    // );
  }
}
