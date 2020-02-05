import React, { Component } from 'react';
import {
  Text,
  View,
  Share,
  Animated,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";


const { width, height } = Dimensions.get('window');

class Fatwa extends Component {

  ShareMessage = () => {
    const konsultasi = this.props.navigation.getParam('konsultasi');

    const text = konsultasi.content.rendered
                  .replace(/<(div|br|p)[^>]{0,}>/ig, '\n')
                  .replace(/<(\/div|\/p|u|\/u|ol|\/ol|ul|\/ul|\/li|a|\/a|img|iframe|\/iframe)[^>]{0,}>/ig, '')
                  .replace(/<(strong)[^>]{0,}>/ig, ' *')
                  .replace(/<(\/strong)[^>]{0,}>/ig, '* ')
                  .replace(/<(em)[^>]{0,}>/ig, ' _')
                  .replace(/<(\/em)[^>]{0,}>/ig, '_ ')
                  .replace(/<(li)[^>]{0,}>/ig, '- ')
                  .replace(/&nbsp;/ig, '~')
                  .replace(/&(#8220|#8221);/ig, '"')
                  .replace(/&#8217;/ig, `'`)
                  .replace(/&#8211;/ig, `-`);

    const message = `Artikel Dari ${konsultasi.link} \n\n`
                    + "Download aplikasi Tabik Ustadz di playstore, \n https://play.google.com/store/apps/details?id=com.tabik&hl=in \n"
                    + text

    Share.share({
      title: konsultasi.title.rendered, 
      message: message,
      url: "https://play.google.com/store/apps/details?id=com.tabik&hl=in"
    })
    .then(result => console.log(result))
    .catch(errorMsg => console.log(errorMsg));
  }

  render() {
    const { navigation } = this.props;
    const konsultasi = navigation.getParam('konsultasi');

    {konsultasi.title}
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="'rgba(40, 201, 192, 0.97)'" barStyle="light-content" />
        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Konsultasi Syariah  </Text>
          </View>
          <TouchableOpacity style={[styles.back]} onPress={() => this.ShareMessage()}>
            <Icon name="share-alt" color={'#3896A3'} size={22} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.flex}>
          <View style={[styles.flex, styles.content]}>
            <View style={{backgroundColor: 'red', width, height: 300}}>
              <ImageBackground
                style={{width, height: '100%', paddingTop: 10, paddingLeft: 15}}
                source={{uri: konsultasi.mobiconnector_feature_image.source_url }}
              >
              </ImageBackground>
            </View>
            <View style={[styles.flex, styles.contentHeader]}>
              <Text style={styles.title}>{konsultasi.title.rendered}</Text>
              <View style={[styles.row,{ marginVertical: 36 / 2 }]}>
                <Text style={{ marginLeft: 8, color: '#BCCCD4', marginTop: -10}}>
                   {konsultasi.date}
                </Text>
              </View>
              <View>
                  <HTMLView
                    value={konsultasi.content.rendered.replace(/(?:\r\n|\r|\n)/g, '')}
                  />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Fatwa;


const styles = StyleSheet.create({

  divHeader: {
    height: 60,
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
    fontSize: 23,
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

  contentHeader: {
    backgroundColor: 'transparent',
    padding: 25,
    backgroundColor: '#fff',
    marginTop: -13,
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    lineHeight: 30,
    color: 'rgb(116, 117, 116)',
    textAlign: 'justify',
  }


});
