/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Router, Scene, Stack} from 'react-native-router-flux';
import TodoListScreen from './src/screens/TodoListScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Router>
      <Stack key="root">
        <Scene
          key="TodoListScreen"
          component={TodoListScreen}
          title="Todo List "
        />
      </Stack>
    </Router>
  );
};

export default App;
