import React, { useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import  Constants from 'expo-constants';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import ContentContainer from '../../components/ContentContainer';

interface Params {
    season: string
}

interface SeasonResultsResponse {
    MRData: {
        RaceTable: {
            season: string,
            Races: [{
                raceName: string,
                Circuit: {
                    circuitName: string,
                    Location: {
                        locality: string,
                        country: string
                    }
                },
                date: string
            }]
        }
    }
}

const SeasonResults = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const routeParams = route.params as Params;

    useEffect(() => {
        if (!routeParams.season) {
            Alert.alert('Ooops', 'Parameter not found');
            navigation.goBack();
        }
    }, []);

    function handleNavigateToRound() {
        navigation.navigate('RoundResults', {
            season: '1980',
            round: '1'
        });
    }

    return (
        <View style={styles.mainContainer}>
            <Header />
         
            <PageTitle text="1980 season results" />
            
            <ContentContainer>
                <TouchableOpacity 
                    style={styles.contentCard}
                    activeOpacity={0.7}
                    onPress={handleNavigateToRound}
                >
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1-Argentine Grand Prix</Text>
                        <Icon name="arrow-right" size={18} color="#E54A4A"/>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Circuit:
                            <Text style={styles.contentCardDataValue}>Autódromo Juan y Oscar Gálvez</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Location:
                            <Text style={styles.contentCardDataValue}>Buenos Aires, Argentina</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Date:
                            <Text style={styles.contentCardDataValue}>1980-01-13</Text>
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.contentCard}
                    activeOpacity={0.7}
                    onPress={handleNavigateToRound}
                >
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1-Argentine Grand Prix</Text>
                        <Icon name="arrow-right" size={18} color="#E54A4A"/>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Circuit:
                            <Text style={styles.contentCardDataValue}>Autódromo Juan y Oscar Gálvez</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Location:
                            <Text style={styles.contentCardDataValue}>Buenos Aires, Argentina</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Date:
                            <Text style={styles.contentCardDataValue}>1980-01-13</Text>
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.contentCard}
                    activeOpacity={0.7}
                    onPress={handleNavigateToRound}
                >
                    <View style={styles.contentCardHeader}>
                        <Text style={styles.contentCardHeaderTitle}>1-Argentine Grand Prix</Text>
                        <Icon name="arrow-right" size={18} color="#E54A4A"/>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text style={styles.contentCardDataLabel}>
                            Circuit:
                            <Text style={styles.contentCardDataValue}>Autódromo Juan y Oscar Gálvez</Text>
                        </Text>
                                
                        <Text style={styles.contentCardDataLabel}>
                            Location:
                            <Text style={styles.contentCardDataValue}>Buenos Aires, Argentina</Text>
                        </Text>
                        
                        <Text style={styles.contentCardDataLabel}>
                            Date:
                            <Text style={styles.contentCardDataValue}>1980-01-13</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </ContentContainer>
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