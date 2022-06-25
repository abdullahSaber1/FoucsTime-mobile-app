import {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View} from 'react-native';
import GoalsInput from './GoalsInput';
import GoalsList from './GoalsList';

function GoalsScreen() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);
  const [isModelVisable, setIsModelVisable] = useState(false);

  const handleGoalInput = (value) => {
    setGoal(value);
  };

  function handleAddGoal() {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      {goal, id: Math.random().toString()},
    ]);
    setIsModelVisable(false);
    setGoal('');
  }

  function handleCloseModel() {
    setIsModelVisable(false);
  }

  function handleDeletGoal(id) {
    setGoalsList((currentList) => currentList.filter((goals) => goals.id !== id));
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          onPress={() => setIsModelVisable(true)}
          color='#5e0acc'
        />
        <GoalsInput
          visiable={isModelVisable}
          handleAddGoal={handleAddGoal}
          handleGoalInput={handleGoalInput}
          goal={goal}
          handleCloseModel={handleCloseModel}
        />
        <GoalsList goalsList={goalsList} onDeleteHandler={handleDeletGoal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

export default GoalsScreen;
