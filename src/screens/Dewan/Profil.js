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

import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Profil extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Profil Singkat</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container]}>
            <ImageBackground
                  style={[styles.divProfil]}
                  source={ require('../../../assets/background/profil.jpg') }
                >
                <Icon name="user-alt" color={'#fff'} size={40} />
                <Text style={styles.title}>PROFIL SINGKAT</Text>
              </ImageBackground>

            <View style={{padding: 25}}>
                <Text style={styles.titleText}>Sejarah Singkat Berdirinya Wahdah Islamiyah</Text>
                <Text style={styles.mainText}>Organisasi ini pertama kali didirikan pada tanggal 18 juni 1988 M dengan nama Yayasan Fathul Muin (YFM), berdasarkan akta notaris Abdullah Ashal, SH No.20. Untuk menghindari kesan kultus individu terhadap KH.Fathul Muin Dg.Mangading (Seorang ulama kharismatik Sulsel yang di masa hidupnya menjadi Pembina para pendiri YFM) dan agar dapat menjadi Lembaga Persatuan Ummat, pada tanggal 19 Februari 1998 M nama YFM berubah menjadi Yayasan Wahdah Islamiyah (YWI) yang berarti “Persatuan Islam” perubahan nama tersebut diresmikan berdasarkan akta notaris Sulprian, SH No.059.</Text>
                <Text style={styles.mainText}>Sehubungan dengan adanya rencana untuk mendirikan sebuah perguruan tinggi islam, YWI menambah sebuah kata dalam identitasnya menjadi Yayasan Pesantren Wahdah Islamiyah (YPWI) yang dimaksudkan agar dapat juga menaungi lembaga-lembaga pendidikan tingginya, berdasarkan Akta Notaris  Sulprian, SH No.055 tanggal 25 Mei 2000.</Text>
                <Text style={styles.mainText}>Perkembangan Dakwah Wahdah Islamiyah yang sangat pesat dirasa tidak memungkinkan lagi lembaga Islam ini bergerak dalam bentuk Yayasan, maka dalam Musyawarah YPWI ke-2, tanggal 1 Shafar 1422 H (bertepatan dengan 14 April 2002 M) disepakati mendirikan organisasi massa (ormas) dengan nama yang sama, yaitu Wahdah Islamiyah (WI). Sejak saat itulah, YPWI yang merupakan cikal bakal berdirinya ormas WI disederhanakan fungsinya sebagai lembaga yang mengelola pendidikan formal milik Wahdah Islamiyah.(untuk selengkapnya baca buku :Sejarah Wahdah Islamiyah)</Text>
                <Text style={styles.titleText}>Manhaj Wahdah Islamiyah</Text>
                <Text style={styles.mainText}>Wahdah Islamiyah adalah sebuah Organisasi Massa (Ormas) Islam yang mendasarkan pemahaman dan amaliyahnya pada Al Qur’an dan As Sunnah sesuai pemahaman As Salaf Ash-Shalih (Manhaj Ahlussunnah Wal Jamaah). Organisasi ini bergerak di bidang da’wah, pendidikan, sosial, kewanitaan, informasi, kesehatan dan lingkungan hidup.</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }

}
export default Profil;

const styles = StyleSheet.create({
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
    alignItems: 'center',
    paddingTop: 20
  },
  divProfil: {
    width: 320,
    height: 161,
    paddingHorizontal: 40,
    backgroundColor: 'rgba(70, 192, 185, 0.67)',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    width: '90%',
    fontSize: 14,
    marginTop: 17,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 14,
    textAlign: 'justify',
    marginTop: 20,
    lineHeight: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginTop: 20,
  },
});
