import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import NotificationScreen from '../screens/NotificationScreen'
import CartScreen from '../screens/CartScreen'
import ProfileScreen from '../screens/ProfileScreen'

//Screen names
const homeName = 'Home'
const searchName = 'Search'
const notificationName = 'Notification'
const cartName = 'Cart'
const profileName = 'Profile'

const Tab = createBottomTabNavigator()

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === searchName) {
            iconName = focused ? 'search' : 'search-outline'
          } else if (rn === notificationName) {
            iconName = focused ? 'notifications' : 'notifications-outline'
          } else if (rn === cartName) {
            iconName = focused ? 'cart' : 'cart-outline'
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#FF8C00',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={searchName} component={SearchScreen} />
      <Tab.Screen name={notificationName} component={NotificationScreen} />
      <Tab.Screen name={cartName} component={CartScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainContainer
