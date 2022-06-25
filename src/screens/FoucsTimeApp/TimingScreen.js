import React from 'react';

import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../../components';

const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.container}>
      <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
      <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)} />
      <RoundedButton size={75} title='30' onPress={() => onChangeTime(30)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Timing;
