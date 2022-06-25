import {useState} from 'react';
import {colors} from '../../utils/colors';

import {StyleSheet, View, SafeAreaView, Platform, StatusBar} from 'react-native';
import FoucsedHistory from './FoucsedHistory';
import Foucs from './FoucsScreen';
import Timer from './TimerScreen';

export default function FoucsApp() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [foucsedHistory, setFoucsedHistory] = useState([]);

  return (
    <View style={styles.container}>
      {currentSubject ? (
        <Timer
          foucsSubject={currentSubject}
          onTimerEnd={(subject) => {
            console.log(subject);
            setFoucsedHistory((currentList) => [...currentList, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      ) : (
        <>
          <Foucs addSubject={setCurrentSubject} />
          <FoucsedHistory history={foucsedHistory} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
