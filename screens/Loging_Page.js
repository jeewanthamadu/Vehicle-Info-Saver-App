// import { View } from 'react-native'
import * as React from 'react';

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Image}from 'native-base'

export default function Loging_Page({navigation}) {
  return (
    <NativeBaseProvider>

                    

        <VStack space={2} alignItems="center" mt="1%">
        <Text bold fontSize="7xl" underline color="indigo.600">Welcome  !</Text>
        </VStack>

            <Center>
            <Image size="350px"
            Thumbnail source= {require('../images/loginwallpaper.png')} alt="car logo" />
            </Center>

        <VStack space={3} alignItems="center" >
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="UserName" />
        <Input type="password" size="lg" w="75%" mx="auto" variant="underlined" placeholder="Password" /> 
        <Button w="50%" mx="auto" fontSize="md" alignItems="center" h="13%" variant="solid" size="xsm" onPress={()=>{navigation.navigate('Home')}}>Login</Button>
       
        

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
        
    </NativeBaseProvider>
  )
}

