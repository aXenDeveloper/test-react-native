import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TaskItem = ({ itemData }) => (
  <View style={styles.listItem}>
    <Text>{itemData.item.value}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 1
  }
});

export default TaskItem;
