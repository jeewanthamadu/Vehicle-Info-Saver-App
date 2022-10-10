import { Alert,StyleSheet,View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react'
import {NativeBaseProvider ,Text,VStack,Input,Button,Flex,Link,Box,TextInput,Center,Fab,HStack,Image}from 'native-base'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function Add_Vehicle({navigation}) {

    const [name,setName]=useState('');
    const [vehicleRegNumber,setvehicleRegNumber]=useState('');
    const [location,setLocation]=useState('');
    const [description,setDescription]=useState('');
    const [img,setImg]=useState('');


    const saveData=()=>{
        console.log(name , location , description,vehicleRegNumber,img)

        fetch('http://192.168.1.100:4000/cars',{

          method:'POST', 

            body:JSON.stringify({
                vehicleBrandName:name,
                location:location,
                description:description,
                vehicleRegNumber:vehicleRegNumber,
                img:img
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                Alert.alert("Vehicle Saved Successfully !")
                
            })
            .catch((err)=>{Alert.alert("Error occured !")
            })
    }

    const clear=()=>{
        setName('')
        setvehicleRegNumber('')
        setLocation('')
        setDescription('')
        setImg('')
    }


  return (
    <View style={styles.container}>
    <NativeBaseProvider>

        <VStack space={4} alignItems="center" mt="5%">
        <Text bold fontSize="5xl" underline color="indigo.600">Add New Vehicle </Text>
        
        </VStack>

        <VStack space={1} alignItems="center" mt="5%">

        <Box mt="2%" height="25%" width="60%" alignSelf="center" borderWidth="2" borderColor="black" borderRadius="20" _text={{
      fontSize: "md",
      fontWeight: "medium",
      color: "warmGray.50",
      letterSpacing: "lg"
      
    }}>


<Fab renderInPortal={false} shadow={2} size="md" icon={<Ionicons color="white" name={"add-sharp"} size={20}/>} /> 

    </Box>
 

        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Name" 
        value={name}
                onChangeText={(e)=>{
                  setName(e)
                }} />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Vehicle Number"
         value={vehicleRegNumber}
                onChangeText={(e)=>{
                    setvehicleRegNumber(e)
                }} />
        <Input  size="lg" w="75%" mx="auto" variant="outline" placeholder="Location" 
        value={location}
        onChangeText={(e)=>{
            setLocation(e)
        }} />
        <Input size="lg" w="75%"
                            multiline={true}
                            numberOfLines={3}
                            placeholder="Description"

                            value={description}
                onChangeText={(e)=>{
                    setDescription(e)
                }}
                       />



        <Button w="50%" mx="auto" fontSize="lg" alignItems="center" h="8%" variant="solid" size="xsm"   onPress={(e)=>{
                                saveData()
                                clear()
                              }}>Create</Button>
      
        </VStack>



    </NativeBaseProvider>
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
      flex: 20,
    },
    img:{
        width:'100%',
        height:'100%'
    }
  })