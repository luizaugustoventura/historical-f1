import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Emoji from 'react-native-emoji';
import Constants from 'expo-constants';

import LogoBlack from '../../assets/logo_black.svg';

const Home = () => {
    const [season, setSeason] = useState('');

    const navigation = useNavigation();

    function handleNavigateToSeason() {
        if (!season) {
            return;
        }

        const parsedSeason = Number(season);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if((parsedSeason < 1950) || (parsedSeason > currentYear)) {
            Alert.alert('Ooops', 'Plase, input a valid season!');
            return;
        }

        navigation.navigate('SeasonResults', {
            season
        });
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.header}>
                <LogoBlack width={300} height={90} />
            </View>

            <View style={styles.form}>
                <TextInput onChangeText={setSeason}
                    style={styles.formInput} 
                    placeholder="Input the F1 season you want..." 
                />

                <RectButton style={styles.formButton} onPress={handleNavigateToSeason} >
                    <Text style={styles.formButtonText}>Go</Text>
                    <View style={styles.formButtonIcon}>
                        <Text>
                            <Emoji name="checkered_flag" style={styles.icon}/>
                        </Text>
                    </View>
                </RectButton>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Powered by&nbsp;
                    <Text style={[styles.footerText, styles.footerBoldText]}>
                        Ergast Developer API
                    </Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },

    header: {
        marginTop: Constants.statusBarHeight + 10,
    },

    form: {
        width: 300,
    },

    formInput: {
        height: 60,
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: '#FFF',
    },

    formButton: {
        marginTop: 8,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#E54A4A',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },

    formButtonText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
    },

    formButtonIcon: {
        width: 60,
        height: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon: {
        fontSize: 20
    },

    footer: {
        marginBottom: 20
    },

    footerText: {
        color: '#5A5454'
    },

    footerBoldText: {
        fontWeight: 'bold'
    }
});

export default Home;