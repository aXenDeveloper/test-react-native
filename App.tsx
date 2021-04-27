import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Home from './views/Home';
import About from './views/About';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === 'android' ? 25 : 0}px;
`;

export default function App() {
  return (
    <StyledView>
      <NativeRouter>
        <View>
          <View>
            <Link to="/" underlayColor="#f0f4f7">
              <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7">
              <Text>About</Text>
            </Link>
            <Link to="/topics" underlayColor="#f0f4f7">
              <Text>Topics</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </View>
      </NativeRouter>
    </StyledView>
  );
}
