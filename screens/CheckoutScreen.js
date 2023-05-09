import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import { CartContext } from '../shared/CartContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import master from '../assets/masterCard.png'
import JT from '../assets/JT.png'
import JRS from '../assets/JRS.png'
export default function CheckoutScreen({ route, navigation }) {
  const { tractor = {} } = route.params ?? {}
  const { cartItems, clearCart } = useContext(CartContext)

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.Price
  }, 0)

  const WithShip = totalPrice + 20000

  const formattedTotalPrice = WithShip?.toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  })

  const Price = (tractor?.Price ?? 0) + 20000
  const formattedPrice = Price?.toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  })

  const handleCheckout = () => {
    navigation.navigate('Success')
  }

  return (
    <View style={styles.container}>
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
            left: 124,
            fontWeight: '500',
            fontSize: 18,
            alignContent: 'center',
            marginBottom: 2,
          }}
        >
          Checkout
        </Text>
      </View>
      <ScrollView>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View>
            <Text
              style={{ fontFamily: 'serif', marginTop: 20, marginBottom: 8 }}
            >
              SHIPPING ADDRESS
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: '#eee',
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 25,
                paddingVertical: 15,
                justifyContent: 'space-between',
                borderRadius: 5,
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontWeight: '700', color: '#222' }}>
                  Abdul Jabol
                </Text>
                <Text>69 San Jose</Text>
                <Text>Quezon City, Philippines</Text>
              </View>
              <Text style={{ color: '#828282' }}>Change</Text>
            </View>
            <Text
              style={{ fontFamily: 'serif', marginTop: 20, marginBottom: 8 }}
            >
              PAYMENT METHOD
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: '#eee',
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 25,
                paddingVertical: 15,
                justifyContent: 'space-between',
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 5,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={master}
                  style={{
                    width: 50,
                    height: 40,
                  }}
                />
              </View>

              <Text style={{ marginTop: 15 }}>**** **** **** 6869</Text>
              <Text style={{ color: '#828282' }}>Change</Text>
            </View>
            <Text style={{ fontFamily: 'serif', marginTop: 20 }}>
              DELEVERY SERVICES
            </Text>
            <View
              style={{
                width: '100%',

                display: 'flex',
                flexDirection: 'row',

                paddingVertical: 5,
                gap: 15,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: '#eee',
                  padding: 5,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={JT}
                  style={{
                    width: 70,
                    height: 40,
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#eee',
                  padding: 5,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  source={JRS}
                  style={{
                    width: 70,
                    height: 40,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
            <View style={{ marginTop: 165 }}>
              {cartItems.length > 0 ? (
                <View>
                  <View style={styles.itemContainer}>
                    <View>
                      <Text style={styles.itemPrice}>Price:</Text>
                      <Text style={styles.itemPrice}>Shipping Fee:</Text>
                      <Text style={styles.itemPrice}>Total Price:</Text>
                    </View>
                    <View>
                      <View>
                        <Text style={styles.itemPricee}>
                          {totalPrice.toLocaleString('en-PH', {
                            style: 'currency',
                            currency: 'PHP',
                          })}
                        </Text>
                        <Text style={styles.itemPricee}>₱20,000</Text>
                        <Text style={styles.itemPricee}>
                          {formattedTotalPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={handleCheckout}
                  >
                    <Text style={styles.checkoutButtonText}>Submit Order</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <View style={styles.itemContainer}>
                    <View>
                      <Text style={styles.itemPrice}>Price:</Text>
                      <Text style={styles.itemPrice}>Shipping Fee:</Text>
                      <Text style={styles.itemPrice}>Total Price:</Text>
                    </View>
                    <View>
                      <View>
                        <Text style={styles.itemPricee}>
                          {tractor.Price.toLocaleString('en-PH', {
                            style: 'currency',
                            currency: 'PHP',
                          })}
                        </Text>
                        <Text style={styles.itemPricee}>₱20,000</Text>
                        <Text style={styles.itemPricee}>{formattedPrice}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.checkoutButton}
                    onPress={handleCheckout}
                  >
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    width: '100%',
  },

  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  itemPricee: {
    fontSize: 16,
    color: '#000',
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
