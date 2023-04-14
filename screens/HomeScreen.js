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
import { TopSelling, TractorsCat } from '../Data/Data'
//image
import banner from '../assets/HeaderImg.jpg'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Container}>
        <View>
          <ImageBackground style={styles.Banner} source={banner}>
            <View
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 15 }}
            >
              <Text style={styles.BannerText}>May 5, 2023</Text>
              <Text style={styles.BannerText}>50% OFF</Text>
            </View>
          </ImageBackground>
          <Text
            style={{ fontWeight: '500', fontSize: 25, textAlign: 'center' }}
          >
            Winter is Coming
          </Text>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 15,
              textAlign: 'center',
              color: '#828282',
            }}
          >
            Promo code: WIN19
          </Text>
        </View>
        <View style={{ width: '90%' }}>
          <Text style={{ fontWeight: '400', fontSize: 25, marginBottom: 5 }}>
            Top Selling Products
          </Text>
          <ScrollView horizontal={true}>
            {TopSelling.map((item) => (
              <ImageBackground
                key={item.id}
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
            ))}
          </ScrollView>
        </View>
        <View style={{ width: '90%' }}>
          <View>
            <Image
              source={{
                uri: 'https://agriline.ie/img/s/wheel-tractor-JOHN-DEERE-4410---1681232869686472431_common--23041120062636951800.jpg',
              }}
              style={{ width: 150, height: 200 }}
            />
            <Text>sada</Text>
            <Text>sasadasdda</Text>
            <Text>saasdasdda</Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://agriline.ie/img/s/wheel-tractor-JOHN-DEERE-4410---1681232869686472431_common--23041120062636951800.jpg',
              }}
              style={{ width: 150, height: 200 }}
            />
            <Text>sada</Text>
            <Text>sasadasdda</Text>
            <Text>saasdasdda</Text>
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
  Banner: { height: 320, width: 400 },
  BannerText: {
    fontWeight: '300',
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
  },
})
