import { View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native'
const Footer = () => {
  const route=useRoute();
  return (
    <View style={styles.container}>
      {/* home */}
      <TouchableOpacity style={styles.containermanu} onPress={()=>alert('home screen')}>
      <Icon style={[styles.icon,route.name==='Home'&&styles.active]} name='home'/>
      <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
{/*  Notifications*/}
<TouchableOpacity style={styles.containermanu} onPress={()=>alert('Notification screen')}>
      <Icon style={[styles.icon,route.name==='notification'&&styles.active]} name='notifications'/>
      <Text style={styles.text}>Notification</Text>
      </TouchableOpacity>
      {/*  User Account*/}
      <TouchableOpacity style={styles.containermanu} onPress={()=>alert('User screen')}>
      <Icon style={[styles.icon,route.name==='User'&&styles.active]} name='person'/>
      <Text style={styles.text}>Accounts</Text>
      </TouchableOpacity>
      {/* Cart */}
      <TouchableOpacity style={styles.containermanu} onPress={()=>alert('Add to cart screen')}>
      <Icon style={[styles.icon,route.name==='cart'&&styles.active]} name='sell'/>
      <Text style={styles.text}>Cart</Text>
      </TouchableOpacity>
      {/* Logout */}
      <TouchableOpacity style={styles.containermanu} onPress={()=>alert('Loyout Screen')}>
      <Icon style={[styles.icon,route.name==='Logout']} name='logout'/>
      <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Footer
const styles=StyleSheet.create({
  container:{
flexDirection:'row',
justifyContent:"space-between",
paddingHorizontal:10,
  },
  containermanu:{
    alignItems:'center',
    justifyContent:'center',
  },
  icon:{
    fontSize:25,
    color:'black'
  },
  text:{
    fontSize:10,
  },
  active:{
   color:'blue'
  },
})