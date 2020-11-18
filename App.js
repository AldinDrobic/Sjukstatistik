import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import mainPage from './Components/mainPage'
import regioner from './Components/regioner'
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
        <Stack.Screen name="Main" component={mainPage} options={{title: 'Hem'}}/>
        <Stack.Screen name="regioner" component={regioner} options={{title: 'Regioner'}}/>
        <Stack.Screen name="statistik" component={statistik} options={{title: 'Här måste vi fixa dynamisk namn på något sätt'}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}