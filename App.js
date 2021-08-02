import TodoList from "./components/Pages/TodoList"
import React, { useEffect, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AddTask from './components/Pages/AddTask';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

// Modify to add persistor
import configureStore from './redux/store';
const { store, persistor } = configureStore();
const App = ({ route }) => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            {/* <CustomNavigationBar /> */}
            <Stack.Navigator
              initialRouteName="Home"
              activeColor="#f0edf6"
              inactiveColor="#3e2465"
              barStyle={{ backgroundColor: 'blue' }}  >
              <Stack.Screen name="To-Do app" component={TodoList} />
              <Stack.Screen name="Add task" component={AddTask} />

            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider >

  )
}

export default App

