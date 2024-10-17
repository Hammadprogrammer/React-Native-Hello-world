import { View, Text } from 'react-native'
import React from 'react'



const About = () => {
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
      }}>About</Text>
    
    </View>
  )
}

export default About