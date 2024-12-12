import { View, Text} from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout.js'
import Categories from '../components/Categories/Categories.js'
import CarouselCards from '../components/Carousel/CarouselCard.js'
import Product from '../components/Products/Product.js'
const Home = () => {
  return (
    <>
    <Layout>
    <Categories></Categories>
    <CarouselCards></CarouselCards>
    <Product></Product>
    <View>
    <Text style={{color:'red'}} >Home page</Text>
    </View>
    </Layout>
    
    </>

  )
}
export default Home
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//   },
//   text:{
//     color:'red'
//   },
//   Button:{
//     width:20,
//     backgroundColor:'red',
//     color:'black'
//   }
// });