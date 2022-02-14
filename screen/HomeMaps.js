import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, StyleSheet, Image, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';

//conexoes
import Mapa from '../componentes/mapa';

export default function HomeMaps( { navigation } ) { 
  const clickHandler = () => {
     navigation.navigate('Gravar') 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Mapa />

      {/* BOTÃO FLUTUANTE */}
      <TouchableOpacity
          activeOpacity={0.7}
          onPress={ clickHandler }
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },

});
