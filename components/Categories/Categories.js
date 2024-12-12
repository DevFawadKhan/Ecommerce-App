import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { items } from '../../Data/Dummydata.js'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Categories() {
  const navigate=useNavigation();
  return (
    <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
  <View style={style.container}>
    {items.map((data)=>(
     <View key={data._id} >
      <TouchableOpacity style={style.catcontainer} onPress={()=>navigate.navigate(data.path)}>
      <Icon name={data.icon} style={style.icon} />
      <Text style={style.catTitle}>{data.name}</Text>
      </TouchableOpacity>
     </View>
  ))} </View>
    </ScrollView>

  );
}
const style=StyleSheet.create({
  container:{
    backgroundColor:"white",
    flexDirection:'row',
    padding:5
  },
  catcontainer:{
    padding:12
  },
  icon:{
    fontSize:30,
    verticalAlign:"top",
    color:'red'
  },
  catTitle:{
 fontSize:10,
 fontWeight:'bold'
  }
})