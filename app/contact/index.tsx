import { View, Text } from 'react-native'
import React from 'react'



const Contact = () => {
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
      }}>Contact</Text>
    
    </View>
  )
}

export default Contact