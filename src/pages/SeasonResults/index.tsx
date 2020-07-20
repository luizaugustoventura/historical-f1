import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import api from '../../services/api';
import {  Params, SeasonResultsResponse, Races } from './interfaces';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import LoadingContent from '../../components/LoadingContent';
import ContentContainer from '../../components/ContentContainer';

const SeasonResults = () => {
    const [seasonResults, setSeasonResults] = useState<Races[]>();

    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as Params;

    useEffect(() => {
        if (!routeParams.season) {
            Alert.alert('Ooops', 'Parameter not found');
            navigation.goBack();
            return;
        }
        
        api.get<SeasonResultsResponse>(`${routeParams.season}`).then(response => {
            setSeasonResults(response.data.MRData.RaceTable.Races);
        });
    }, []);

    function handleNavigateToRound(round: string) {
        navigation.navigate('RoundResults', {
            season: routeParams.season,
            round
        });
    }

    return (
        <View style={styles.mainContainer}>
            <Header />
         
            <PageTitle text={`${routeParams.season} season results`} />
            
            { seasonResults ? (
                <ContentContainer>
                    { seasonResults.map(race => (
                        <TouchableOpacity 
                            style={styles.contentCard}
                            activeOpacity={0.7}
                            onPress={() => handleNavigateToRound(race.round)}
                            key={String(race.round)}
                        >
                            <View style={styles.contentCardHeader}>
                            <Text style={styles.contentCardHeaderTitle}>{race.round}-{race.raceName}</Text>
                                <Icon name="arrow-right" size={18} color="#E54A4A"/>
                            </View>

                            <View style={styles.contentCardData}>
                                <Text style={styles.contentCardDataLabel}>
                                    Circuit:
                                    <Text style={styles.contentCardDataValue}> {race.Circuit.circuitName}</Text>
                                </Text>
                                        
                                <Text style={styles.contentCardDataLabel}>
                                    Location:
                                    <Text style={styles.contentCardDataValue}> {race.Circuit.Location.locality}, {race.Circuit.Location.country}</Text>
                                </Text>
                                
                                <Text style={styles.contentCardDataLabel}>
                                    Date:
                                    <Text style={styles.contentCardDataValue}> {race.date}</Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ) ) }
                </ContentContainer>
            ) : <LoadingContent /> }
            
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    contentCard: {
        height: 160,
        width: '100%',
        padding: 12,
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#FFF'
    },

    contentCardHeader: {
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

export default SeasonResults;