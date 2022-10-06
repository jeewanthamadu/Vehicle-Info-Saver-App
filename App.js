import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Add_Vehicle from './screens/Add_Vehicle'
import Loging_Page from './screens/Loging_Page'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
    <Stack.Screen name="Loging_Page" component={Loging_Page} />
    <Stack.Screen name="Add_Vehicle" component={Add_Vehicle} />
    </Stack.Navigator>
  
  </NavigationContainer>

  )
}
