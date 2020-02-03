import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SectionList,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get('window');

class Pengurus extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#ecf2f5'}}>

        <View style={[styles.divHeader]}>
          <TouchableOpacity style={[styles.back]} onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" color={'#3896A3'} size={22} />
          </TouchableOpacity>
          <View style={[styles.header]}>
            <Text style={[styles.mainHead]}> Susunan Pengurus</Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container]}>
          <ImageBackground
              style={[styles.divPengurus]}
              source={ require('../../../assets/background/pengurus.jpg') }
            >
              <Icon name="users" color={'#fff'} size={40} />
              <Text style={styles.title}>SUSUNAN PENGURUS</Text>
            </ImageBackground>

            <View style={{padding: 25}}>
                <Text style={styles.titleFocus}>SUSUNAN PENGURUS DEWAN SYARIAH WAHDAH ISLAMIYAH</Text>
                <Text style={styles.titleFocus}>1437-1442 H/ 2016-2021 M</Text>
                <View>
                  <Text style={styles.titleText}>Komisi Tetap (PengurusHarian) :</Text>
                  <Text style={styles.mainText}>Ketua : Dr. H. Muhammad Yusran Anshar, Lc., M.A.</Text>
                  <Text style={styles.mainText}>Wakil Ketua : Dr. H. Ahmad Hanafi, Lc., M.A.</Text>
                  <Text style={styles.mainText}>Sekertaris : H. Harman Tajang, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>Wakil Sekertaris : Musdirfan Muslimin, S.H.</Text>
                  <Text style={styles.mainText}>Bendahara : H. Ayyub Subandi, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Anggota Komisi Tetap :</Text>
                  <Text style={styles.mainText}>1. H. Ahmad Amunir, Lc.</Text>
                  <Text style={styles.mainText}>2. Syandri Sya’ban, Lc., M.Ag.</Text>
                  <Text style={styles.mainText}>3. Ronny Mahmuddin, Lc., M.A., M.Pd.I.</Text>
                  <Text style={styles.mainText}>4. Muhammad Nirwan Idris, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>5. Asri Muhammad Saleh, Lc., M.A.</Text>
                  <Text style={styles.mainText}>6. H. Islahuddin Ramadhan, Lc., M.H.</Text>
                  <Text style={styles.mainText}>7. H. Fadhlan Akbar, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>8. H. Saifullah Ansar, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>9. H. Sirajuddin Qasim, Lc.</Text>
                  <Text style={styles.mainText}>10. H. Imran Yunus, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Komisi A : Bidang Aqidah dan Pemikiran</Text>
                  <Text style={styles.mainText}>1. H. Ahmad Amunir, Lc. (Ketua)</Text>
                  <Text style={styles.mainText}>2. Syandri Sya’ban, Lc., M.Ag. (Sekretaris)</Text>
                  <Text style={styles.mainText}>3. H. Muhammad Istiqamah, Lc.</Text>
                  <Text style={styles.mainText}>4. H. Sayyid Tasdiq, Lc., M.A.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Komisi B : Bidang Ibadah</Text>
                  <Text style={styles.mainText}>1. Ronny Mahmuddin, Lc., M.A., M.Pd.I. (Ketua)</Text>
                  <Text style={styles.mainText}>2. Muhammad Nirwan Idris, Lc., M.H.I. (Sekretaris)</Text>
                  <Text style={styles.mainText}>3. H. Irsyad Rafi, Lc.</Text>
                  <Text style={styles.mainText}>4. Gampang Dadiyono, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Komisi C : Bidang Muamalat & Ahwal Syakhshiyah</Text>
                  <Text style={styles.mainText}>1. Asri Muhammad Shaleh, Lc., M.A. (Ketua)</Text>
                  <Text style={styles.mainText}>2. H. Islahuddin Ramadhan, Lc., M.H. (Sekretaris)</Text>
                  <Text style={styles.mainText}>3. H. Muhammad Syahrir, Lc.</Text>
                  <Text style={styles.mainText}>4. H. Hendra Wijaya, Lc., M.H.</Text>
                  <Text style={styles.mainText}>5. H. Hendri Abdullah, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Komisi D : Bidang Ru’yah & Falakiyah</Text>
                  <Text style={styles.mainText}>1. H. Sirajuddin Qasim, Lc. (Ketua)</Text>
                  <Text style={styles.mainText}>2. H. Imran Yunus, Lc. (Sekretaris)</Text>
                  <Text style={styles.mainText}>3. H. Surahman Yatie, Lc.</Text>
                  <Text style={styles.mainText}>4. Syahrul Qur’ani, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Komisi E : Bidang Usrah dan Ukhuwah</Text>
                  <Text style={styles.mainText}>1. H. Fadhlan Akbar, Lc., M.H.I. (Ketua)</Text>
                  <Text style={styles.mainText}>2. H. Saifullah Ansar, Lc., M.H.I. (Sekretaris)</Text>
                  <Text style={styles.mainText}>3. H. Rahmat Badani, Lc., M.A</Text>
                  <Text style={styles.mainText}>4. Mursyidul Haq, Lc.</Text>
                </View>
                <View>
                  <Text style={styles.titleText}>Anggota Pleno Dewan Syariah:</Text>
                  <Text style={styles.mainText}>1. Seluruh Pengurus Harian dan Komisi</Text>
                  <Text style={styles.mainText}>2. Dr. H. Rahmat Abd. Rahman, Lc., M.A.</Text>
                  <Text style={styles.mainText}>3. H. Muhammad Ikhwan Jalil, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>4. H. Jahada Mangka, Lc., M.A.</Text>
                  <Text style={styles.mainText}>5. H. Syaiful Yusuf, Lc., M.A.</Text>
                  <Text style={styles.mainText}>6. H. Ridwan Hamidi, Lc., M.P.I., M.A.</Text>
                  <Text style={styles.mainText}>7. H. Salahuddin Guntung, Lc., M.A.</Text>
                  <Text style={styles.mainText}>8. H. Ilham Jaya, Lc., M.A.</Text>
                  <Text style={styles.mainText}>9. H. Aswanto M. Takwi, Lc., M.A.</Text>
                  <Text style={styles.mainText}>10. H. Eko Misbahuddin, Lc., M.A.</Text>
                  <Text style={styles.mainText}>11. H. Kasman Bakry, S.H.I, M.H.I.</Text>
                  <Text style={styles.mainText}>12. Dr. H. Muh. Ihsan Zainuddin, Lc., M.Si.</Text>
                  <Text style={styles.mainText}>13. Abdul Munawwir, Lc.</Text>
                  <Text style={styles.mainText}>14. H. Bahtiar Bahri, Lc.</Text>
                  <Text style={styles.mainText}>15. H. Hirwan Laba, Lc.</Text>
                  <Text style={styles.mainText}>16. Ir. H. Muh. Taufan Djafri, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>17. H. Bahrunnida, Lc.</Text>
                  <Text style={styles.mainText}>18. H. Muhammad Said Saad, Lc.</Text>
                  <Text style={styles.mainText}>19. H. Nurihsan Muh. Idris, Lc.</Text>
                  <Text style={styles.mainText}>20. H. Ishak Bakari, Lc., M.Fil.I.</Text>
                  <Text style={styles.mainText}>21. H. Akrama Hatta, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>22. H. Lukmanul Hakim, Lc., M.A.</Text>
                  <Text style={styles.mainText}>23. H. Zamakhsyari Dhofir, Lc.</Text>
                  <Text style={styles.mainText}>24. H. Muhammad Hatta Rajawah, Lc., M.H.</Text>
                  <Text style={styles.mainText}>25. Rustang Arizal, Lc., M.A.</Text>
                  <Text style={styles.mainText}>26. H. Maulana La Eda, Lc., M.A.</Text>
                  <Text style={styles.mainText}>27. H. Khalid Walid, Lc.</Text>
                  <Text style={styles.mainText}>28. H. Tyas Riskiadi, Lc.</Text>
                  <Text style={styles.mainText}>29. H. Muhammad Yusuf Mantasya, Lc.</Text>
                  <Text style={styles.mainText}>30. H. Mukran Usman, Lc., M.H.I.</Text>
                  <Text style={styles.mainText}>31. H. Sofyan Nur, Lc., M.Ag.</Text>
                </View>
            </View>

        </View>
        </ScrollView>
      </View>

    );
  }

}
export default Pengurus;

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
  divPengurus: {
    width: 320,
    height: 161,
    paddingHorizontal: 30,
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
  titleFocus: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
  },
  mainText: {
    fontSize: 13,
    textAlign: 'justify',
    marginTop: 10,
  },
});
