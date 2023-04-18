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
import banner from '../assets/HeaderImg.jpg'

export default function HomeScreen({ navigation }) {
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
            Summer is Coming
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
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Details', { tractor: item })
                }
              >
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
        </View>
        <View style={{ width: '90%' }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 25,
              marginBottom: 5,
              alignSelf: 'flex-start',
            }}
          >
            NEW IN
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {AllTractors.map((item1) => (
            <TouchableOpacity
              style={styles.Items}
              key={item1.id}
              onPress={() => navigation.navigate('Details', { tractor: item1 })}
            >
              <Image
                source={{ uri: item1.Image }}
                style={{ width: 175, height: 200 }}
              />
              <View style={{ paddingLeft: 3 }}>
                <Text>
                  {item1.Price.toLocaleString('en-PH', {
                    style: 'currency',
                    currency: 'PHP',
                  })}
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    right: 4,
                  }}
                >
                  <Ionicons name='heart-outline' size={30} color='#FF8C00' />
                </View>
                <Text style={{ color: '#828282' }}>{item1.Manufacturer}</Text>
                <Text>{item1.Name}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  Items: {
    width: 175,

    backgroundColor: '#FFf',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
})
