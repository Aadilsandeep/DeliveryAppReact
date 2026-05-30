import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';


export default function menu({navigation}){
  
  return(
    <View style={styles.container}>
      <Text style={styles.text}>MenuState</Text>
    </View>

  )
}
const styles=StyleSheet.create({
  container:{
     flex:1,
       
  },
  text:{
    flexDirection:'row',
    alignItems:'center',
    alignText:'center',
    justifyContent:'space-between',
  }
})
