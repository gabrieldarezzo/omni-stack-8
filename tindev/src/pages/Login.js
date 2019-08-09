import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import logo from '../assets/logo.png';


export default function Login() {

    // 
    return (
        <View style={style.container}>
            <Image source={logo}></Image>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    }
  });