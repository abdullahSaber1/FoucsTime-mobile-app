import React from 'react';

import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';

const GoalsList = ({goalsList, onDeleteHandler, id}) => {
  const renderItem = ({item}) => (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{color: '#210644', borderless: true}}
        onPress={onDeleteHandler.bind(this, item.id)}>
        <Text style={styles.goalText}>{item.goal}</Text>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goalsList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 4,
  },
  goalsItem: {
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    margin: 8,
  },
  goalText: {
    color: 'white',
    padding: 20,
  },
});

export default GoalsList;
