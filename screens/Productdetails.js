import { View, Text,Image,StyleSheet,Dimensions, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import {data} from '../../client/Data/BannerData.js'
const Productdetails = ({route}) => {
  // id store in params
  const {params}=route
const [product, setproduct] = useState({})
useEffect(()=>{
const getproduct=data.find((p)=>{
  return p?._id===params?._id;
})
setproduct(getproduct);
},[params._id])
  return (
    <View>
        <Image style={style.image} source={{uri:product?.imgUrl}}></Image>
        <View style={style.container}>
        <Text style={style.title}>{product.title}</Text>
        <Text style={style.price}>Price:{product.price}</Text> 
        <Text style={style.desc} >{product.body}</Text>         
        </View>
        {/* add to cart */}
        <View style={style.cart}>
          <TouchableOpacity style={style.cartbtn}>
            <Text style={style.btntext}>ADD TO CART</Text>
          </TouchableOpacity>
          <View><Text>Hi</Text></View>
        </View>
    </View>
  )
}
export default Productdetails
const { width } = Dimensions.get('window'); // Get screen width
const style=StyleSheet.create({
  image:{
    width: width-20, 
    height:400,
    borderRadius:10,
    marginHorizontal:13,
  },
  container:{
marginVertical:15,
marginHorizontal:15,
  },
  title:{
fontSize:15,
textAlign:'left'
  },
  price:{
fontWeight:'bold',
  },
  desc:{
fontSize:12,
textTransform:'capitalize',
marginVertical:10,
textAlign:'justify'
  },
  cart:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    marginHorizontal:20
  },
  cartbtn:{
    width:180,
    backgroundColor:'black',
    borderRadius:10,
height:40,
justifyContent:'center'
  },
  btntext:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:15
  }
})