import { View } from 'react-native'
import React from 'react'

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Box,Avatar,Center,HStack,Image}from 'native-base'

export default function Add_Vehicle() {
  return (
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="5xl" color="indigo.600">Save Post </Text>
        
        </VStack>

        <VStack space={7} alignItems="center" mt="10%">
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Name" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Number" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Year" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Feul Type" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Price" />
        
        <Button w="50%" mx="auto" fontSize="lg" alignItems="center" h="8%" variant="solid" size="xsm" onPress={() => console.log("hello world")}>Create</Button>
        </VStack>



    </NativeBaseProvider>
  )
}

