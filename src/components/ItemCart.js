import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const ItemCart = ({ item }) => {
    return (
        <LinearGradient style={styles.gradient} colors={['#252A32', '#262B33', '#000000']}>
            <View style={styles.containerItem}>
                <Image style={styles.image} source={require('../images/vuong/cappuccino_pic_2_square.png')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ color: '#fff', fontSize: 16 }}>
                    {item.name}
                </Text>
                <Text style={{ color: '#AEAEAE', fontSize: 12 }}>
                    {item.ingredients_special}
                </Text>

                <View style={{ marginTop: 4, flexDirection: 'row' }}>
                    <View style={{ borderRadius: 8, backgroundColor: '#141921', padding: 10, width: 50 }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                            {item.prices[0].size}
                        </Text>
                    </View>

                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, padding: 10, fontWeight: 'bold' }}>
                        {item.prices[0].price}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-around', width: 160 }}>
                    <View style={styles.btn}>
                        <Text style={styles.textBtn}>-</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                        width: 50,
                        height: 30,
                        borderWidth: 1,
                        borderColor: '#D17842',
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 16,
                            textAlign: 'center',
                        }}>1</Text>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.textBtn}>+</Text>
                    </View>
                </View>

            </View>

        </LinearGradient>
    )
}

export default ItemCart

const styles = StyleSheet.create({
    gradient: {
        padding: 12,
        flexDirection: 'row',
        borderRadius: 8
    },
    containerItem: {
    },
    image: {
        width: 108,
        height: 108,
        borderRadius: 10,
        marginTop: 8
    },
    textContainer: {
        marginLeft: 24
    },
    priceText: {
        color: '#fff'
    },
    textBtn: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#D17842',
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center'
    }
})