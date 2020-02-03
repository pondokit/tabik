import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";
import { WebView } from 'react-native-webview';
// import Footer from "../../component/Footer";

const { width, height } = Dimensions.get('window');

class Tanya extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Tanya Ustadz </Text>
          </View>
        </View>

        <WebView
          onLoad={() => this.hideSpinner()}
          source={{ uri: 'https://wahdah.or.id/form-konsultasi/' }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{ color: '#3896A3', position: "absolute", top: height / 2, left: width / 2 }}
            size="large"
          />
        )}

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
export default Tanya;

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
});
