import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, Platform } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === 'android' ? 25 : 0};
`;

export default function App() {
  return (
    <StyledView>
      <Text>Open up App.tsx to start working on your apps!</Text>
      <StatusBar style="auto" />
    </StyledView>
  );
}
