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

const { width, height } = Dimensions.get('window');

class Berita extends Component {

  render() {
    return (
      <View style={{marginVertical: 20}}>
        <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Berita Terbaru</Text>
          <TouchableOpacity style={{padding: 5}}>
            <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal scrollEnable paggingEnable showsHorizontalScrollIndicator={false}>
          <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
            <Image source={require('../../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
          </View>
          <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
            <Image source={require('../../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
          </View>
          <View style={{width, paddingTop: 16, paddingHorizontal: 16, backgroundColor: ' green'}}>
            <Image source={require('../../../../assets/santri.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
          </View>
        </ScrollView>
      </View>
    );
  }

}
export default Berita;

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
});
