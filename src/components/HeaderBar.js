import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image source={require('../icons/menu.png')} />
            </TouchableOpacity>
            <Image source={require('../images/avatar.png')} />
        </View>
    );
}

export default HeaderBar;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        paddingVertical: 4,
        marginBottom: 12
    },
});
