import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  ImageBackground
} from 'react-native';

// import Footer from "../../component/Footer";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Dewan extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Dewan Syariah </Text>
          </View>
        </View>

        <View style={[styles.container, styles.tengah]}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
            <ImageBackground
              style={[styles.divProfil, styles.tengah]}
              source={ require('../../../assets/background/profil.jpg') }
            >
              <Icon name="user-alt" color={'#fff'} size={50} />
              <Text style={styles.title}>PROFIL SINGKAT</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.divPengurus, styles.tengah]} onPress={() => this.props.navigation.navigate('Pengurus')}>
            <ImageBackground
              style={[styles.divProfil, styles.tengah]}
              source={ require('../../../assets/background/pengurus.jpg') }
            >
              <Icon name="users" color={'#fff'} size={50} />
              <Text style={styles.title}>SUSUNAN PENGURUS</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

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
export default Dewan;

const styles = StyleSheet.create({
  tengah: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  divProfil: {
    width: 320,
    height: 161,
    backgroundColor: 'rgba(70, 192, 185, 0.67)',
    borderRadius: 10,
  },
  divPengurus: {
    width: 320,
    height: 161,
    backgroundColor: 'rgba(70, 192, 185, 0.67)',
    borderRadius: 10,
    marginTop: 30
  },
  title: {
    fontSize: 14,
    marginTop: 17,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  }
});
