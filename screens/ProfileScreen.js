import React from 'react'
import {StyleSheet, Text, View, Image, TextInput, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import dp from '../assets/dp.jpg'

export default function ProfileScreen () {
  return (
    
    <View style = {styles.parentContainer}>
      <ScrollView style = {styles.scrollView}>
      <View style = {styles.row}>
        <Text style = {styles.title}>My Profile</Text>
      </View>
      
      <View style = {styles.rowLine}>

        <View style = {styles.imgContainer}>
          <Image style = {styles.image} source={dp}></Image>
        </View>

        <View style = {styles.row1}>
          <Text style = {styles.h1}>Abdul Jabul</Text>
          <Text style = {styles.h2}>abdul.jabul@gmail.com</Text>
        </View>

      </View>

      <View style = {styles.row}>

        <View style = {styles.row1} flex = {2}>
          <Text style = {styles.h5}>My Purchases</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} name="chevron-forward"></Ionicons>
        </View>

      </View>

      <View style = {styles.rows}>

        <View style = {styles.row2} flex = {1}>
          <Ionicons size={30} name="wallet"></Ionicons>
          <Text>To Pay</Text>
        </View>
        <View style = {styles.row2} flex = {1}>
          <Ionicons size={30} name="boat"></Ionicons>
          <Text>To Ship</Text>
        </View>
        <View style = {styles.row2} flex = {1}>
          <Ionicons size={30} name="log-in"></Ionicons>
          <Text>To Recieve</Text>
        </View>

      </View>

      <View style = {styles.rows}>
        <View style = {styles.row1}  flex ={2}>
          <Text style = {styles.h5}>Shipping addresses</Text>
          <Text style = {styles.h6}>2 Addresses</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} paddingTop = {8} name="chevron-forward"></Ionicons>
        </View>

      </View>

      <View style = {styles.rows}>
        <View style = {styles.row1}   flex ={2}>
          <Text style = {styles.h5}>Payment Methods</Text>
          <Text style = {styles.h6}>Visa **89</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} paddingTop = {8} name="chevron-forward"></Ionicons>
        </View>

      </View>

      <View style = {styles.rows}>
        <View style = {styles.row1}  flex ={2}>
          <Text style = {styles.h5}>Settings</Text>
          <Text style = {styles.h6}>Name, Password</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} paddingTop = {8} name="chevron-forward"></Ionicons>
        </View>

      </View>

      <View style = {styles.rows}>
        <View style = {styles.row1}  flex ={2}>
          <Text style = {styles.h5}>About Us</Text>
          <Text style = {styles.h6}>Geramfer Commercial Corp.</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} paddingTop = {8} name="chevron-forward"></Ionicons>
        </View>
      </View>

      <View style = {styles.rows}>
        <View style = {styles.row1}  flex ={2}>
          <Text style = {styles.logout}>Log Out</Text>
        </View>

        <View paddingRight = {'5%'}>
        <Ionicons size={20} flex ={1} paddingTop = {8} name="chevron-forward"></Ionicons>
        </View>

      </View>
      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  scrollView:{
    width: '100%',
},

  parentContainer:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'center',
    paddingTop:'20%',
    marginTop:-20,
  },
  row:{
    flexDirection: 'row',
    paddingTop:'5%',
    paddingLeft:'5%',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
  },
  rowLine:{
    flexDirection: 'row',
    paddingVertical:'5%',
    paddingLeft:'5%',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 1,
  },
  rows:{
    flexDirection: 'row',
    paddingVertical:'5%',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 1,
  },
  row1:{
    flexDirection: 'column',
    paddingLeft:'5%',
    justifyContent: 'center',
    alignItems:'flex-start',
    width: '100%',
  },
  row2:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%',
  },
title:{
  fontSize: 40,
  fontWeight:'bold',
},
imgContainer:{
  width: 100,
  height: 100,
  borderRadius: 50,
  overflow: 'hidden',
},
image: {
  width: 100,
  height: 100,
},

h1:{
  fontSize: 20,
  fontFamily:'serif',
},
h2: {
  fontSize: 15,
  fontWeight:'100',
  fontFamily:'serif',
  color:'#AAAAAA',
},

h5:{
  fontFamily:'serif',
  fontSize: 16,
},

h6: {
  fontFamily:'serif',
  fontSize: 12,
  color:'#AAAAAA',
  paddingTop:3,
},

logout:{
  fontFamily:'serif',
  fontSize: 20,
},


})

