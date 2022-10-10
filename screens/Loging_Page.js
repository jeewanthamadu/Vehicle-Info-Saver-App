import { Alert,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Image}from 'native-base'

export default function Loging_Page({navigation}) {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const LoginOnAction=()=>{
    console.log(email , password )

  fetch('http://192.168.1.100:4000/users/search',{
            method:'POST',
            body:JSON.stringify({
                email:email,
                password:password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then(async(json) => {
            let res=await json
            if(res===true){
                console.log("success")
                navigation.navigate('Home')
                setEmail('')
                setPassword('')
            }
            else if(res===false){
                Alert.alert('Please check email & password');
            }
        })
        .catch((err)=>{Alert.alert("Error occured !")})
    }



  return (



    <NativeBaseProvider>

<ScrollView>     

        <VStack space={1} alignItems="center" mt="0%">
        <Text bold fontSize="7xl" underline color="indigo.600">Welcome  !</Text>
        </VStack>

            <Center>
            <Image size="350px"
            Thumbnail source= {require('../images/loginwallpaper.png')} alt="car logo" />
            </Center>

        <VStack space={3} alignItems="center" >
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="E-mail" value={email}
                        onChangeText={(e)=>{
                            setEmail(e)
                        }} />
        <Input type="password" size="lg" w="75%" mx="auto" variant="underlined" placeholder="Password"    value={password}
                        onChangeText={(e)=>{
                            setPassword(e)
                        }}/> 
        <Button w="50%" mx="auto" fontSize="md" alignItems="center" h="13%" variant="solid" size="xsm" onPress={LoginOnAction} >Login</Button>
       
        
        {/* onPress={()=>{navigation.navigate('Home')}} */}

        <HStack space={2} justifyContent="center">
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

        <HStack space={3} justifyContent="center">
        <Text  bold>You Don't Have An Account ? </Text>
        <Link onPress={() => {navigation.navigate('Register Page')}}>Register Please</Link>  
        </HStack>

        {/* isExternal _text={{color: "blue.600"} */}
        
        </VStack>

        <VStack space={1} alignItems="center" mt="1%">
        <Text fontSize="xs"  bold>Designed By : Jeewantha Madushan </Text>
        </VStack>

{/* 
        <Text left="77px" bold>You Don't Have An Account ? </Text>
        <Link left="230px" bottom="18px" href="https://github.com/jeewanthamadu" isExternal _text={{
        color: "blue.600"}}>Register Please</Link>  
        <Text left="115px" fontSize="xs"  bold>Designed By : Jeewantha Madushan </Text>
         */}
        
        </ScrollView>
    </NativeBaseProvider>
  )
}

