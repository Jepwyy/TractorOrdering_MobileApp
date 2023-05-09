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
import { Ionicons } from '@expo/vector-icons'
import { AllTractorsTest } from '../Data/Data'

const ProductsScreen = () => {
  const [items, setItems] = useState(AllTractorsTest)
  const [modalVisible, setModalVisible] = useState(false)
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [runningHours, setRunningHours] = useState('')
  const [enginePower, setEnginePower] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addProduct = () => {
    const id = items.length + 1
    const newProduct = {
      id,
      Name: name,
      Manufacturer: manufacturer,
      Model: model,
      RunningHours: runningHours,
      EnginePower: enginePower,
      Price: price,
      Image: image,
    }
    setItems([...items, newProduct])
    alert('Item Added Successfully!')
    setModalVisible(false)
  }

  const editProduct = () => {
    const updatedProduct = {
      ...selectedProduct,
      Name: name,
      Manufacturer: manufacturer,
      Model: model,
      RunningHours: runningHours,
      EnginePower: enginePower,
      Price: price,
      Image: image,
    }
    const updatedItems = items.map((item) =>
      item.id === selectedProduct.id ? updatedProduct : item
    )
    setItems(updatedItems)
    alert('Item Updated Successfully!')
    setModalVisible(false)
    setSelectedProduct(null)
  }

  const deleteProduct = (id) => {
    setItems(items.filter((item) => item.id !== id))
    alert('Item Removed Successfully!')
  }

  const renderProduct = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.Image }} style={{ width: 60, height: 60 }} />

      <View style={{ width: 190 }}>
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
        onPress={() => deleteProduct(item.id)}
        style={styles.removeButton}
      >
        <Ionicons name='ios-trash' size={24} color='#fff' />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
          setSelectedProduct(item)
          setName(item.Name)
          setManufacturer(item.Manufacturer)
          setModel(item.Model)
          setRunningHours(item.RunningHours)
          setEnginePower(item.EnginePower)
          setPrice(item.Price)
          setImage(item.Image)
          setModalVisible(true)
        }}
      >
        <Ionicons name='ios-create-outline' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products'</Text>
      <FlatList
        data={items.reverse()}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setSelectedProduct(null)
          setName('')
          setManufacturer('')
          setModel('')
          setRunningHours('')
          setEnginePower('')
          setPrice('')
          setImage('')
          setModalVisible(true)
        }}
      >
        <Ionicons name='ios-add' size={32} color='white' />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedProduct ? (
              <Text style={styles.title1}>EDIT PRODUCTS'</Text>
            ) : (
              <Text style={styles.title1}>ADD PRODUCTS'</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder='Name'
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Manufacturer'
              value={manufacturer}
              onChangeText={(text) => setManufacturer(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Model'
              value={model}
              onChangeText={(text) => setModel(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Running Hours'
              value={runningHours.toString()}
              keyboardType='numeric'
              onChangeText={(text) => setRunningHours(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Engine Power'
              value={enginePower.toString()}
              keyboardType='numeric'
              onChangeText={(text) => setEnginePower(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Price'
              value={price.toLocaleString('en-PH', {
                style: 'currency',
                currency: 'PHP',
              })}
              keyboardType='numeric'
              onChangeText={(text) => setPrice(text)}
            />
            <TextInput
              style={styles.input}
              placeholder='Image URL'
              value={image}
              onChangeText={(text) => setImage(text)}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              {selectedProduct ? (
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={editProduct}
                >
                  <Text style={styles.modalButtonText}>Edit</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={addProduct}
                >
                  <Text style={styles.modalButtonText}>Add</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 10,
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
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    backgroundColor: '#FF8C00',
    borderRadius: 50,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 8,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  modalButton: {
    backgroundColor: '#FF8C00',
    padding: 8,
    borderRadius: 8,
    width: '45%',
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
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

export default ProductsScreen
