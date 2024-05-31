import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const ItemDetail = ({item}) => {
    return (
        <LinearGradient style={styles.gradient} colors={['#252A32', '#262B33', '#000000']}>
            <View style={styles.container}>
                <View style={styles.heartContainer}>
                    <Image source={require('../icons/heart.png')} />
                </View>

                <Image style={styles.image} source={item.image} />

                <View style={styles.overlay}>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemSpecial}>{item.ingredients_special}</Text>

                        <View style={styles.coffeeContainer}>
                            <Image source={require('../icons/cafe.png')} />
                            <Text style={styles.iconText}>Coffee</Text>
                        </View>

                        <View style={styles.milkContainer}>
                            <Image source={require('../icons/water.png')} />
                            <Text style={styles.iconText}>Milk</Text>
                        </View>
                    </View>

                    <View style={styles.rateContainer}>
                        <View style={styles.rating}>
                            <Image source={require('../icons/star.png')} />
                            <Text style={styles.ratingText}>
                                {item.average_rating} <Text style={styles.ratingCount}>({item.ratings_count})</Text>
                            </Text>
                        </View>

                        <View style={styles.roastedContainer}>
                            <Text style={styles.roastedText} numberOfLines={9}>{item.roasted}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText} numberOfLines={3}>{item.description}</Text>
            </View>
        </LinearGradient>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    gradient: {
        marginVertical: 4
      },
      container: {
        position: 'relative',
      },
      heartContainer: {
        position: 'absolute',
        top: 10,
        right: 50,
        width: 50,
        height: 50,
        backgroundColor: '#0C0F14',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      },
      image: {
        height: 457
      },
      overlay: {
        position: 'absolute',
        bottom: 0,
        width: 360,
        height: 140,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10
      },
      textContainer: {
        marginLeft: 10
      },
      itemName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 12
      },
      itemSpecial: {
        color: '#fff',
        fontSize: 13,
        marginTop: 6
      },
      coffeeContainer: {
        position: 'absolute',
        top: 10,
        right: 90,
        width: 50,
        height: 50,
        backgroundColor: '#0C0F14',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      },
      milkContainer: {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#0C0F14',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      },
      iconText: {
        color: '#fff',
        fontSize: 10
      },
      rateContainer: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      rating: {
        flexDirection: 'row'
      },
      ratingText: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 2
      },
      ratingCount: {
        fontWeight: '300'
      },
      roastedContainer: {
        backgroundColor: '#0C0F14',
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 10
      },
      roastedText: {
        color: '#fff'
      },
      descriptionContainer: {
        width: 360,
        padding: 16
      },
      descriptionTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
      },
      descriptionText: {
        color: '#fff',
        fontSize: 15
      }
})