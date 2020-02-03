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
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Menu extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{height: 260}}>
        <View style={[styles.row, styles.justify1, styles.divmenu1 ]}>
          <TouchableOpacity style={{width: '30%', alignItems: 'center'}} >
            <View style={[styles.menu1, styles.justify2,]}>
              <Text style={[styles.listmenu1]}>BERITA</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '30%', alignItems: 'center'}}>
            <View style={[styles.menu1, styles.justify2,]}>
              <Text style={[styles.listmenu1]}>ARTIKEL</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{width: '30%', alignItems: 'center'}}>
            <View style={[styles.menu1, styles.justify2,]}>
              <Text style={[styles.listmenu1]}>FATWA</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{alignSelf: 'flex-start',marginLeft: 15, fontSize: 14, fontWeight: 'bold'}}>Fitur Lainnya</Text>
          <View style={[styles.row, styles.justify1, {width: '90%', marginTop: 18}]}>
            <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
              <View style={[styles.divmenu2, styles.justify2]}>
                <Image source={ require('../../../../assets/icon/play.png')} />
              </View>
              <Text style={[styles.listmenu2]}>Wahdah Tv</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
              <View style={[styles.divmenu2, styles.justify2]}>
                <Image source={ require('../../../../assets/icon/help.png')} />
              </View>
              <Text style={[styles.listmenu2]}>Tanya Ustadz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
              <View style={[styles.divmenu2, styles.justify2]}>
                <Image source={ require('../../../../assets/icon/mosque.png')} />
              </View>
              <Text style={[styles.listmenu2]}>Jadwal Sholat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
              <View style={[styles.divmenu2, styles.justify2]}>
                <Image source={ require('../../../../assets/icon/dewan.png')} />
              </View>
              <Text style={[styles.listmenu2]}>Dewan Syariah</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }

}
export default Menu;

const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  justify1: {
    justifyContent: 'space-between'
  },
  justify2: {
    justifyContent: 'center'
  },
  divmenu1: {
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  menu1: {
    height: 51  ,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#3a969e',
    borderRadius: 8,
  },
  listmenu1: {
    fontSize: 13,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  divmenu2: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 100,
    alignItems: 'center'
  },
  listmenu2: {
    fontSize: 13,
    width: 50,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 6
  }
});
