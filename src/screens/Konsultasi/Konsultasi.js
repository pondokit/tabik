import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Button,
  Linking,
  Platform,
  Animated,
  StatusBar,
  Clipboard,
  Dimensions,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Share from 'react-native-share';
import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";


const { width, height } = Dimensions.get('window');


class Konsultasi extends Component {

  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  hideMenu = () => {
    this._menu.hide();
  };
  showMenu = () => {
    this._menu.show();
  };

  getMessage = async () => {
    this.hideMenu();

    const article = await this.props.navigation.getParam('konsultasi');

    const text = article.content.rendered
            .replace(/<(div|br|p)[^>]{0,}>/ig, '\n')
            .replace(/<(\/div|\/p|u|\/u|ol|\/ol|ul|\/ul|\/li|a|\/a|img|iframe|\/iframe)[^>]{0,}>/ig, '')
            .replace(/<(li)[^>]{0,}>/ig, '- ')
            .replace(/<(strong)[^>]{0,}>/ig, ' *')
            .replace(/<(\/strong)[^>]{0,}>/ig, '* ')
            .replace(/<(em)[^>]{0,}>/ig, ' _')
            .replace(/<(\/em)[^>]{0,}>/ig, '_ ')
            .replace(/&nbsp;/ig, '~')
            .replace(/&(#8220|#8221);/ig, '"')
            .replace(/&#8217;/ig, `'`)
            .replace(/&#8211;/ig, `-`)
            .substr(0, 3800)
            + '.... \n\n';

    const message = `*${article.title.rendered}* \n\n`
                    + text
                    + `baca selengkapnya di, \n ${article.link} \n\n`
                    + `Download aplikasi Tabik Ustadz di playstore, \n https://play.google.com/store/apps/details?id=com.tabik`
    return {
      title: article.title.rendered,
      body: message
    };
  };

  shareSocial = async () => {
    const message = await this.getMessage();

    Share.open({
      title: message.title, 
      message: message.body,
    })
    .then(result => console.log(result))
    .catch(e => alert(e));
  };

  shareWhatsapp = async () => {
    const message = await this.getMessage();

    Linking.openURL(`whatsapp://send?text=${message.body}`);
  };

  copyArticle = async () => {
    const message = await this.getMessage();

    await Clipboard.setString(message.body);
    alert('Artikel berhasil disalin');
  };

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam('konsultasi');

    {article.title}
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor="'rgba(40, 201, 192, 0.97)'" barStyle="light-content" />
        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> article Islam </Text>
          </View>

          <Menu
            ref={this.setMenuRef}
            button={
              <TouchableOpacity style={[styles.back]} onPress={() => this.showMenu()}>
                <Icon name="share-alt" color={'#3896A3'} size={22} />
              </TouchableOpacity>
            }
          >
            <MenuItem onPress={this.shareWhatsapp}>Share ke Whatsapp</MenuItem>
            <MenuItem onPress={this.shareSocial}>Share ke app lain</MenuItem>
            <MenuItem onPress={this.copyArticle}>Salin artikel</MenuItem>
          </Menu>
        </View>


        <ScrollView style={styles.flex}>
          <View style={[styles.flex, styles.content]}>
            <View style={{width, height: 300}}>
              <ImageBackground
                style={{width, height: '100%', paddingTop: 10, paddingLeft: 15}}
                source={{uri: article.mobiconnector_feature_image.source_url }}
              >
              </ImageBackground>
            </View>

            <View style={[styles.flex, styles.contentHeader]}>
              <Text style={styles.title}>{article.title.rendered}</Text>
              <View style={[styles.row,{ marginVertical: 36 / 2 }]}>
                <Text style={{ marginLeft: 8, color: '#BCCCD4', marginTop: -10}}>
                   {article.date}
                </Text>
              </View>
              <View>
                <HTMLView
                  value={article.content.rendered.replace(/(?:\r\n|\r|\n)/g, '')}
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

export default Konsultasi;


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
