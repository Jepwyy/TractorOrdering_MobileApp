import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders'</Text>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Text
          style={{
            fontFamily: 'serif',
            marginTop: 0,
            marginBottom: 8,
            marginLeft: 10,
          }}
        >
          ORDER LIST
        </Text>
        <View
          style={{
            width: '90%',
            backgroundColor: '#eee',
            paddingHorizontal: 25,
            paddingVertical: 15,
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',

              justifyContent: 'space-between',
              borderRadius: 5,
              marginBottom: 5,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text style={{ fontWeight: '700', color: '#222' }}>
                NAME: Abdul Jabol
              </Text>
              <Text>DATE: 04/23/2023</Text>
              <Text>TOTAL: ₱ 51,218,124.23</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Text style={{ color: 'green' }}>Delivered</Text>
              <Text style={{ color: '#828282' }}>Order №:1037088</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#eee',
            paddingHorizontal: 25,
            paddingVertical: 15,
            alignSelf: 'center',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',

              justifyContent: 'space-between',
              borderRadius: 5,
              marginBottom: 5,
            }}
          >
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <Text style={{ fontWeight: '700', color: '#222' }}>
                NAME: Abdul Salsalini
              </Text>
              <Text>DATE: 04/18/2023</Text>
              <Text>TOTAL: ₱ 100,218,124.23</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <Text style={{ color: 'orange' }}>Processing</Text>
              <Text style={{ color: '#828282' }}>Order №:2437088</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 10,
    paddingLeft: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  Button: {
    backgroundColor: '#FF8C00',
    padding: 8,
    borderRadius: 8,
    width: '35%',
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default OrdersScreen
