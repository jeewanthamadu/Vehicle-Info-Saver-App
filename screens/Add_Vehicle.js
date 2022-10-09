// import { View } from 'react-native'

import React, { useEffect, useState } from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Flex,Link,Box,TextInput,Center,HStack,Image}from 'native-base'

export default function Add_Vehicle({navigation}) {

    const [name,setName]=useState('');
    const [VehicleNumber,setVehicleNumber]=useState('');
    const [location,setLocation]=useState('');
    const [description,setDescription]=useState('');
    const [img,setImg]=useState('');

  return (
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="5xl" color="indigo.600">Add New Post </Text>
        
        </VStack>

        <VStack space={5} alignItems="center" mt="5%">

        <Box mt="5%" height="25%" width="40%" alignSelf="center" borderWidth="2" borderColor="indigo.600" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }}></Box>

        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Name" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Number" />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Location" />
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

