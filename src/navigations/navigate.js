import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Dewan from '../screens/Dewan/Dewan';
import Profil from '../screens/Dewan/Profil';
import Pengurus from '../screens/Dewan/Pengurus';
import Jadwal from '../screens/Jadwal/Jadwal';
import Fatwa from '../screens/Fatwa/Fatwa';
import FatwaList from '../screens/Fatwa/FatwaList';
import KonsultasiList from '../screens/Konsultasi/KonsultasiList';
import Konsultasi from '../screens/Konsultasi/Konsultasi';
import Tanya from '../screens/Tanya/Tanya';
import WahdahTv from '../screens/WahdahTv/WahdahTv';
import Radio from '../screens/Radio/Radio';
import SearchLocation from '../screens/Jadwal/SearchLocation';
import Kajian from '../screens/Kajian/Kajian';

export default createStackNavigator(

  {
    Home: {
      screen: Home,
    },
    About: {
      screen: About,
    },
    Dewan: {
      screen: Dewan,
    },
    Profil: {
      screen: Profil,
    },
    Pengurus: {
      screen: Pengurus,
    },
    Jadwal: {
      screen: Jadwal,
    },
    Fatwa: {
      screen: Fatwa,
    },
    FatwaList: {
      screen: FatwaList,
    },
    KonsultasiList: {
      screen: KonsultasiList,
    },
    Konsultasi: {
      screen: Konsultasi,
    },
    Tanya: {
      screen: Tanya,
    },
    WahdahTv: {
      screen: WahdahTv,
    },
    Radio: {
      screen: Radio,
    },
    SearchLocation,
    Kajian: {
      screen: Kajian,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);
