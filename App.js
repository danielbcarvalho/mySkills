import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Home from './src/pages/Home'

const App = () => {
  return (
    <Home />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff'
  }
})

export default App
