import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const SettingScreen = () => {

  const navigation = useNavigation();


  return (
    <View style={{ backgroundColor: '#0C0F14', flex: 1, padding: 16 }}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../icons/back.png')} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', width: '80%', textAlign: 'center' }}>Settings</Text>
      </View>
      <ScrollView>

        <View style={styles.topSecond}>
          <Image style={{ width: 22, height: 22 }} source={require('../icons/history.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>History</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/person.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>Personal Details</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/location.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>Address</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/pay.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>Payment Method</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/about.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>About</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/help.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>Help</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>

        <View style={styles.topSecond}>
          <Image style={{ width: 26, height: 26 }} source={require('../icons/log_out.png')} />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', width: '78%', textAlign: 'left', marginLeft: 12 }}>Log out</Text>
            <Image source={require('../icons/right_arrow.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    marginBottom: 26
  },
  topSecond: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  }
})