import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SucessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name='checkmark-circle-outline' size={150} color='#FF8C00' />
      <Text style={{ fontWeight: '500', fontSize: 30, color: '#FF8C00' }}>
        Order Successfully Placed
      </Text>
      <Text style={{ color: '#bbb', fontWeight: 'bold' }}>#482354827456</Text>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.checkoutButtonText}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  checkoutButton: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
})
