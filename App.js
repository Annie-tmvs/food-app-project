import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Home,recipe, search, bookmark } from './screens'

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initailRouteName={"Home"}
        >
        <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="recipe" component={recipe} /> 
        <Stack.Screen name="search" component={search} /> 
        <Stack.Screen name="bookmark" component={bookmark} /> 
          
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
