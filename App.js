import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Add_Vehicle from './screens/Add_Vehicle'
import Loging_Page from './screens/Loging_Page'
import Register_Page from './screens/Register_Page'
import Home from './screens/Home'
import VehicleInfo from './screens/VehicleInfo'
import view from './screens/view'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
    <Stack.Screen name="view" component={view} options={{headerShown: false}} />


    <Stack.Screen name="Loging Page" component={Loging_Page} />
    <Stack.Screen name="Add New Vehicle" component={Add_Vehicle} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Register Page" component={Register_Page} />
    <Stack.Screen name="Vehicle Information" component={VehicleInfo} />
    
    </Stack.Navigator>
  
  </NavigationContainer>

  )
}
