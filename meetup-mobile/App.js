import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import Colors from './constants/Colors';
import store from './src/redux/store';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false,
    };
  }

  componentWillMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        fonts: [
          { 'monserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf') },
          { 'monserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf') },
          { 'monserrat-light': require('./assets/fonts/Montserrat-Light.ttf') },
        ],
      });
    } catch (e) {
      console.warn('Error loading assets.');
      console.error(e.message);
    } finally {
      this.setState({ fontLoaded: true });
    }
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
