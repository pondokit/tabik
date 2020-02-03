import React, { Component } from 'react';
import {
  Left,
  Body,
  Right,
  Title,
  Footer,
  Header,
  Button,
  Content,
  Container,
  FooterTab,
} from 'native-base';

import {
  Text,
  View,
  Image,
  FlatList,
  Animated,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import HTMLView from 'react-native-htmlview';
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Konsultasi extends Component {

  state = {
    posts: [],
    visible: true,
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  componentDidMount () {
    axios.get('https://wahdah.or.id/wp-json/wp/v2/posts/?categories=491&per_page=15')
      .then( (response) => {
        this.setState({posts: response.data});
      })
      .then( () => {
        this.hideSpinner();
      })
      .catch((error) => {
        console.log(error)
      });
  }

  renderKonsultasis = () => {
      if (this.state.visible) {
        return (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="rgba(40, 201, 192, 0.97)" />
          </View>
        );
      } else {
        return (
            <FlatList
              scrollEnabled
              maxToRenderPerBatch={3}
              showsVerticalScrollIndicator={false}
              style={{ overflow:'visible'}}
              data={this.state.posts}
              keyExtractor={(item, index) => `${item.id}`}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
              renderItem={({ item }) => this.renderKonsultasi(item)}
            />
        );
      }
  }

  renderKonsultasi = item => {;
    return (
      <TouchableOpacity style={{marginBottom: 5}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Konsultasi', { konsultasi: item })}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'rgb(227, 227, 227)'}}>
          <Image source={{uri: item.mobiconnector_feature_image.source_url }} style={{height: 85, width: 110}}/>
          <View style={{paddingTop: 4, paddingLeft: 20,  paddingBottom: 10, width: 200, justifyContent: 'space-between'}}>
            <HTMLView value={item.title.rendered } stylesheet={styles.title}/>
            <Text style={{fontSize: 10, fontFamily: 'sans', color: 'rgb(121, 121, 121)'}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'#fff'}}>
          <StatusBar backgroundColor="'rgba(40, 201, 192, 0.97)'" barStyle="light-content" />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" color={'#3896A3'} size={22} />
            </Button>
          </Left>
          <Body>
            <Title style={{  fontSize: 21, color: '#3896A3', fontWeight: 'bold', fontFamily: 'SourceSansPro',}}>Kumpulan Konsultasi</Title>
          </Body>
        </Header>
        <Content style={{ paddingHorizontal: 10}}>
          {this.renderKonsultasis()}
        </Content>
        <Footer style={{height: 45}}>
          <FooterTab style={{backgroundColor:'#fff', height: 45, borderTopWidth: 2, borderTopColor: 'rgba(212, 212, 212, 0.32)'}}>
            <Button style={[styles.back]} onPress={() => this.props.navigation.navigate('Home')}>
              <Image source={ require('../../../assets/icon/home1.png')} style={{ width: 23, height: 23, }}/>
            </Button>
            <Button style={[styles.back]} onPress={() => this.props.navigation.navigate('WahdahTv')}>
              <Image source={ require('../../../assets/icon/play1.png')} style={{ width: 23, height: 23, }}/>
            </Button>
            <Button style={[styles.back]} onPress={() => this.props.navigation.navigate('Tanya')}>
              <Image source={ require('../../../assets/icon/help1.png')} style={{ width: 23, height: 23, }}/>
            </Button>
            <Button style={[styles.back]} onPress={() => this.props.navigation.navigate('Dewan')}>
              <Image source={ require('../../../assets/icon/dewan1.png')} style={{ width: 23, height: 23, }}/>
            </Button>
            <Button style={[styles.back]} onPress={() => this.props.navigation.navigate('Radio')}>
              <Image source={ require('../../../assets/icon/radio.png')} style={{ width: 24, height: 23, }}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Konsultasi;

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
  title: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  back: {
    width: 30,
    height:'100%',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  indicator: {
    height: (height - (130)),
    alignItems: 'center',
    justifyContent: 'center',
  },

});
