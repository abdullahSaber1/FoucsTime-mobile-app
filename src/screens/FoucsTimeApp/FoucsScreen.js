import React, {useState} from 'react';

import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../components';
import {colors} from '../../utils/colors';

const Foucs = ({addSubject}) => {
  const [subject, setSubject] = useState('');
  const handleSubjectChange = (e) => {
    setSubject(e);
  };

  const handleAddSubject = () => {
    addSubject(subject);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputTextContainer}>
        <TextInput
          style={styles.inputText}
          value={subject}
          onChangeText={handleSubjectChange}
          label='what would you liketo Foucs on ?'
        />
        <View style={styles.buttonContainer}>
          <RoundedButton title='+' size={50} onPress={handleAddSubject} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContainer: {
    justifyContent: 'center',
  },

  inputTextContainer: {
    padding: 25,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: 24,
  },
  inputText: {
    flex: 1,
    marginRight: 10,
  },
});

export default Foucs;
