import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
  <Stack
  screenOptions={{
    // headerShown:false,
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '600',
    },
  }}>
        
    {/* <Stack.Screen name="index" /> */}
    <Stack.Screen name="about"/>
    <Stack.Screen name="contact"/>
  </Stack>
  )
}

export default RootLayout