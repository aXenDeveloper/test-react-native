import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const InputTask = ({ handleButton }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = text => {
    setInputText(text);
  };

  return (
    <View style={styles.contentInput}>
      <TextInput
        placeholder="Wpisz treść zadania"
        style={styles.input}
        onChangeText={handleInput}
        value={inputText}
      />
      <Button title="Dodaj" onPress={() => handleButton(inputText, setInputText)} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: '#000',
    borderWidth: 5,
    padding: 20,
    marginBottom: 10,
    width: '80%'
  }
});

export default InputTask;
