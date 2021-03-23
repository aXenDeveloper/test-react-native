import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import InputTask from './components/InputTask';
import TasksList from './components/tasks/TasksList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleButton = (inputText, setInputText) => {
    setTasks([...tasks, { id: Math.round(Math.random() * 1000).toString(), value: inputText }]);
    setInputText('');
  };

  return (
    <View style={styles.main}>
      <InputTask handleButton={handleButton} />

      <TasksList tasks={tasks} />
    </View>
  );
}

// <StatusBar style="auto" />

const styles = StyleSheet.create({
  main: {
    padding: 10
  }
});
