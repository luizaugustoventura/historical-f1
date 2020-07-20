import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import LoadingContent from '../../components/LoadingContent';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { Params, RoundResultsResponse, RaceResults } from './interfaces';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ContentContainer from '../../components/ContentContainer';



const RoundResults = () => {
    const [raceResults, setRaceResults] = useState<RaceResults[]>();

    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as Params;

    useEffect(() => {
        if ((!routeParams.season) || (!routeParams.round)) {
            Alert.alert('Ooops', 'Parameter not found');
            navigation.goBack();
            return;
        }

        api.get<RoundResultsResponse>(`${routeParams.season}/${routeParams.round}/results`)
            .then(response => {
                setRaceResults(response.data.MRData.RaceTable.Races[0].Results);
            });
    }, []);

    return (
        <View style={styles.mainContainer}>
            <Header />

            <PageTitle text="1980 Argentine Grand Prix results" />

            { raceResults ? (
                <ContentContainer>
                    { raceResults.map(result => (
                        <View key={result.position} style={styles.contentCard}>
                            <View style={styles.contentCardHeader}>
                                <Text style={styles.contentCardHeaderTitle}>
                                    {result.position}
                                </Text>
                            </View>

                            <View style={styles.contentCardData}>
                                <Text style={styles.contentCardDataLabel}>
                                    Driver:
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Driver.givenName} {result.Driver.familyName}
                                    </Text>
                                </Text>
                                        
                                <Text style={styles.contentCardDataLabel}>
                                    Nationality:
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Driver.nationality}
                                    </Text>
                                </Text>
                                
                                <Text style={styles.contentCardDataLabel}>
                                    Team:
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Constructor.name}
                                    </Text>
                                </Text>

                                { (result.status === 'Finished' || result.status.startsWith('+')) ? (
                                    <Text style={styles.contentCardDataLabel}>
                                        Finished:
                                        <Text style={styles.contentCardDataValue}>
                                            { result.status !== 'Finished' ? result.status : null }
                                            { result.Time ? result.Time.time : null }
                                        </Text>
                                    </Text>
                                ): (
                                    <Text style={styles.contentCardDataLabel}>
                                        Status:
                                        <Text style={styles.contentCardDataValue}>
                                            {result.status}
                                        </Text>
                                    </Text>
                                )}
                            </View>
                        </View>
                    ))}
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