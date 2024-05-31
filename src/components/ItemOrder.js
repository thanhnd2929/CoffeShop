import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const ItemOrder = ({ item }) => {

    return (

        <View style={styles.main}>
            <View style={styles.date}>
                <View>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Order Date</Text>
                    <Text style={{ fontSize: 13, color: '#fff' }}>20th March 16:23 </Text>
                </View>

                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Total Amount</Text>
                    <Text style={{ fontSize: 13, color: '#fff' }}>$ 74.40</Text>
                </View>
            </View>

            <LinearGradient style={{ padding: 16, borderRadius: 20, flex: 1 }} colors={['#262B33', '#262B33']}>
                <View style={styles.textContainer}>
                    <Image style={{ width: 57, height: 57, borderRadius: 16 }} source={item.image} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: '#AEAEAE', fontSize: 12 }}>
                            {item.ingredients_special}
                        </Text>
                    </View>
                    <Text style={{ fontSize: 16, color: '#D17842', fontWeight: 'bold' }}>$ <Text style={{ color: '#fff' }}>37.20</Text></Text>
                </View>

                <View style={styles.priceContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ backgroundColor: '#21262E', padding: 8, width: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>{item.prices[0].size}</Text>
                        </View>
                        <View style={{ backgroundColor: '#21262E', padding: 8, width: 80, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10, marginLeft: 2 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}><Text style={{color: '#D17842'}}>$ </Text>{item.prices[0].price}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, color: '#D17842', fontWeight: 'bold', }}>X <Text style={{ color: '#fff' }}>2</Text></Text>
                    <Text style={{ fontSize: 18, color: '#D17842', fontWeight: 'bold' }}> 8.40</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

export default ItemOrder

const styles = StyleSheet.create({
    main: {
        marginBottom: 16
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    priceContainer: {
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})