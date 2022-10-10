
import React, { useEffect, useState } from 'react'
import { Alert,StyleSheet,View,ScrollView  } from 'react-native'
import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Box,Avatar,Center,HStack,Image}from 'native-base'

export default function Register_Page({navigation}) {


  const [userName,setuserName]=useState('');
  const [email,setemail]=useState('');
  const [nic,setnic]=useState('');
  const [password,setpassword]=useState('');
 

  const saveData=()=>{
    console.log(userName , email , nic, password)
    fetch('http://192.168.1.100:4000/users',{

        method:'POST',    

        body:JSON.stringify({
          userName:userName,
          email:email,
          nic:nic,
          password:password,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        
    })
        .then((response) => {
            Alert.alert("New User Saved Successfully !")
            
        })
        .catch((err)=>{Alert.alert("Error occured !")
        })
}

const clear=()=>{
  setuserName('')
  setemail('')
  setnic('')
  setpassword('')
  
}



  return (
    
    <NativeBaseProvider>



     <Box mt="10%" left="10" maxW="80" maxH="100%" rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="1" _dark={{
        borderColor: "coolGray.700", backgroundColor: "gray.700" }}> 

        <VStack space={6} alignItems="center" mt="10%">
        <Text bold fontSize="5xl" underline color="indigo.600">Create Account </Text>
        </VStack>

        <VStack space={7} alignItems="center" mt="15%">
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="User Name" 
        value={userName}
        onChangeText={(e)=>{
          setuserName(e)
        }} />
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="E-mail" 
        value={email}
        onChangeText={(e)=>{
          setemail(e)
        }} />
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="NIC" 
        value={nic}
        onChangeText={(e)=>{
          setnic(e)
        }} />
        <Input type="password" size="lg" w="75%" mx="auto" variant="underlined" placeholder="Create Password" 
        value={password}
        onChangeText={(e)=>{
          setpassword(e)
        }} /> 
        <Button w="50%" mt="2%" mx="auto" fontSize="lg" alignItems="center" h="10%" variant="solid" size="xsm" onPress={(e)=>{
                                saveData()
                                clear()
                              }}>Create</Button>
        </VStack>


        <VStack space={9} alignItems="center" mt="-1%">
        <Text  bold>Or create account using social media </Text>

        <HStack space={1} justifyContent="center" >

        <Link href="https://nativebase.io">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/githubIcon.png') }  >  
        </Avatar>
        </Link>

        <Link href="https://apis.google.com/js/platform.js">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/GoogleIcon.png') }  >  
        </Avatar>
        </Link>


        <Link href="https://nativebase.io">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/FacebookIcon.png') }  >  
        </Avatar>
        </Link>

        <Link href="https://apis.google.com/js/platform.js">
        <Avatar bg="white" size="sm"  Thumbnail source= {require('../images/yIcon.png') }  >  
        </Avatar>
        </Link>


      
      </HStack>
        </VStack>


        </Box>

        
 
    </NativeBaseProvider>
    
  )
}

