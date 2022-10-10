import { View,StyleSheet } from 'react-native'
import React from 'react'

import {NativeBaseProvider ,Text,VStack,Input,Button,Link,Divider,Image ,Fab,Box}from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function VehicleInfo({navigation}) {

  
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
      <Fab onPress={""} renderInPortal={false} shadow={2} bottom="90px" size="sm" icon={<Ionicons color="white"  name={"add-sharp"} size={18}/>} />
      <Fab onPress={""} renderInPortal={false} shadow={2} size="sm" icon={<Ionicons color="red" name={"trash-outline"} size={18}/>} /> 

     <VStack space={4} alignItems="center" mt="5%">
     <Text bold fontSize="5xl" underline color="indigo.600">Vehicle Information</Text>

     <Box mt="5%" height="25%" width="40%" alignSelf="center" borderWidth="2" borderColor="indigo.400" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
    }}></Box>
    
        <Text top="10px" left="-107"  bold fontSize="sm" color="black">Vehicle Brand Name</Text>
        <Input  bottom="2" w="80%" variant="underlined" placeholder="Vehicle Brand Name" />
        <Text top="0px" left="-107" bold fontSize="sm" color="black">Registation Number</Text>
        <Input  bottom="5" w="80%" variant="underlined" placeholder="Enter Registation Number" />
        <Text top="-23px" left="-117" bold fontSize="sm" color="black">Other Infomation</Text>
        <Input bottom="79" w="80%" h="20%" variant="underlined" placeholder="Enter Other Infomation" />
        

     </VStack>
      </NativeBaseProvider> 
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
      flex: 1,
    }
  })