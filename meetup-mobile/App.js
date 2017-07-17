import React from 'react';
import { AppLoading } from 'expo';

import { AsyncStorage, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import cacheAssetsAsync, { fontAssets } from './utilities/cacheAssetsAsync';
import Colors from './constants/Colors';
import store from './src/redux/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

EStyleSheet.build(Colors);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false,
      ready: false,
    };
  }

  componentDidMount() {
    this.loadAssetsAsync();
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true }),
    );
  }

  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync(fontAssets);
    } catch (e) {
      console.error(e.message);
    } finally {
      this.setState({ fontLoaded: true });
    }
  }

  render() {
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
