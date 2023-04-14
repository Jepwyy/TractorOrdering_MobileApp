import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//layout
import MainContainer from './layouts/MainContainer'

//screen
import LoginScreen from './screens/LoginScreen'
import RegScreen from './screens/RegScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Main' component={MainContainer} />
        <Stack.Screen name='Register' component={RegScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
