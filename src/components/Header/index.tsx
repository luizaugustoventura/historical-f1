import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import Constants from 'expo-constants';

import LogoBlack from '../../assets/logo_black.svg';

const Header = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.headerContainer}>
            <LogoBlack width={150} height={60} />

            <TouchableOpacity 
                style={styles.button}
                onPress={handleNavigateBack}
            >
                <Icon name="arrow-left" size={22} color="#E54A4A" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: Constants.statusBarHeight + 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    button: {
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Header;