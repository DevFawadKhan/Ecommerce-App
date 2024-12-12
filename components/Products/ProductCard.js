import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'
const ProductCard = ({data}) => {
    const navigate=useNavigation();
    const handlebutton=(id)=>{
       navigate.navigate("productdetail",{_id:id});
       console.log(id);
    }
  return (
    // card
    <View style={style.card}>
    <View >
    <Image source={{uri:data.imgUrl}} style={style.image}></Image>
      <Text style={style.cardtitle}>{data.title}</Text>
      <Text style={style.carddec}>{data.body.substring(0,20)}...<TouchableOpacity style={{flexDirection:"row"}} ><Text style={style.carddec}>more</Text></TouchableOpacity></Text>
    </View>
    {/* button*/}
    <View style={style.buttoncon}>
  <TouchableOpacity onPress={()=>handlebutton(data._id)} style={style.btn}><Text style={style.btntext} >DETAILS</Text></TouchableOpacity>
  <TouchableOpacity style={style.btncard}><Text style={style.btntext}>ADD TO CARD</Text></TouchableOpacity>
    </View>  
    </View>

  )
}
export default ProductCard
const style=StyleSheet.create({
    card:{ 
        // borderColor:'lightgery',
        // borderWidth:1,
        marginVertical:10,
        marginHorizontal:10,
        width:'50%',
        backgroundColor:'white',
        padding:10
    },
    image:{
        height:200,
        width:'100%',
        padding:0,
    },
    cardtitle:{
        fontSize:12,
        fontWeight:'bold',
        marginBottom:5,
    },
    carddec:{
    fontSize:10,
    textAlign:'left'
    },
    buttoncon:{
        flexDirection:'row',
        marginTop:5,
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'black', 
        borderRadius:5,
        width:75,
        height:20,
    },
    btncard:{
        backgroundColor:'orange', 
        borderRadius:5,
        width:75,
        height:20,
    },
    btntext:{
        color:'white',
        textAlign:'center',
        fontSize:10,
        fontWeight:'bold',
        paddingTop:3
    }
})