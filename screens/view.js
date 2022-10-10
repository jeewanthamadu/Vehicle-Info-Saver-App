import { View,StyleSheet, ImageBackground,TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'
import React from 'react'

export default function view({navigation}) {
  return (
    <NativeBaseProvider>
     <ImageBackground source={require('../images/view1.jpg')} resizeMode="cover" style={style.image}  >
          <Text style={style.text} >Welcome </Text>
          <TouchableOpacity style={style.btn} onPress={()=>{navigation.navigate('Loging Page')}}>
                  <Text style={{fontWeight:'bold',color:'white', fontSize: 30,  lineHeight: 84,}}> GET  START </Text>
         </TouchableOpacity>
      </ImageBackground>  
      </NativeBaseProvider>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1
    },
    image: {
      flex: 1,
      alignItems:'center',
      width:'100%',
      height:'100%'
    },
    text: {
      marginTop:'20%',
      color: "white",
      fontSize: 80,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
    //   color:'black',
       textShadowColor: 'rgba(230, 200, 55, 0.8)', textShadowOffset: {width: -1, height: 3},textShadowRadius: 15
    
    },
    btn:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:'110%',
      width:'80%',
      height:'10%',
      borderWidth:1,
      borderColor:'white',
      backgroundColor:'#080808c0',
      borderRadius:5
      
  },
})





