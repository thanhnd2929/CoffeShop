import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { ScreenContainer } from 'react-native-screens'
import HeaderBar from '../components/HeaderBar'
import LinearGradient from 'react-native-linear-gradient'
import ItemDetail from '../components/ItemDetail'


const FavoriteData = [
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
    description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.'
  },
]

const renderFavorite = ({ item }) => {
  return (<ItemDetail item={item}/>)
}


const FavoritesScreen = () => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor='#0C0F14' barStyle='light-content' />
      <HeaderBar />

      <SafeAreaView>
        <ScrollView>
          <FlatList
            style={{ marginBottom: 80 }}
            data={FavoriteData}
            renderItem={renderFavorite}
            keyExtractor={item => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false} />
        </ScrollView>
      </SafeAreaView>

    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingHorizontal: 16,
    marginBottom: 80
  },
})