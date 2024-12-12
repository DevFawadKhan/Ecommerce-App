
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { View,StatusBar,StyleSheet} from 'react-native'
const Layout = ({children}) => {
  return (
<>
{/* Status bar say head ma black line ajti ha. */}
<StatusBar backgroundColor="#ff6347" barStyle="light-content"></StatusBar> 
<Header/>
<View>
{children}
</View>
{/* footer */}
<View style={styles.Footer}>
<Footer />
</View>
</>
  )
}
export default Layout
const styles=StyleSheet.create({
  Footer:{
    flex:1,
    justifyContent:'flex-end',
    borderColor:'lightgray',
    borderTopWidth:1,
    position:'absolute',
    bottom:0,
    padding:10,
    zIndex:100,
    width:'100%'
  }
})