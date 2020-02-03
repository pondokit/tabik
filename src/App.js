import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import navigate from './navigations/navigate';
// import SplashScreen from 'react-native-splash-screen';
import { createTableWilayah, dispatchArrayWilayah, showDataWilayah, searchWilayah } from './service/sqliteSchema'

const AppContainer = createAppContainer(navigate);

export default class App extends React.Component {

  componentDidMount() {
    createTableWilayah()
    dispatchArrayWilayah()
    // SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}
