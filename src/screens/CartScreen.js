import { StyleSheet, Text, View, StatusBar, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderBar from '../components/HeaderBar'
import LinearGradient from 'react-native-linear-gradient'
import ItemCart from '../components/ItemCart'




const CartData = [
  {
    id: 1,
    name: 'Americano',
    type: 'Coffee',
    ingredients: 'Milk',
    ingredients_special: 'With Steam Milk',
    image: require('../images/chunhat/cappuccino_pic_2_portrait.png'),
    average_rating: 4.7,
    ratings_count: '6,879',
    roasted: 'Medium Roasted',
    prices: [
      {size: 'S', price: '1.38'},
      {size: 'M', price: '3.15'},
      {size: 'L', price: '4.29'},
    ],
    description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.'
  },
  {
    id: 2,
    name: 'Americano',
    type: 'Coffee',
    ingredients: 'Milk',
    ingredients_special: 'With Steam Milk',
    image: require('../images/chunhat/cappuccino_pic_2_portrait.png'),
    average_rating: 4.7,
    ratings_count: '6,879',
    roasted: 'Medium Roasted',
    prices: [
      {size: 'S', price: '1.38'},
      {size: 'M', price: '3.15'},
      {size: 'L', price: '4.29'},
    ],
    description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.'
  },
  {
    id: 3,
    name: 'Americano',
    type: 'Coffee',
    ingredients: 'Milk',
    ingredients_special: 'With Steam Milk',
    image: require('../images/chunhat/cappuccino_pic_2_portrait.png'),
    average_rating: 4.7,
    ratings_count: '6,879',
    roasted: 'Medium Roasted',
    prices: [
      {size: 'S', price: '1.38'},
      {size: 'M', price: '3.15'},
      {size: 'L', price: '4.29'},
    ],
    description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.'
  },
]

const renderCart = ({item}) => {
  return <ItemCart item={item}/>
}


const CartScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor='#0C0F14' barStyle='light-content' />
      <HeaderBar />

      <SafeAreaView>
        <ScrollView>
          <FlatList
            style={{ marginBottom: 80 }}
            data={CartData}
            renderItem={renderCart}
            keyExtractor={item => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false} />
        </ScrollView>
      </SafeAreaView>

      <View style={styles.containerPay}>
        <View style={styles.leftContainer}>
          <Text style={styles.totalText}>Total Price</Text>
          <Text style={styles.totalPrice}><Text style={{color: '#D17842'}}>$ </Text>10.40</Text>
        </View>
        <TouchableOpacity style={styles.rightContainer} >
          <Text style={styles.payText}>Pay</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingHorizontal: 16,
    marginBottom: 80
  },
  containerPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    padding: 4,
    bottom: 0,
    right: 0,
    left: 0
  },
  leftContainer: {
    marginLeft: 12
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#AEAEAE'
  },
  totalPrice: {
    color: '#fff',
    fontSize: 20,
    marginTop: 4,
    fontWeight: 'bold'
  },
  rightContainer: {
    backgroundColor: '#D17842',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 200,
  },
  payText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'

  },
})