import React from 'react';

import {View, StyleSheet, Text, FlatList} from 'react-native';
import {colors} from '../../utils/colors';
import {fontSizes, spacing} from '../../utils/sizes';

const FoucsedHistory = ({history}) => {
  const renderItem = ({item}) => (
    <View style={styles.foucedItems}>
      <Text style={styles.foucsedText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've Foucs on: </Text>
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      ) : (
        <Text style={styles.foucsedText}>No foucsed history</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    flex: 4,
  },
  title: {
    fontSize: fontSizes.lg,
    color: colors.white,
    textAlign: 'center',
    paddingBottom: spacing.lg,
    fontWeight: 'bold',
  },
  foucedItems: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    padding: 20,
    margin: 8,
  },
  foucsedText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FoucsedHistory;
