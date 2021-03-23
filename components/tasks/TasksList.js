import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TasksList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={itemData => <TaskItem itemData={itemData} />}
    />
  );
};

export default TasksList;
