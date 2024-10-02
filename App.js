import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [show, setShow]=useState(false)
  return (
    <View style={styles.container}>
      {
        show ? <View style={styles.modal}>
        <View style={styles.body}>
          <Text>Hello</Text>
          <Button title='close' onPress={()=>setShow(false)}/>

        </View>
      </View>:null
      }
      <Button title='Show Custom Modal' onPress={()=>setShow(true)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"flex-end",
    marginBottom:10,
  },
  modal:{
    flex:1,
    backgroundColor:"rgba(50,50,50,0.5)",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    backgroundColor:"white",
    width:300,
    height:300,
    padding:20,
    justifyContent:"center",
    borderRadius:20,
    shadowColor:"green",
    elevation:20,

  }
});
