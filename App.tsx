import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  //Remember to remove expo-fonts

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
