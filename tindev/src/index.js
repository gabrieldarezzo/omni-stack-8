import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Routes from './routes';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Remote debugger',
]);

// Fluxo normal
export default function App() {
  return (
    <Routes />   
  );
}