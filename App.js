import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import Productdetails from './screens/Productdetails.js';
const Stack=createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name='Mobile' component={About} />
    <Stack.Screen name='productdetail' component={Productdetails}/>
  </Stack.Navigator>
   </NavigationContainer>
  );
}
