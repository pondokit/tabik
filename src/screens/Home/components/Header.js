import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

import axios from 'axios';
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get('window');

class Header extends Component {
  state = {
    jadwal: false,
    hari: "",
    tgl: "",
  }

  componentDidMount () {

    var days = [
      "Ahad",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    this.setState({hari: days[new Date().getDay()]});

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
    var t = new Date();
    this.setState({tgl: t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear()});

     let formdata = new FormData();
     formdata.append('act', 'TANGGALM');
     formdata.append('data', '2019-11-06');
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
        console.log(res.response.data.info)
        // const jadwals = res.data;
        // this.setState({ jadwals });
      })
      .catch(e => {
        // console.log(e.response.data.data.jadwal)
        this.setState({jadwal: e.response.data.data.jadwal});
      })

  }

  render() {
    return (
      <View style={{height: 310, width}}>
        <ImageBackground
          style={[styles.bgimg]}
          source={ require('../../../../assets/headback.png') }
        >
          <View style={[styles.header]}>
            <Text style={[styles.name]}>Tabik Ustadz</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
              <Icon name="info-outline" color="#fff" size={25} />
            </TouchableOpacity>
          </View>

          <View style={[styles.justifyc, styles.itemc]}>
            <Text style={[styles.white]}>{this.state.hari}, {this.state.tgl}</Text>
            <Text style={[styles.fokus]}>17:57</Text>
            <View style={[styles.flexrow, {alignItems: 'center'}]}>
              <Text style={[styles.note]}>Saatnya Shalat Maghrib</Text>
              <TouchableOpacity style={[styles.details]}>
                <Text style={[styles.white, {fontSize: 10}]}>Lihat Jadwal</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.justifyc, styles.itemc, styles.flexrow, styles.jam]}>
            <View style={[styles.divjadwal]}>
              <Text style={[styles.jadwal]}>Subuh</Text>
              <Text style={[styles.jadwal]}>{this.state.jadwal.subuh}</Text>
            </View>
            <View style={[styles.divjadwal]}>
              <Text style={[styles.jadwal]}>Dhuhur</Text>
              <Text style={[styles.jadwal]}>{this.state.jadwal.zuhur}</Text>
            </View>
            <View style={[styles.divjadwal]}>
              <Text style={[styles.jadwal]}>Ashar</Text>
              <Text style={[styles.jadwal]}>{this.state.jadwal.asar}</Text>
            </View>
            <View style={[styles.divjadwal]}>
              <Text style={[styles.jadwal]}>Maghrib</Text>
              <Text style={[styles.jadwal]}>{this.state.jadwal.magrib}</Text>
            </View>
            <View style={[styles.divjadwal,{borderRightWidth: 0}]}>
              <Text style={[styles.jadwal]}>Isya</Text>
              <Text style={[styles.jadwal]}>{this.state.jadwal.isya}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

}
export default Header;

const styles = StyleSheet.create({
  justifyc: {
    justifyContent: 'center',
  },
  itemc: {
    alignItems: 'center'
  },
  flexrow: {
    flexDirection: 'row'
  },
  white: {
    color: '#fff'
  },
  divjadwal: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRightWidth: 1,
    alignItems: 'center',
    borderColor: '#3896A3',
    justifyContent: 'space-between',
  },
  jadwal: {
    fontSize: 12,
    color: '#3896A3',
    fontFamily: 'Roboto',
  },
  bgimg: {
    width,
    height: 270,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  header: {
    width,
    height: 60,
    padding: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Pacifico',
  },
  fokus: {
    fontSize: 60,
    color: '#fff',
    fontFamily: 'Montserrat-Regular'
  },
  note: {
    fontSize: 12,
    color: '#fff',
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular'
  },
  details: {
    width: 72,
    height: 23,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(42, 194, 227, 0.7)',
  },
  jam: {
    top: 45,
    width: 297,
    height: 63,
    left: 31,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#fff',
  }
});
