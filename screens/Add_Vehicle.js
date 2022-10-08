// import { View } from 'react-native'
import * as React from 'react';
import {NativeBaseProvider ,Text,VStack,Input,Button,Flex,Link,Box,TextInput,Center,HStack,Image}from 'native-base'

export default function Add_Vehicle({navigation}) {
  return (
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="5xl" color="indigo.600">Add New Post </Text>
        
        </VStack>

        <VStack space={7} alignItems="center" mt="10%">
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Name" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Number" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Year" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Feul Type" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Price" />
        <Input size="lg" w="75%"
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Description"
                          
                            // value={description}
                            // onChangeText={(e)=>{
                            //   setDescription(e)
                            // }}
                       />



        <Button w="50%" mx="auto" fontSize="lg" alignItems="center" h="8%" variant="solid" size="xsm" onPress={() => {navigation.navigate('Home')}}>Create</Button>
        
        </VStack>



    </NativeBaseProvider>
  )
}

