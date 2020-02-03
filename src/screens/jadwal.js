import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import styles from './style';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class Home extends Component {
  state = {
    jadwals: []
  }

  componentDidMount () {
     // axios.get('https://krfdsawi.stiba.ac.id/wss/', {
     //   'act': 'TANGGALM',
     //   'data': '2019-11-02',
     //   'latitude': '-5.147',
     //   'longitude': '119.432',
     //   'timezone': '8',
     //   'wilayah': 'Makassar'
     // }, {
     //   'accept': 'application/json',
     //   'content-type': 'multipart/form-data'
     // })

     let formdata = new FormData();
     formdata.append('act', 'TANGGALM');
     formdata.append('data', '2019-11-02');
     formdata.append('latitude', '-5.147');
     formdata.append('longitude', '119.432');
     formdata.append('timezone', '8');
     formdata.append('wilayah', 'Makassar');

      axios({
        url: 'https://krfdsawi.stiba.ac.id/wss/',
        method: 'post',
        data: formdata,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res.response.data)
        // const jadwals = res.data;
        // this.setState({ jadwals });
      })
      .catch(e => {
        console.log('error')
      })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>
          <Text>
            { this.state.jadwals.map(jadwal => <li>{jadwal.subuh}</li>)}
          </Text>
      </View>
    );
  }
}



export default Home;
