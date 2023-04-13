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
import MainContainer from '../layouts/MainContainer'

//logo
import logo from '../assets/logo.png'
import flogo from '../assets/ficon.png'
import glogo from '../assets/gicon.png'

export default function LoginScreen() {
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
      }, 1000)
    }
  }, [isLoadingIn])

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid username or password')
      setIsLoading(false)
    }
  }

  const handleButtonPress = () => {
    setIsLoading(true)
  }
  const handleButton = () => {
    setIsLoadingIn(true)
  }
  const handleRegForm = () => {
    setIsLoading(true)
  }

  if (isLoggedIn) {
    // Redirect to the admin page
    return <MainContainer />
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
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder='Username'
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
      <TouchableOpacity style={styles.buttonReg} onPress={handleRegForm}>
        <Text style={styles.textReg}>
          Don't have an account?
          <Text style={{ color: '#FF8C00' }}> Sign up</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogin} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 50, marginBottom: 10 }}>
        Or login with social account
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
