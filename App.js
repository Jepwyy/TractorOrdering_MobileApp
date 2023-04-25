import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//layout
import MainContainer from './layouts/MainContainer'

//screen
import LoginScreen from './screens/LoginScreen'
import RegScreen from './screens/RegScreen'
import DetailsScreen from './screens/DetailsScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import SucessScreen from './screens/SuccessScreen'
import AdminContainer from './layouts/AdminContainer'
import HomeScreen from './screens/HomeScreen'
const Stack = createStackNavigator()

import { CartProvider } from './shared/CartContext'

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Login'
        >
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Tst' component={LoginScreen} />

          <Stack.Screen name='Success' component={SucessScreen} />
          <Stack.Screen name='Admin' component={AdminContainer} />
          <Stack.Screen name='Main' component={MainContainer} />
          <Stack.Screen name='Register' component={RegScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} />
          <Stack.Screen name='Checkout' component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
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
