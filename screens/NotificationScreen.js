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

export default function NotificationScreen() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.lineTop}>
        <Text style={styles.Title}>Notifications</Text>
      </View>

      <View style={styles.line}>
        <View paddingLeft={'1%'} color={'#FF6600'}>
          <Ionicons
            size={41}
            flex={1}
            name='basket'
            color='#ff0000'
            onPress={() => alert('Will now proceed to "Promotions" Tab')}
          ></Ionicons>
        </View>

        <View flex={2} paddingLeft={'5%'}>
          <Text
            style={styles.Heading2}
            onPress={() => alert('Will now proceed to "Promotions" Tab')}
          >
            Promotions
          </Text>
          <Text
            style={styles.Heading3}
            onPress={() => alert('Will now proceed to "Promotions" Tab')}
          >
            Get this EXCLUSIVE voucher for 100% off when...
          </Text>
        </View>

        <View>
          <Ionicons
            size={40}
            flex={1}
            name='chevron-forward'
            onPress={() => alert('Will now proceed to "Promotions" Tab')}
          ></Ionicons>
        </View>
      </View>

      <View style={styles.line}>
        <View paddingLeft={'2%'}>
          <Ionicons
            size={36}
            name='time'
            color='#FF6600'
            onPress={() => alert('Will now proceed to "Activities" Tab')}
          ></Ionicons>
        </View>

        <View flex={2} paddingLeft={'5%'}>
          <Text
            style={styles.Heading2}
            onPress={() => alert('Will now proceed to "Activities" Tab')}
          >
            Activities
          </Text>
          <Text
            style={styles.Heading3}
            onPress={() => alert('Will now proceed to "Activities" Tab')}
          >
            No activity yet
          </Text>
        </View>

        <View>
          <Ionicons
            size={40}
            flex={1}
            name='chevron-forward'
            onPress={() => alert('Will now proceed to "Activities" Tab')}
          ></Ionicons>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },

  lineTop: {
    flexDirection: 'row',
    paddingVertical: '5%',

    alignItems: 'center',
    paddingLeft: 15,
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 1,
    width: '100%',
  },

  line: {
    flexDirection: 'row',
    paddingVertical: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#C3C3C3',
    borderBottomWidth: 1,
    width: '100%',
  },

  content: {
    paddingVertical: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  Title: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  Heading2: {
    fontSize: 21,
    fontFamily: 'serif',
  },

  Heading3: {
    fontSize: 12,
    color: '#AAAAAA',
  },
})
