import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item}) => {
  if (!item || !item.imgUrl) {
    console.log('Item is undefined or imgUrl is missing');
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item?.imgUrl || 'https://via.placeholder.com/300' }}
        style={styles.image}
      />
      <Text style={styles.header}>{item?.title || 'No Title'}</Text>
      <Text style={styles.body}>{item?.body || 'No Description'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
