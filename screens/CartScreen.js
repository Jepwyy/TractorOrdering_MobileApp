import React, { useContext } from 'react'
import { CartContext } from '../shared/CartContext'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext)

  const handleRemoveItem = (item) => {
    removeFromCart(item)
  }
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.Price
  }, 0)

  const formattedTotalPrice = totalPrice.toLocaleString('en-PH', {
    style: 'currency',
    currency: 'PHP',
  })
  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems, totalPrice })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <View>
          <View>
            <FlatList
              style={{ maxHeight: 520 }}
              data={cartItems}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image
                    source={{ uri: item.Image }}
                    style={{ width: 60, height: 60 }}
                  />
                  <View>
                    <Text style={styles.itemTitle}>{item.Name}</Text>
                    <Text style={styles.itemPrice}>{item.Model}</Text>
                    <Text style={styles.itemPrice}>
                      {item.Price.toLocaleString('en-PH', {
                        style: 'currency',
                        currency: 'PHP',
                      })}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveItem(item)}
                  >
                    <Text style={styles.removeButtonText}>
                      <Ionicons name='trash-outline' size={20} color='#fff' />
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View>
            <Text style={styles.total}>Total: {formattedTotalPrice}</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  empty: {
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginVertical: 10,
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
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
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
