import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native'
import dp from '../assets/dp.jpg'
import dp2 from '../assets/dp.png'
import { Ionicons } from '@expo/vector-icons'

const USersScreen = () => {
  const handleView = () => {
    alert('User Details...')
  }
  const handleDel = () => {
    alert('User Deleted!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users'</Text>
      <View style={styles.item}>
        <Image source={dp} style={{ width: 60, height: 60 }} />

        <View style={{ width: 190 }}>
          <Text style={styles.itemTitle}>Abdul Kenneth </Text>
          <Text style={styles.itemPrice}>abdul.kenneth@gmail.com</Text>
          <Text style={styles.itemPrice}>San Jose, Quezon City</Text>
        </View>

        <TouchableOpacity onPress={handleDel} style={styles.removeButton}>
          <Ionicons name='ios-trash' size={24} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleView} style={styles.editButton}>
          <Ionicons name='eye-outline' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <Image source={dp2} style={{ width: 60, height: 60 }} />

        <View style={{ width: 190 }}>
          <Text style={styles.itemTitle}>John Mark Familgan</Text>
          <Text style={styles.itemPrice}>john.familgan@gmail.com</Text>
          <Text style={styles.itemPrice}>Paltok, Quezon City</Text>
        </View>

        <TouchableOpacity onPress={handleDel} style={styles.removeButton}>
          <Ionicons name='ios-trash' size={24} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleView} style={styles.editButton}>
          <Ionicons name='eye-outline' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 50,
    paddingLeft: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  title1: {
    paddingLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 15,
    maxWidth: 190,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 13,
  },
  removeButton: {
    backgroundColor: '#ff6347',
    padding: 8,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default USersScreen
