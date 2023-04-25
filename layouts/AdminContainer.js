import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import DashboardScreen from '../admin/DashboardScreen'
import ProductsScreen from '../admin/ProductsScreen'
import USersScreen from '../admin/UsersScreen'
import OrdersScreen from '../admin/OrdersScreen'
import AdminProfileScreen from '../admin/AdminProfileScreen'

//Screen names
const dashboardName = 'Dashboard'
const productName = 'Product'
const orderName = 'Order'
const userName = 'User'
const adminProfileName = 'Settings'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const AdminContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={dashboardName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let rn = route.name

          if (rn === dashboardName) {
            iconName = focused ? 'speedometer' : 'speedometer-outline'
          } else if (rn === productName) {
            iconName = focused ? 'briefcase' : 'briefcase-outline'
          } else if (rn === orderName) {
            iconName = focused ? 'cart' : 'cart-outline'
          } else if (rn === userName) {
            iconName = focused ? 'people' : 'people-outline'
          } else if (rn === adminProfileName) {
            iconName = focused ? 'settings' : 'settings-outline'
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
      <Tab.Screen name={dashboardName} component={DashboardScreen} />
      <Tab.Screen name={productName} component={ProductsScreen} />
      <Tab.Screen name={orderName} component={OrdersScreen} />
      <Tab.Screen name={userName} component={USersScreen} />
      <Tab.Screen name={adminProfileName} component={AdminProfileScreen} />
    </Tab.Navigator>
  )
}

export default AdminContainer
