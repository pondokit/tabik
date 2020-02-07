import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import axios from 'axios';
import * as Font from 'expo-font';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-community/async-storage';

const { width, height } = Dimensions.get('window');

class Jadwal extends Component {

  constructor(props) {
    super(props);

    let d = new Date();
    var today = d.getFullYear()+'-'+(d.getMonth() + 1)+'-'+d.getDate();

    this.state = {
      today     : '',
      jadwal    : false,
      latitude  : '-5.147',//Initial Latitude
      longitude : '119.432',//Initial Longitude
      wilayah   : 'Makassar',
      provinsi  : 'Sulawesi Selatan',
      zoneTime  : '8',
      selectDay : today.toString(),
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  async componentDidMount() {
    Font.loadAsync({
      'Roboto': require('../../../assets/fonts/Roboto.ttf'),
      'Pacifico': require('../../../assets/fonts/Pacifico.ttf'),
      'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    });

    const savedWilayah = await AsyncStorage.getItem('@savedWilayah');

    if (savedWilayah) {
      const s = JSON.parse(savedWilayah);
      this.setState({
        wilayah   : s.kota,
        provinsi  : s.prov,
        latitude  : s.lat,
        longitude : s.lng,
        zoneTime  : s.zona
      });
    }

    this.getWaktu();
  };

  onDateChange(date) {
    let d = new Date(date);
    var today = d.getFullYear()+'-'+(d.getMonth() + 1)+'-'+d.getDate();
    this.setState({
      selectDay: today.toString(),
    });
    this.getWaktu();
  }

  getWaktu() {
    let formdata = new FormData();
    formdata.append('timezone', this.state.zoneTime);
    formdata.append('act', 'TANGGALM');
    formdata.append('data', this.state.selectDay);
    formdata.append('wilayah', this.state.wilayah);
    formdata.append('latitude', this.state.latitude);
    formdata.append('longitude', this.state.longitude);

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
  };

  render() {
    const startDate = selectDay;
    const { selectDay } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <View style={[styles.divHeader]}>
            <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" color={'#3896A3'} size={22} />
            </TouchableOpacity>
            <View style={[styles.header]}>
              <Text style={[styles.mainHead]}> Jadwal Sholat </Text>
            </View>
          </View>

          <View style={{width: '100%', padding: 35, paddingVertical: 20}}>
            <Text style={[styles.fokus, {marginBottom: 1}]}>Shalat di</Text>
            <Text style={styles.fokus}>Awal Waktu</Text>
            <Text style={styles.notes}>Sholat terbaik adalah sholat yang dikerjakan diawal waktu.</Text>
          </View>

          <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center'}} onPress={() => this.props.navigation.navigate('SearchLocation')}>
            <View style={{paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#3896A3', borderRadius: 5, elevation: 2}}>
              <Text style={{justifyContent: 'center', color: '#fff', textAlign: 'center'}}>{this.state.wilayah} , {this.state.provinsi}</Text>
            </View>
          </TouchableOpacity>

          <View style={{padding: 20,flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.adzan}>
              <Text style={styles.jam}>{this.state.jadwal.subuh}</Text>
              <Text style={styles.shalat}>Subuh</Text>
            </View>
            <View style={styles.adzan}>
              <Text style={styles.jam}>{this.state.jadwal.zuhur}</Text>
              <Text style={styles.shalat}>Dhuhur</Text>
            </View>
            <View style={styles.adzan}>
              <Text style={styles.jam}>{this.state.jadwal.asar}</Text>
              <Text style={styles.shalat}>Ashar</Text>
            </View>
            <View style={styles.adzan}>
              <Text style={styles.jam}>{this.state.jadwal.magrib}</Text>
              <Text style={styles.shalat}>Magrib</Text>
            </View>
            <View style={styles.adzan}>
              <Text style={styles.jam}>{this.state.jadwal.isya}</Text>
              <Text style={styles.shalat}>Isya</Text>
            </View>
          </View>

          <View style={{width: '100%', height: 280}}>
            <CalendarPicker
              onDateChange={this.onDateChange}
              months={['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']}
              weekdays={['Ahad','Sen','Sel','Rab','Kam','Jum','Sab']}
              height={350}
              nextTitle="Next"
              previousTitle="Previous"
              selectedDayTextColor='#097180'
              todayBackgroundColor="#74ddec"
              selectedDayColor="#ccf7fc"
              textStyle={{
                fontFamily: 'Montserrat-Regular',
                color: '#3896A3',
              }}
              scaleFactor={380}
            />
          </View>
        </ScrollView>

        <View style={{bottom: 0, height: 45, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)'}}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Home')}>
            <Image source={ require('../../../assets/icon/home1.png')} style={{ width: 23, height: 23, }}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('WahdahTv')}>
            <Image source={ require('../../../assets/icon/play1.png')} style={{ width: 23, height: 23, }}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Tanya')}>
            <Image source={ require('../../../assets/icon/help1.png')} style={{ width: 23, height: 23, }}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Dewan')}>
            <Image source={ require('../../../assets/icon/dewan1.png')} style={{ width: 23, height: 23, }}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.navigate('Radio')}>
            <Image source={ require('../../../assets/icon/radio.png')} style={{ width: 24, height: 23, }}/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

}
export default Jadwal;

const styles = StyleSheet.create({
  divHeader: {
    height: 65,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor:'#ffffff',
  },
  header: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHead: {
    fontSize: 21,
    color: '#3896A3',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'SourceSansPro',
  },
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  fokus: {
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },
  notes: {
    fontSize: 14
  },
  adzan: {
    width: 55,
    height: 88,
    padding: 4,
    elevation: 4,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4.65,
    shadowOpacity: 0.29,
    shadowColor: "#000",
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  jam: {
    width: '65%',
    fontSize: 19,
    color: '#3896A3',
    fontFamily: 'Montserrat-Bold',

  },
  shalat: {
    fontSize: 9,
    marginTop: 5,
    paddingLeft: 4,
    color: '#3896A3',
    alignSelf: 'flex-start',
    fontFamily: 'Montserrat-Regular',
  },
});
