import { View} from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { data } from '../../Data/BannerData.js'
const Product = () => {
  return (
    <View>
        {
data.map((data)=>(<ProductCard key={data._id} data={data}></ProductCard>))
        }
    </View>
  )
}
export default Product