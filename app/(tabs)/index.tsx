import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View style={{
      backgroundColor: "red",
      flex:1,
      justifyContent:'center',
      alignItems:"center"
    }}>
      <Text style={{
        fontSize:50,
        fontWeight:"500",
        color:"white"
      }}>Hello world</Text>
      <Link href="/about" style={{color:"white",fontSize:30}}>Go to About</Link>
      <Link href="/contact" style={{color:"white",fontSize:30}}>Go to Contact</Link>
    
    </View>
  )
}

export default index