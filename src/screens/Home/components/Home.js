import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import styles from './style';
import Menu from './components/Menu';
import Berita from './components/Berita';
import Header from './components/Header';
import Article from './components/Article';
import Video from './components/Video';

const { width, height } = Dimensions.get('window');

class Home extends Component {

  render() {
    return (

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView scrollEnable paggingEnable>
          <Header />
          <Menu />
          <Berita />
          <Article />
          <Video />

          <View style={{height: 20,}}>
          </View>
        </ScrollView>
      </View>
    );
  }

}
export default Home;
