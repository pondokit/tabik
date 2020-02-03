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

class Article extends Component {

  render() {
    return (
      <View style={{marginVertical: 20}}>
        <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Artikel</Text>
          <TouchableOpacity style={{padding: 5}}>
            <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
            <Image source={require('../../../../assets/pohon.jpg')} style={{height: 85, width: 110}}/>
            <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>BEBERAPA TIPS PEKERJAAN SEDERHANA TAMBANG PAHALA</Text>
              <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>November, 19 2019</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
            <Image source={require('../../../../assets/tobat.jpg')} style={{height: 85, width: 110}}/>
            <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>BERTOBAT, MENGUNDANG RAHMAT ALLAH  </Text>
              <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>September, 29 2019</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width, paddingTop: 16, paddingHorizontal: 16, marginTop: 10}}>
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
            <Image source={require('../../../../assets/pasrah.jpg')} style={{height: 85, width: 110}}/>
            <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>MEMASRAHKAN DIRI HANYA PADA ALLAH</Text>
              <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>September, 39 2019</Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
    );
  }

}
export default Article;

const styles = StyleSheet.create({
  header: {
    height: 55,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
