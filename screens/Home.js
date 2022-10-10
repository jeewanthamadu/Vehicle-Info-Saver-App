import { View, Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import {React,useEffect,useState}  from  'react'
import { NativeBaseProvider, Center, Fab,Image } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchableCard from '../components/TouchableCard';

export default function Home({navigation}) {

    const [posts,setPosts] =useState([]);

    useEffect(() => {
        fetch('http://192.168.1.100:4000/cars')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

  return (
    <NativeBaseProvider>
    <Fab onPress={()=>{navigation.navigate("Add New Vehicle")}} renderInPortal={false} shadow={2} size="sm" icon={<Ionicons color="white" name={"add-sharp"} size={18}/>} />

    <Center>
    <View style={styles.container}>
       <FlatList
                data={posts}
                renderItem={({ item }) =>

                <TouchableCard data={item} nav={navigation}/>

                }
            />
      
    </View>
    </Center>

    </NativeBaseProvider>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:20
    }

})