import {useState} from 'react';

import {StyleSheet, View, SafeAreaView, Platform, StatusBar} from 'react-native';
// import {FoucsApp, GoalsScreen} from './src/screens';
import GoalsScreen from './src/screens/GoalsApp/GoalsScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GoalsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
