import React from 'react';

import {Button, StyleSheet, TextInput, Modal, View, Image} from 'react-native';

const GoalsInput = ({
  handleAddGoal,
  handleGoalInput,
  goal,
  visiable,
  handleCloseModel,
}) => {
  return (
    <Modal visible={visiable} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/goal.png')}
        />
        <TextInput
          placeholder='Enter Your Goals'
          value={goal}
          style={styles.textInput}
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title='Add Goal'
              onPress={handleAddGoal}
              color='#5e0acc'
            />
          </View>
          <View style={styles.button}>
            <Button title='cancel' onPress={handleCloseModel} color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 24,
    margin: 10,
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 120,
    height: 50,
    marginHorizontal: 8,
  },
});

export default GoalsInput;
