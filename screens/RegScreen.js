import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

//layout
import LoginScreen from './LoginScreen'

//logo
import logo from '../assets/logo.png'
import flogo from '../assets/ficon.png'
import glogo from '../assets/gicon.png'

export default function RegScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingIn, setIsLoadingIn] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        handleLogin()
      }, 1000)
    }
  }, [isLoading])

  useEffect(() => {
    if (isLoadingIn) {
      setTimeout(() => {
        setIsLoggedIn(true)
        alert('Account Registered!')
      }, 1000)
    }
  }, [isLoadingIn])

  const handleLogin = () => {
    if (username === '' && password === '') {
      alert('Please fill all fields')
      setIsLoading(false)
    } else {
      setIsLoggedIn(true)
      alert('Account Registered!')
    }
  }

  const handleButtonPress = () => {
    setIsLoading(true)
  }
  const handleButton = () => {
    setIsLoadingIn(true)
  }

  if (isLoggedIn) {
    // Redirect to the admin page
    return <LoginScreen />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={logo} />
      {isLoading && (
        <ActivityIndicator size='large' color='#FF8C00' position='absolute' />
      )}
      {isLoadingIn && (
        <ActivityIndicator size='large' color='#FF8C00' position='absolute' />
      )}
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder='Name' />
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.buttonReg}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textReg}>
          Already have an account?
          <Text style={{ color: '#FF8C00' }}> Login</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 40, marginBottom: 10 }}>
        Or register with social account
      </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconContainer1} onPress={handleButton}>
          <Image style={styles.icons} source={glogo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer1} onPress={handleButton}>
          <Image style={styles.icons} source={flogo} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    height: 250,
    width: 250,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 8,
    width: '85%',
    borderRadius: 4,
  },
  buttonLogin: {
    marginTop: 40,
    padding: 8,
    margin: 8,
    width: '85%',
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
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttonReg: {
    alignSelf: 'flex-end',
    marginRight: '8%',
  },
  icons: {
    height: 30,
    width: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 25,
  },
  iconContainer1: {
    borderRadius: 20,
    backgroundColor: '#FFf',
    paddingVertical: 15,
    paddingHorizontal: 30,
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
