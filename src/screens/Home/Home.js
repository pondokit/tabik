
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Linking,
  Animated,
  FlatList,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  PermissionsAndroid,
} from 'react-native';

import axios from 'axios';
import styles from './style';
import * as Font from 'expo-font';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-community/async-storage';
import GetLocation from 'react-native-get-location';

import {Loading} from './components/Loading';

let d     = new Date();
const today = d.getFullYear()+'-'+(d.getMonth() + 1)+'-'+d.getDate();

const { width, height } = Dimensions.get('window');

class Home extends Component {

  constructor(props) {
    super(props);
    // let date  = new Date();
    // var zone  = date.getTimezoneOffset() / -60;

    this.state = {
      tgl         : '',
      hari        : '',
      today       : '',
      jadwal      : false,
      wilayah     : '',
      provinsi    : '',
      zoneTime    : '',
      latitude    : '',
      longitude   : '',
      selectDay   : today.toString(),
      jamSekarang : '',

      loading     : {
        fatwa       : true,
        konsultasi  : true,
      },
      posts       : {
        fatwa       : [],
        konsultasi  : [],
      },
    };
  }

  componentDidMount () {
    Font.loadAsync({
      'Roboto': require('../../../assets/fonts/Roboto.ttf'),
      'Pacifico': require('../../../assets/fonts/Pacifico.ttf'),
      'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
    });

    setInterval(
      function(){
        var jam = new Date();
        var min = jam.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var hour = jam.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        this.setState({ jamSekarang: hour + ':' + min });
    }.bind(this), 1000);

    // this.getFatwa();
    // this.getKonsultasi();
    this.getWaktu();
    this.getLocation();
    this.getArtikel();
  };

  // Get Another Function
  getJadwal() {
    let formdata = new FormData();
    formdata.append('timezone', this.state.zoneTime);
    formdata.append('act', 'TANGGALM');
    formdata.append('wilayah', this.state.wilayah);
    formdata.append('latitude', this.state.latitude);
    formdata.append('longitude', this.state.longitude);
    formdata.append('data', this.state.selectDay);

    axios({
      url: 'https://krfdsawi.stiba.ac.id/wss/',
      method: 'post',
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      // do nothing
    })
    .catch(e => {
      this.setState({jadwal: e.response.data.data.jadwal});
    })
  }

  async getLocation() {   
    const dataWilayah = await this.props.navigation.getParam('data', null);
    const savedWilayah = await AsyncStorage.getItem('@savedWilayah');

    if(dataWilayah){
      await AsyncStorage.setItem('@savedWilayah', JSON.stringify(dataWilayah));
      await this.setState({ 
        wilayah   : dataWilayah.kota,
        provinsi  : dataWilayah.prov,
        latitude  : dataWilayah.lat,
        longitude : dataWilayah.lng,
        zoneTime  : dataWilayah.zona
      });
      this.props.navigation.getParam('data', null);
    } else if (savedWilayah) {
      const s = JSON.parse(savedWilayah);
      await this.setState({
        wilayah   : s.kota,
        provinsi  : s.prov,
        latitude  : s.lat,
        longitude : s.lng,
        zoneTime  : s.zona
      });
    } else {
      await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
      })
      .then(loc => {
        axios.get(`http://209.97.169.78:98/lokasi/api?lat=${loc.latitude}&lng=${loc.longitude}`)
        .then( async (res) => {
          await this.setState({
            wilayah     : res.data.kota,
            provinsi    : res.data.prov,
            latitude    : res.data.lat,
            longitude   : res.data.lng,
            zoneTime    : res.data.zona,
          });
          AsyncStorage.setItem('@savedWilayah', JSON.stringify(res.data));
          this.getJadwal();
        });
      })
      .catch(error => {
        alert('Lokasi gagal ditemukan, silahkan pilih lokasi secara manual');
        this.setState({
          wilayah     : 'Makassar',
          provinsi    : 'Sulawesi Selatan',
          latitude    : '-5.147',
          longitude   : '119.432',
          zoneTime    : '8',
        });
        this.props.navigation.navigate('SearchLocation');
      });
    }

    this.getJadwal();
  }

  getWaktu() {
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

    var monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    var t = new Date();
    this.setState({tgl: t.getDate() + ' ' + monthNames[t.getMonth()] + ' ' + t.getFullYear()});
    //
  }

  // get artikel
  getArtikel () {
    let fatwa      = () => { return axios.get('https://wahdah.or.id/wp-json/wp/v2/posts/?categories=317&per_page=5')}
    let konsultasi = () => { return axios.get('https://wahdah.or.id/wp-json/wp/v2/posts/?categories=491&per_page=5')}
    
    axios.all([fatwa(), konsultasi()])
    .then(axios.spread( (resfatwa, reskonsultasi) => {
      this.setState({
        posts: {fatwa: resfatwa.data, konsultasi: reskonsultasi.data},
        loading: {fatwa: false, konsultasi: false} 
      });
    }))
    .catch((error) => {
      alert(error.message);
    });
  }

  // Render Article
  renderKonsultasis = () => {
    return this.state.loading.konsultasi ? <Loading /> : (
      <View style={[  styles.column, {paddingTop: 25, height: 530} ]}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          style={{ overflow:'visible'}}
          data={this.state.posts.konsultasi}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderKonsultasi(item)}
        />
      </View>
    );
  };

  renderKonsultasi = item => {
    return (
      <TouchableOpacity style={{marginBottom: 25}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Konsultasi', { konsultasi: item })}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
          <Image source={{uri: item.mobiconnector_feature_image.source_url }} style={{height: 85, width: 110}}/>
          <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
            <HTMLView value={item.title.rendered } stylesheet={styles.title}/>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  renderFatwas = () => {
    return this.state.loading.fatwa ? <Loading /> : (
      <View style={[ styles.column, {paddingTop: 25, height: 530}]}>
        <FlatList
          scrollEnabled
          showsVerticalScrollIndicator={false}
          vertical={true}
          style={{ overflow:'visible'}}
          data={this.state.posts.fatwa}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderFatwa(item)}
        />
      </View>
    );
  };

  renderFatwa = item => {;
    return (
      <TouchableOpacity style={{marginBottom: 25}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Fatwa', { fatwa: item })}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
          <Image source={{uri: item.mobiconnector_feature_image.source_url }} style={{height: 85, width: 110}}/>
          <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
            <HTMLView value={item.title.rendered} stylesheet={styles.title}/>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  render() {

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="rgba(40, 201, 192, 0.97)" barStyle="light-content" />
        <ScrollView scrollEnable showsVerticalScrollIndicator={false} paggingEnable style={{flex: 1, backgroundColor: '#fff'}}>
          {/* Header Focus */}
          <View style={{height: 310, width}}>
            <ImageBackground
              style={[styles.bgimg]}
              source={ require('../../../assets/background/home1.png') }
            >
              <View style={[styles.header]}>
                <Text style={[styles.name]}>Tabik Ustadz</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={{padding: 10}}>
                  <Icon name="info-outline" color="#fff" size={28} />
                </TouchableOpacity>
              </View>
              <View style={[styles.justify2, styles.itemc]}>
                <Text style={[styles.date]}>{this.state.hari}, {this.state.tgl}</Text>
                <Text style={[styles.fokus]}>{this.state.jamSekarang}</Text>
                <View style={[styles.row, styles.justify2, styles.itemc, {width: '80%'}]}>
                  <Text style={[styles.note]}>Shalat Tepat Waktu </Text>
                  <TouchableOpacity style={[styles.details]} onPress={() => this.props.navigation.navigate('Jadwal')}>
                    <Text style={{color: '#fff', fontSize: 10}}>Lihat Jadwal</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.justify2, styles.itemc, {marginTop: 18}]}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchLocation')}>
                  <Text style={{justifyContent: 'center', color: '#fff', textDecorationLine: 'underline'}}>{this.state.wilayah} , {this.state.provinsi}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.justify2, styles.itemc, styles.row, styles.divJam]}>
                <View style={[styles.justify2, styles.itemc, styles.row, styles.jam]}
                >
                <View style={[styles.divjadwal]}>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.subuh ? 'Subuh' : ''}</Text>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.subuh}</Text>
                </View>
                <View style={[styles.divjadwal]}>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.zuhur ? 'Dhuhur' : ''}</Text>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.zuhur}</Text>
                </View>
                <View style={[styles.divjadwal]}>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.asar ? 'Ashar' : ''}</Text>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.asar}</Text>
                </View>
                <View style={[styles.divjadwal]}>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.magrib ? 'Maghrib' : ''}</Text>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.magrib}</Text>
                </View>
                <View style={[styles.divjadwal,{borderRightWidth: 0}]}>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.isya ? 'Isya' : ''}</Text>
                  <Text style={[styles.jadwal]}>{this.state.jadwal.isya}</Text>
                </View>
              </View>
              </View>
            </ImageBackground>
          </View>

          {/* Main Menu */}
          <View style={[styles.row, styles.justify1, styles.divmenu1 ]}>
            <TouchableOpacity style={{width: '45%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('FatwaList')}>
              <ImageBackground
                  style={[styles.divArtik, styles.justify2]}
                  source={ require('../../../assets/background/fatwa.jpeg') }
                >
                  <Text style={styles.fokusTitle}>FATWA</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '45%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('KonsultasiList')}>
              <ImageBackground
                  style={[styles.divArtik, styles.justify2]}
                  source={ require('../../../assets/background/konsul.jpeg') }
                >
                  <Text style={styles.fokusTitle}>KONSULTASI</Text>
                </ImageBackground>
            </TouchableOpacity>
          </View>

          {/* Menu */}
          <View style={{marginBottom: 10, alignItems: 'center', width}}>
              <Text style={{alignSelf: 'flex-start',marginLeft: 15, fontSize: 14, fontWeight: 'bold'}}>Fitur Lainnya</Text>
              <View style={[styles.row, styles.justify1, {width: '90%', marginTop: 18}]}>
                <TouchableOpacity style={{width: '19%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('WahdahTv')}>
                  <View style={[styles.divmenu2, styles.justify2]}>
                    <Image source={ require('../../../assets/icon/play1.png')} style={{ width: 20, height: 20, }}/>
                  </View>
                  <Text style={[styles.listmenu2]}>Wahdah Tv</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '19%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Tanya')}>
                  <View style={[styles.divmenu2, styles.justify2]}>
                    <Image source={ require('../../../assets/icon/help1.png')}  style={{ width: 20, height: 20, }}/>
                  </View>
                  <Text style={[styles.listmenu2]}>Tanya Ustadz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '19%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Dewan')}>
                  <View style={[styles.divmenu2, styles.justify2]}>
                    <Image source={ require('../../../assets/icon/dewan1.png')} style={{ width: 20, height: 20, }}/>
                  </View>
                  <Text style={[styles.listmenu2]}>Dewan Syariah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '19%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Jadwal')}>
                  <View style={[styles.divmenu2, styles.justify2]}>
                    <Image source={ require('../../../assets/icon/mosque1.png')} style={{ width: 20, height: 20, }}/>
                  </View>
                  <Text style={[styles.listmenu2]}>Jadwal Sholat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '19%', alignItems: 'center'}} onPress={() => this.props.navigation.navigate('Radio')}>
                  <View style={[styles.divmenu2, styles.justify2]}>
                    <Image source={ require('../../../assets/icon/radio.png')} style={{ width: 20, height: 20, }}/>
                  </View>
                  <Text style={[styles.listmenu2]}>Radio Wahdah</Text>
                </TouchableOpacity>
              </View>
          </View>

          {/* Some Konsultasi */}
          <View style={{marginVertical: 20}}>
            <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Konsultasi Terbaru</Text>
              <TouchableOpacity style={{padding: 5}} onPress={() => this.props.navigation.navigate('KonsultasiList')}>
                <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{height: 345, paddingHorizontal: 16}}>
              {this.renderKonsultasis()}
            </ScrollView>
          </View>

          {/* Some Fatwa */}
          <View style={{marginVertical: 20}}>
            <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Fatwa Terbaru</Text>
              <TouchableOpacity style={{padding: 5}} onPress={() => this.props.navigation.navigate('FatwaList')}>
                <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{height: 345, paddingHorizontal: 16}}>
              {this.renderFatwas()}
            </ScrollView>
          </View>

        </ScrollView>

        <View style={{bottom: 0, height: 45, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#fff', borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)' }}>
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
export default Home;
