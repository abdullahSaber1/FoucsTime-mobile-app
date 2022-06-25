import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text, Vibration} from 'react-native';
import {useKeepAwake} from 'expo-keep-awake';
import {ProgressBar} from 'react-native-paper';
import {Countdown, RoundedButton} from '../../components';
import {colors} from '../../utils/colors';
import {spacing} from '../../utils/sizes';
import Timing from './TimingScreen';

const Timer = ({foucsSubject, onTimerEnd, clearSubject}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

  const onEnd = useCallback((reset) => {
    Vibration.vibrate(PATTERN);
    onTimerEnd(foucsSubject);
    reset();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          //   onProgress={(prograss) => setProgress(prograss)}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.lg}}>
          <Text style={styles.title}>Foucs on : </Text>
          <Text style={styles.task}>{foucsSubject}</Text>
        </View>
      </View>

      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar
          progress={progress}
          color={colors.prograssBar}
          style={{height: spacing.sm}}
        />
      </View>

      <View style={styles.timingContainer}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && minutes !== 0 ? (
          <RoundedButton title='start' onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title='stop' onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton size={50} title='-' onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timingContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xxl,
  },
  clearWrapper: {
    alignItems: 'center',
  },
});

export default Timer;
