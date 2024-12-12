import { View,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react'
const Header = () => {
  const [search, setsearch] = useState("")
   const HandleSearch=()=>{
     console.log(search)
     setsearch("")
   }
  return (
    <View style={style.container}>
      <View style={style.Searchbar}>
      <TextInput style={style.textinput} value={search} onChangeText={setsearch} placeholder='Search'/>
     <TouchableOpacity style={style.searchbtn} onPress={HandleSearch}>
      <FontAwesome name='search'  style={{color:'blue',fontSize:20}} />
     </TouchableOpacity>
      </View>
    </View>
  )
}
export default Header
const style=StyleSheet.create({
  container:{
height:90,
// marginTop:10,
backgroundColor:"lightgray"
  },
  Searchbar:{
display:'flex',
flex:1,
flexDirection:'row',
alignItems:'center',
paddingHorizontal:15,
  },
  textinput:{
   borderWidth:0.3,
   width:'100%',
   position:"absolute",
   left:15,
   paddingLeft:20,
   borderRadius:50,
   backgroundColor:'white',
   color:"black",
  },
  searchbtn:{
    position:'absolute',
    left:'95%'
  },
})