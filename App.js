import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import mainPage from './Components/mainPage'
import statistik from './Components/statistik'

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='mainPage'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="mainPage" component={mainPage} options={{title: 'Väntetider i vården'}}/>
        <Stack.Screen name="statistik" component={statistik} options={{title: 'Statistik'}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}