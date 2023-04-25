import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TopSelling, TractorsCat, AllTractors } from '../Data/Data'
//image
import banner from '../assets/test.jpg'
import icon from '../assets/logo.png'

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Container}>
        <View>
          <ImageBackground style={styles.Banner} source={banner}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',

                marginTop: 50,
                marginLeft: 30,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: '500', color: '#000', fontSize: 30 }}>
                Dashboard
              </Text>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Image source={icon} style={{ width: 110, height: 110 }} />
                <Text style={styles.BannerText}>BENTONG TRACKTORS'</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{ width: '90%' }}>
          <Text style={{ fontWeight: '400', fontSize: 25, marginBottom: 5 }}>
            Top Selling Products
          </Text>
          <ScrollView horizontal={true}>
            {TopSelling.map((item) => (
              <TouchableOpacity key={item.id}>
                <ImageBackground
                  style={{
                    width: 100,
                    height: 100,
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 15,
                    marginHorizontal: 3,
                  }}
                  source={{ uri: item.Image }}
                >
                  <Text
                    style={{
                      color: 'white',
                      paddingLeft: 5,
                      paddingRight: 3,
                      paddingBottom: 5,
                      fontWeight: '400',
                    }}
                  >
                    {item.Name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View
            style={{
              width: '95%',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              paddingHorizontal: 25,
              paddingVertical: 15,
              alignSelf: 'center',
              marginBottom: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Ionicons name='cash-outline' size={60} color='#FF8C00' />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: '#FF8C00',
                    fontWeight: '500',

                    fontSize: 20,
                  }}
                >
                  ₱123,435,567.20
                </Text>
                <Text style={{ color: '#828282' }}>TOTAL INCOME</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '95%',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              paddingHorizontal: 25,
              paddingVertical: 15,
              alignSelf: 'center',
              marginBottom: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Ionicons name='cube-outline' size={60} color='#FF8C00' />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: '#FF8C00',
                    fontWeight: '500',

                    fontSize: 20,
                  }}
                >
                  345
                </Text>
                <Text style={{ color: '#828282' }}>TOTAL ORDERS</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '95%',
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              paddingHorizontal: 25,
              paddingVertical: 15,
              alignSelf: 'center',
              marginBottom: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 1,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Ionicons name='person-outline' size={60} color='#FF8C00' />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: '#FF8C00',
                    fontWeight: '500',

                    fontSize: 20,
                  }}
                >
                  2345
                </Text>
                <Text style={{ color: '#828282' }}>TOTAL USERS</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,

    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  Banner: { height: 280, width: 412 },
  BannerText: {
    fontWeight: '500',
    color: '#000',
    fontSize: 20,
    marginLeft: 20,
  },
  Items: {
    width: 175,

    backgroundColor: '#FFf',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
})

export default DashboardScreen
