import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import LoadingContent from '../../components/LoadingContent';
import { useNavigation, useRoute } from '@react-navigation/native';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
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
        NetInfo.fetch().then((status: NetInfoState) => {
            if (status.isInternetReachable) {
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
            } else {
                Alert.alert('Network problem', 'You must have an internet connection to use this app');
                navigation.goBack();
            }
        });
    }, []);

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