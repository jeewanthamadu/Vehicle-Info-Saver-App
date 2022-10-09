
import * as React from 'react';

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Box,Avatar,Center,HStack,Image}from 'native-base'

export default function Register_Page({navigation}) {
  return (
    <NativeBaseProvider>

     <Box mt="10%" left="10" maxW="80" maxH="100%" rounded="lg" overflow="hidden" borderColor="coolGray.300" borderWidth="1" _dark={{
        borderColor: "coolGray.700", backgroundColor: "gray.700" }}> 

        <VStack space={6} alignItems="center" mt="10%">
        <Text bold fontSize="5xl" underline color="indigo.600">Create Account </Text>
        </VStack>

        <VStack space={7} alignItems="center" mt="15%">
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="User Name" />
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="E-mail" />
        <Input  size="lg" w="75%" mx="auto" variant="underlined" placeholder="NIC" />
        <Input type="password" size="lg" w="75%" mx="auto" variant="underlined" placeholder="Create Password" /> 
        <Button w="50%" mt="7%" mx="auto" fontSize="lg" alignItems="center" h="10%" variant="solid" size="xsm" onPress={() => {navigation.navigate('Loging Page')}}>Create</Button>
        </VStack>


        <VStack space={9} alignItems="center" mt="5%">
        <Text  bold>Or create account using social media </Text>

        <HStack space={3} justifyContent="center" >

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

