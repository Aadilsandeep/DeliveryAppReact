import * as React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,Image} from 'react-native';

export default class login extends React.Component {
  constructor(){
    super();
    this.state={
      emailId:'',
      password:''
    }
  }
  login=(email,password)=>{
  if(email && password){
    alert("Login Successful");
  } else {
    alert("Enter Email and Password");
  }
}
  render(){
    return (
     <KeyboardAvoidingView style={styles.container}>
     <View>
        <TextInput
        style={styles.loginBox}
        placeholder="abc@example.com"
        keyboardType='email-address'
        onChangeText={(text)=>{
          this.setState({
            emailId:text
          })
        }}
        />
         <TextInput
        style={styles.loginBox}
        placeholder="Enter Passkey"
        secureTextEntry={true}
        onChangeText={(text)=>{
          this.setState({
           password:text
         
          })
        }}
        />

        </View>
        <View>
        <TouchableOpacity style={{height:40,width:120,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:12}}
        onPress={()=>{
          this.login(this.state.emailId,this.state.password);
        }}
        >
        <Text style={{textAlign:'center'}}>Login</Text>
        </TouchableOpacity>
        </View>
     </KeyboardAvoidingView>
     )
    
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3D3737'
  },
  loginBox:{
    width:300,
    height:40,
    borderWidth:1.5,
    fontSize:20,
    margin:10,
    paddingLeft:10,
    borderRadius:10
  },
})
