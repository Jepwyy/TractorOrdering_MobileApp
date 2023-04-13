import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native'
import MainContainer from '../layouts/MainContainer'

export default function LoginScreen() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        handleLogin()
      }, 2000)
    }
  }, [isLoading])

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid username or password')
    }
  }

  const handleButtonPress = () => {
    setIsLoading(true)
  }

  if (isLoggedIn) {
    // Redirect to the admin page
    return <MainContainer />
  }

  return (
    <View style={styles.container}>
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
      <Button style={styles.btn} title='Login' onPress={handleButtonPress} />
      {isLoading && <ActivityIndicator size='large' color='#0000ff' />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 8,
    width: '80%',
    borderRadius: 4,
  },
  btn: {
    borderWidth: 1,
    padding: 8,
    margin: 8,
    width: '80%',
    borderRadius: 4,
    backgroundColor: '#FF8C00',
  },
})
