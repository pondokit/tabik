import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Video extends Component {

  render() {
    return (
      <View style={{marginBottom: 30}}>
        <View style={{width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Wahdah TV</Text>
          <TouchableOpacity style={{padding: 5}}>
            <Text style={{fontSize: 12, fontWeight: '900', color: 'rgb(70, 165, 201)'}}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal scrollEnable paggingEnable showsHorizontalScrollIndicator={false}>
          <View style={{width: 225, paddingTop: 16, paddingLeft: 15, backgroundColor: ' green'}}>
            <TouchableOpacity>
              <Image source={require('../../../../assets/santri.jpg')} style={{height: 112, width: 225}}/>
              <View style={{padding: 13, borderWidth: 1, borderTopWidth: 0, borderColor: 'rgb(227, 226, 226)'}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 10}}>DEVINISI DAKWAH ISLAM | USTADZ DR. RAHMAT ABDUL RAHMAN, LC, M.A</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: 225, paddingTop: 16, paddingLeft: 15, backgroundColor: ' green'}}>
            <TouchableOpacity>
              <Image source={require('../../../../assets/santri.jpg')} style={{height: 112, width: 225}}/>
              <View style={{padding: 13, borderWidth: 1, borderTopWidth: 0, borderColor: 'rgb(227, 226, 226)'}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', marginBottom: 10}}>DEVINISI DAKWAH ISLAM | USTADZ DR. RAHMAT ABDUL RAHMAN, LC, M.A</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }

}
export default Video;

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
