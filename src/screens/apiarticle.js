import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import styles from './style';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class Home extends Component {

  state = {
    posts: [],
  }

  componentDidMount () {
    axios.get('https://wahdah.or.id/api/get_recent_posts/')
      .then( (response) => {
        this.setState({posts: response.data.posts});
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>
        {this.state.posts.map((post) => (
          <View>
            <Text>{post.title}</Text>
            <Text>{post.author.first_name}</Text>
          </View>
        ))}
      </View>
    );
  }
}


export default Home;
