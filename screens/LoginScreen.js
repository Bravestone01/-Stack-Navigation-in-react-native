import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>
      <Button title='Login' onPress={()=>props.navigation.navigate("HomeScreen")}/>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    text:{
        color:"white",
        backgroundColor:"black",
        padding:20,
        textAlign:"center",
        fontSize:20,
        margin:40,
    }
})