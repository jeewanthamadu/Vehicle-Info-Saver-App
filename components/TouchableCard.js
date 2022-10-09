import { View, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, VStack, HStack, Heading, Text, Container, Center } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TouchableCard({nav,data}) {
  return (
    <TouchableOpacity
      style={style.card}
      activeOpacity={0.85}
      onPress={() => {
            nav.navigate('Vehicle Information',{obj:data,readOnlyProp:true});
      }}>
      <HStack style={{padding: 10}} space={2} alignItems="center">
        <View style={{width: '35%'}}>
          <Image
            style={style.logo}
            source={require('../images/GoogleIcon.png')}
          />
        </View>
      
        <View style={{width: '62%'}}>
          <Heading size="sm">{data.vehicleBrandName}</Heading>
          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
          <Ionicons name={"location-outline"} size={18} color={"red"} /> {data.location}
          </Text>
        </View>
      </HStack>
     
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    container:{
        paddingTop: 20, 
        paddingHorizontal: 20,
       
    },

    card:{
       
        marginBottom:'5%',
        padding:5,
        backgroundColor:"white",
        borderRadius: 10,
        
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        elevation: 5,
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode:"contain",
      
      },
})