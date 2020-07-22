import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import LoadingContent from '../../components/LoadingContent';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { Params, RoundResultsResponse } from './interfaces';
import RaceResults from '../../common/interfaces/RaceResults';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ContentContainer from '../../components/ContentContainer';

import { GridPodium, Grid } from '../../components/Grid';

const RoundResults = () => {
    const [raceResults, setRaceResults] = useState<RaceResults[]>();
    const [raceName, setRaceName] = useState('');

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
                try {
                    setRaceResults(response.data.MRData.RaceTable.Races[0].Results);
                    setRaceName(response.data.MRData.RaceTable.Races[0].raceName);
                } catch {
                    Alert.alert('Sorry', 'We did not find any data for your request');
                    navigation.goBack();
                }
            });
    }, []);

    function getDriverPositionStyles(position: string) {
        let backgroundColor = '';
        let opacity = undefined;

        switch(position) {
            case '1': 
                backgroundColor = '#CFAA55';
                opacity = 0.8;
                break;
            case '2': 
                backgroundColor = '#D4D4D4';
                opacity = 0.8;
                break;
            case '3': 
                backgroundColor = '#D5784F';
                opacity = 0.8;
                break;
            default:
                backgroundColor= '#FFF';
        }

        const styles = StyleSheet.create({
            contentCardColor: {
                backgroundColor,
                opacity
            }
        });

        return styles.contentCardColor;
    }

    return (
        <View style={styles.mainContainer}>
            <Header />

            <PageTitle 
                text={ (routeParams.season && raceName) ? `${routeParams.season} ${raceName}` : "Loading" } 
            />

            { raceResults ? (
                <ContentContainer>
                    <GridPodium grid={raceResults.slice(0,3)} />
                    <Grid grid={raceResults.slice(3)} />
                    {/* { raceResults.map(result => (
                        <View key={result.position} style={[styles.contentCard, getDriverPositionStyles(result.position)]}>
                            <View>
                                <Text style={styles.contentCardHeaderTitle}>
                                    {result.position}
                                </Text>
                            </View>

                            <View style={styles.contentCardData}>
                                <Text style={styles.contentCardDataLabel}>
                                    Driver:&nbsp;
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Driver.givenName} {result.Driver.familyName}
                                    </Text>
                                </Text>
                                        
                                <Text style={styles.contentCardDataLabel}>
                                    Nationality:&nbsp;
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Driver.nationality}
                                    </Text>
                                </Text>
                                
                                <Text style={styles.contentCardDataLabel}>
                                    Team:&nbsp;
                                    <Text style={styles.contentCardDataValue}>
                                        {result.Constructor.name}
                                    </Text>
                                </Text>

                                { (result.status === 'Finished' || result.status.startsWith('+')) ? (
                                    <Text style={styles.contentCardDataLabel}>
                                        Finished:&nbsp;
                                        <Text style={styles.contentCardDataValue}>
                                            { result.status !== 'Finished' ? result.status : null }
                                            { result.Time ? result.Time.time : null }
                                        </Text>
                                    </Text>
                                ): (
                                    <Text style={styles.contentCardDataLabel}>
                                        Status:&nbsp;
                                        <Text style={styles.contentCardDataValue}>
                                            {result.status}
                                        </Text>
                                    </Text>
                                )}
                            </View>
                        </View>
                    ))} */}
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