import { View } from 'react-native'
import React from 'react'

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,HStack,Avatar,Center,Divider,Image}from 'native-base'

export default function Loging_Page() {
  return (
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="8xl" color="indigo.600">Welcome </Text>
        </VStack>

            <Center>
            <Image size="350px"
            Thumbnail source= {require('../images/loginwallpaper.png')} alt="car logo" />
            </Center>

        <VStack space={4} alignItems="center" >
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="UserName" />
        <Input type="password" size="lg" w="75%" mx="auto" variant="underlined" placeholder="Password" /> 
        <Button w="50%" mx="auto" fontSize="md" alignItems="center" h="13%" variant="solid" size="xsm" onPress={() => console.log("hello world")}>Login</Button>
        
        <HStack space={3} justifyContent="center">
        <Text  bold>You Don't Have An Account ? </Text>
        <Link href="https://github.com/jeewanthamadu" isExternal _text={{color: "blue.600"}}>Register Please</Link>  
        </HStack>
        
        </VStack>

        <VStack space={3} alignItems="center" mt="10%">
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

