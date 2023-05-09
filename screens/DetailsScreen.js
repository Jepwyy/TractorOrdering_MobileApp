import React, { useState, useContext } from 'react'
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
import { CartContext } from '../shared/CartContext'
import { Picker } from '@react-native-picker/picker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TopSelling, TractorsCat, AllTractors } from '../Data/Data'
//image
import banner from '../assets/HeaderImg.jpg'

export default function DetailsScreen({ navigation, route }) {
  const { tractor } = route.params

  const [selectedValue, setSelectedValue] = useState('black')

  const handleBuy = () => {
    navigation.navigate('Checkout', {
      tractor: tractor,
      color: selectedValue,
    })
  }
  const { addToCart } = useContext(CartContext)
  const handleAddToCart = () => {
    addToCart(tractor)
    alert('Item added to Cart')
  }
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#828282',
          paddingTop: 0,
          display: 'flex',
          alignItems: 'center',

          flexDirection: 'row',
          backgroundColor: '#FFf',
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name='chevron-back' size={30} color='#000' />
        </TouchableOpacity>

        <Text
          style={{
            left: 136,
            fontWeight: '400',
            fontSize: 18,
            marginBottom: 2,
          }}
        >
          Details
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.Banner} source={{ uri: tractor.Image }} />
        <Text style={{ fontSize: 18, fontWeight: '300', marginLeft: 5 }}>
          Select Color:
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#BDBDBD',
            width: '80%',

            alignSelf: 'flex-end',
            marginRight: 15,
          }}
        >
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label='Black' value='black' />
            <Picker.Item label='Blue' value='blue' />
            <Picker.Item label='Green' value='green' />
            <Picker.Item label='Red' value='red' />
          </Picker>
        </View>

        <View style={styles.Container}>
          <View
            style={{ alignSelf: 'flex-start', marginTop: 15, marginLeft: 10 }}
          >
            <Text style={styles.Text}>
              <Ionicons name='caret-forward-circle' size={19} color='#FF8C00' />{' '}
              Type : <Text style={styles.Item}>{tractor.type}</Text>
            </Text>
            <Text style={styles.Text}>
              <Ionicons name='caret-forward-circle' size={19} color='#FF8C00' />{' '}
              Manufacturer :{' '}
              <Text style={styles.Item}>{tractor.Manufacturer}</Text>
            </Text>
            <Text style={styles.Text}>
              <Ionicons name='caret-forward-circle' size={19} color='#FF8C00' />{' '}
              Model : <Text style={styles.Item}>{tractor.Model}</Text>
            </Text>
            <Text style={styles.Text}>
              <Ionicons name='caret-forward-circle' size={19} color='#FF8C00' />{' '}
              Running Hours :{' '}
              <Text style={styles.Item}>{tractor.RunningHours}</Text>
            </Text>
            <Text style={styles.Text}>
              <Ionicons name='caret-forward-circle' size={19} color='#FF8C00' />{' '}
              Engine Power :{' '}
              <Text style={styles.Item}>{tractor.EnginePower}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              marginLeft: 5,
              marginTop: 10,
              marginBottom: 4,
            }}
          >
            {tractor.Name}
          </Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginRight: 14,
              fontSize: 15,
              fontWeight: '400',
            }}
          >
            {tractor.Price.toLocaleString('en-PH', {
              style: 'currency',
              currency: 'PHP',
            })}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity style={styles.Buy} onPress={handleBuy}>
              <Text
                style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}
              >
                BUY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buy2} onPress={handleAddToCart}>
              <Text style={{ alignSelf: 'center', marginTop: 7 }}>
                <Ionicons name='basket' size={30} color='#FFf' />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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
  Banner: { height: 360, width: 420 },
  Text: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 10,
  },
  Item: {
    color: '#BDBDBD',
    fontWeight: '400',
  },
  Buy: {
    width: '65%',
    paddingVertical: 10,
    marginLeft: 14,
    borderRadius: 4,
    backgroundColor: '#FF8C00',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
  },
  Buy2: {
    width: '25%',
    marginRight: 14,

    borderRadius: 4,
    backgroundColor: '#FF8C00',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
  },
  footer: {
    height: 200,
    width: '100%',
    backgroundColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
      shadowOpacity: 0.75,
      shadowRadius: 5.84,
      elevation: 10,
    },
  },
})
