import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import LinearGradient from 'react-native-linear-gradient'
import HeaderBar from '../components/HeaderBar'




const HomeScreen = () => {


  const tabBarHeight = useBottomTabBarHeight();

  const [selectedId, setSelectedId] = useState(null)


  const data = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Cappuccino' },
    { id: 3, title: 'Espresso' },
    { id: 4, title: 'Americano' },
    { id: 5, title: 'Macchiato' },
  ]

  const renderItem = ({ item }) => {
    const textColor = item.id === selectedId ? '#FFA500' : '#52555A';
    return (
      <View style={{ marginVertical: 12 }}>
        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
          <Text style={{ color: textColor, fontSize: 16, fontWeight: 'bold', marginLeft: 12 }}>{item.title}</Text>
        </TouchableOpacity>
        {item.id === selectedId && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>
            <Image style={{ position: 'absolute', top: 10 }} source={require('../icons/dot.png')} />
          </View>
        )}
      </View>
    );
  }

  // data content
  const coffeeData = [
    { id: 1, name: 'Cappuccino', ingredient: 'With Steamed Milk', price: 4.20, image: require('../images/vuong/cappuccino_pic_1_square.png') },
    { id: 2, name: 'Cappuccino', ingredient: 'With Foam', price: 4.20, image: require('../images/vuong/cappuccino_pic_2_square.png') },
    { id: 3, name: 'Cappuccino', ingredient: 'With Steamed Milk', price: 4.20, image: require('../images/vuong/cappuccino_pic_3_square.png') },
  ]

  const beanData = [
    { id: 1, name: 'Robusta Beans', ingredient: 'With Steamed Milk', price: 4.20, image: require('../images/robusta_coffee_beans/robusta_coffee_beans_square.png') },
    { id: 2, name: 'Arabica Beans', ingredient: 'With Foam', price: 4.20, image: require('../images/robusta_coffee_beans/robusta_coffee_beans_square.png') },
    { id: 3, name: 'Excelsa Beans', ingredient: 'With Steamed Milk', price: 4.20, image: require('../images/robusta_coffee_beans/robusta_coffee_beans_square.png') },
  ]



  const renderCoffee = ({ item }) => {
    return (
      <View >
        <LinearGradient colors={['#252A32', '#262B33', '#000000']} style={{ padding: 16, marginHorizontal: 8, borderRadius: 23, flexDirection: 'column' }}>
          <Image style={{ width: 130, height: 130, borderRadius: 16 }} source={item.image} />
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', marginTop: 12 }}>{item.name}</Text>
          <Text style={{ color: '#fff', fontSize: 13, marginTop: 6 }}>{item.ingredient}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 }}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}><Text style={{ color: '#D17842', fontWeight: 'bold' }}>$ </Text>{item.price.toFixed(2)}</Text>
            <Image source={require('../icons/btn_cf.png')} />
          </View>
        </LinearGradient>
      </View>
    )
  }

  const renderBean = ({ item }) => {
    return (
      <View >
        <LinearGradient colors={['#252A32', '#262B33', '#000000']} style={{ padding: 16, marginHorizontal: 8, borderRadius: 23, flexDirection: 'column' }}>
          <Image style={{ width: 130, height: 130, borderRadius: 16 }} source={item.image} />
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', marginTop: 12 }}>{item.name}</Text>
          <Text style={{ color: '#fff', fontSize: 13, marginTop: 6 }}>{item.ingredient}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 }}>
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}><Text style={{ color: '#D17842', fontWeight: 'bold' }}>$ </Text>{item.price.toFixed(2)}</Text>
            <Image source={require('../icons/btn_cf.png')} />
          </View>
        </LinearGradient>
      </View>
    )
  }


  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor='#0C0F14' barStyle='light-content' />


      <SafeAreaView>
        <ScrollView>
          <HeaderBar/>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>Find the best</Text>
            <Text style={{ color: '#fff', fontSize: 28, fontWeight: 'bold' }}>coffee for you</Text>
          </View>

          <View style={styles.input}>
            <Image style={{ marginHorizontal: 20 }} source={require('../icons/search.png')} />
            <TextInput placeholder='Find Your Coffee ...' placeholderTextColor="#828282" />
          </View>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ height: 70 }} />

          {/* capuchino */}
          <FlatList
            data={coffeeData}
            renderItem={renderCoffee}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false} />

          <Text style={{ fontSize: 16, color: '#fff', marginVertical: 12, fontWeight: '500' }}>Coffee beans</Text>

          {/* bean */}
          <FlatList
            data={beanData}
            renderItem={renderBean}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false} />

        </ScrollView>
      </SafeAreaView>

    </View>
  )
}


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: '#0C0F14',
    paddingHorizontal: 16,
    marginBottom: 80
  },
  input: {
    height: 48,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#828282',
    backgroundColor: '#141921',
    color: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
})

export default HomeScreen
