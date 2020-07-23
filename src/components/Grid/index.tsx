import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GridProps from './interfaces';
import RaceResults from '../../common/interfaces/RaceResults';

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

const GridPodium: React.FC<GridProps> = ({ grid }) => {
    const [first, setFirst] = useState<RaceResults>();
    const [second, setSecond] = useState<RaceResults>();
    const [third, setThird] = useState<RaceResults>();

    const navigation = useNavigation();

    useEffect(() => { 
        setFirst(grid[0]);
        setSecond(grid[1]);
        setThird(grid[2]);

        if (!grid) {
            Alert.alert('Sorry', 'We did not find any data for your request');
            navigation.goBack();
        }
    }, []);

    const styles = StyleSheet.create({
        mainContainer: {
            width: '48%',
            alignSelf: 'center'
        },
    
        secondaryContainer: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
        },
    
        secondaryContainerCardWrapper: {
            width: '48%'
        },

        contentCardHeight: {
            height: 240
        }
    });

    if (!(first && second && third)) {
        return null;
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View 
                    style={[
                        globalStyles.contentCard,
                        styles.contentCardHeight, 
                        getDriverPositionStyles(first.position)
                    ]}
                >
                    <View>
                        <Text style={globalStyles.contentCardHeaderTitle}>
                            {first.position}
                        </Text>
                    </View>

                    <View style={globalStyles.contentCardData}>
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Driver: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {first.Driver.givenName} {first.Driver.familyName}
                            </Text>
                        </Text>
                                
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Nationality: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {first.Driver.nationality}
                            </Text>
                        </Text>
                        
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Team: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {first.Constructor.name}
                            </Text>
                        </Text>

                        { (first.status === 'Finished' || first.status.startsWith('+')) ? (
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Finished: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    { first.status !== 'Finished' ? first.status : null }
                                    { first.Time ? first.Time.time : null }
                                </Text>
                            </Text>
                        ): (
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Status: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {first.status}
                                </Text>
                            </Text>
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.secondaryContainer}>
                <View style={styles.secondaryContainerCardWrapper}>
                    <View 
                        style={[
                            globalStyles.contentCard, 
                            styles.contentCardHeight,
                            getDriverPositionStyles(second.position)
                        ]}
                    >
                        <View>
                            <Text style={globalStyles.contentCardHeaderTitle}>
                                {second.position}
                            </Text>
                        </View>

                        <View style={globalStyles.contentCardData}>
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Driver: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {second.Driver.givenName} {second.Driver.familyName}
                                </Text>
                            </Text>
                                    
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Nationality: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {second.Driver.nationality}
                                </Text>
                            </Text>
                            
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Team: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {second.Constructor.name}
                                </Text>
                            </Text>

                            { (second.status === 'Finished' || second.status.startsWith('+')) ? (
                                <Text 
                                    style={globalStyles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Finished: '}
                                    <Text style={globalStyles.contentCardDataValue}>
                                        { second.status !== 'Finished' ? second.status : null }
                                        { second.Time ? second.Time.time : null }
                                    </Text>
                                </Text>
                            ): (
                                <Text 
                                    style={globalStyles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Status: '}
                                    <Text style={globalStyles.contentCardDataValue}>
                                        {second.status}
                                    </Text>
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                

                <View style={styles.secondaryContainerCardWrapper}>
                    <View 
                        style={[
                            globalStyles.contentCard, 
                            styles.contentCardHeight,
                            getDriverPositionStyles(third.position)
                        ]}
                    >
                        <View>
                            <Text style={globalStyles.contentCardHeaderTitle}>
                                {third.position}
                            </Text>
                        </View>

                        <View style={globalStyles.contentCardData}>
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Driver: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {third.Driver.givenName} {third.Driver.familyName}
                                </Text>
                            </Text>
                                    
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Nationality: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {third.Driver.nationality}
                                </Text>
                            </Text>
                            
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Team: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {third.Constructor.name}
                                </Text>
                            </Text>

                            { (third.status === 'Finished' || third.status.startsWith('+')) ? (
                                <Text 
                                    style={globalStyles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Finished: '}
                                    <Text style={globalStyles.contentCardDataValue}>
                                        { third.status !== 'Finished' ? third.status : null }
                                        { third.Time ? third.Time.time : null }
                                    </Text>
                                </Text>
                            ): (
                                <Text 
                                    style={globalStyles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Status: '}
                                    <Text style={globalStyles.contentCardDataValue}>
                                        {third.status}
                                    </Text>
                                </Text>
                            )}
                        </View>
                    </View>
                </View>

            </View>
        </>
    );
}

const Grid: React.FC<GridProps> = ({ grid }) => {
    const navigation = useNavigation();

    if (!grid) {
        Alert.alert('Sorry', 'We did not find any data for your request');
        navigation.goBack();
        return null;
    }

    return (
        <>
            { grid.map((gridPlace, index) => (
                <View
                    key={gridPlace.Driver.driverId} 
                    style={[globalStyles.contentCard, getDriverPositionStyles(gridPlace.position)]}
                >
                    <View>
                        <Text style={globalStyles.contentCardHeaderTitle}>
                            {gridPlace.position}
                        </Text>
                    </View>

                    <View style={globalStyles.contentCardData}>
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Driver: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {gridPlace.Driver.givenName} {gridPlace.Driver.familyName}
                            </Text>
                        </Text>
                                
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Nationality: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {gridPlace.Driver.nationality}
                            </Text>
                        </Text>
                        
                        <Text 
                            style={globalStyles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Team: '}
                            <Text style={globalStyles.contentCardDataValue}>
                                {gridPlace.Constructor.name}
                            </Text>
                        </Text>

                        { (gridPlace.status === 'Finished' || gridPlace.status.startsWith('+')) ? (
                            <Text 
                                style={globalStyles.contentCardDataLabel} 
                                textBreakStrategy="highQuality"
                            >
                                {'Finished: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    { gridPlace.status !== 'Finished' ? gridPlace.status : null }
                                    { gridPlace.Time ? gridPlace.Time.time : null }
                                </Text>
                            </Text>
                        ): (
                            <Text 
                                style={globalStyles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Status: '}
                                <Text style={globalStyles.contentCardDataValue}>
                                    {gridPlace.status}
                                </Text>
                            </Text>
                        )}
                    </View>
                </View>
            ))}
        </>
    );
}

const globalStyles = StyleSheet.create({
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
        marginBottom: 4,
    },

    contentCardDataValue: {
        fontWeight: 'normal'
    }
});

export { GridPodium, Grid };