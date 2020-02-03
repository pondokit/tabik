import React, { Component } from 'react';
import {
  Text,
  View,
  Share,
  Image,
  Button,
  Platform,
  Animated,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";


const { width, height } = Dimensions.get('window');


class Fatwa extends Component {

  ShareMessage = () => {
    Share.share({title: "Fatwa Islam", message: "Pesan Disini" })
    .then(result => console.log(result))
    .catch(errorMsg => console.log(errorMsg));
  }

  render() {
    const { navigation } = this.props;
    const fatwa = navigation.getParam('fatwa');

    {fatwa.title}
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="'rgba(40, 201, 192, 0.97)'" barStyle="light-content" />
        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Fatwa Islam </Text>
          </View>
          <TouchableOpacity style={[styles.back]} onPress={() => this.ShareMessage()}>
            <Icon name="share-alt" color={'#3896A3'} size={22} />
          </TouchableOpacity>
        </View>
      <ScrollView style={styles.flex}>
          <View style={[styles.flex, styles.content]}>
            <View style={{width, height: 300}}>
              <ImageBackground
                style={{width, height: '100%', paddingTop: 10, paddingLeft: 15}}
                source={{uri: fatwa.mobiconnector_feature_image.source_url }}
              >
              </ImageBackground>
            </View>
            <View style={[styles.flex, styles.contentHeader]}>
              <Text style={styles.title}>{fatwa.title.rendered}</Text>
              <View style={[styles.row,{ marginVertical: 36 / 2 }]}>
                <Text style={{ marginLeft: 8, color: '#BCCCD4', marginTop: -10}}>
                   {fatwa.date}
                </Text>
              </View>
              <View>
                <HTMLView
                  value={fatwa.content.rendered.replace(/(?:\r\n|\r|\n)/g, '')}
                  stylesheet={styles}
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
  },
  br: {
    marginBottom: 10
  },

});
