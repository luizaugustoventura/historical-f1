import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { Params } from './interfaces';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ContentContainer from '../../components/ContentContainer';



const RoundResults = () => {
    const route = useRoute();

    const routeParams = route.params as Params;

    useEffect(() => {}, []);

    return (
        <View style={styles.mainContainer}>
            <Header />

            <PageTitle text="1980 Argentine Grand Prix results" />

            <ContentContainer>
                <View style={styles.contentCard}>
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1</Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Driver:
                            <Text style={styles.contentCardDataValue}>Alan Jones</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Nationality:
                            <Text style={styles.contentCardDataValue}>Australian</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Team:
                            <Text style={styles.contentCardDataValue}>Williams</Text>
                        </Text>

                        <Text style={styles.contentCardDataLabel}>
                            Finished:
                            <Text style={styles.contentCardDataValue}>1:43:24.38</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.contentCard}>
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1</Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Driver:
                            <Text style={styles.contentCardDataValue}>Alan Jones</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Nationality:
                            <Text style={styles.contentCardDataValue}>Australian</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Team:
                            <Text style={styles.contentCardDataValue}>Williams</Text>
                        </Text>

                        <Text style={styles.contentCardDataLabel}>
                            Finished:
                            <Text style={styles.contentCardDataValue}>1:43:24.38</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.contentCard}>
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1</Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Driver:
                            <Text style={styles.contentCardDataValue}>Alan Jones</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Nationality:
                            <Text style={styles.contentCardDataValue}>Australian</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Team:
                            <Text style={styles.contentCardDataValue}>Williams</Text>
                        </Text>

                        <Text style={styles.contentCardDataLabel}>
                            Finished:
                            <Text style={styles.contentCardDataValue}>1:43:24.38</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.contentCard}>
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1</Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Driver:
                            <Text style={styles.contentCardDataValue}>Alan Jones</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Nationality
                            <Text style={styles.contentCardDataValue}>Australian</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Team:
                            <Text style={styles.contentCardDataValue}>Williams</Text>
                        </Text>

                        <Text style={styles.contentCardDataLabel}>
                            Finished:
                            <Text style={styles.contentCardDataValue}>1:43:24.38</Text>
                        </Text>
                    </View>
                </View>
            </ContentContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    contentCard: {
        height: 180,
        width: '100%',
        padding: 12,
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },

    contentCardHeader: {
        // FIX THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    contentCardHeaderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B4949'
    },

    contentCardData: {
        marginTop: 16
    },

    contentCardDataLabel: {
        fontSize: 16,
        color: '#4B4949',
        fontWeight: 'bold',
        marginBottom: 4
    },

    contentCardDataValue: {
        fontWeight: 'normal'
    }
});

export default RoundResults;