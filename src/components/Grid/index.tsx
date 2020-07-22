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
    console.log(grid.length);

    useEffect(() => { 
        setFirst(grid[0]);
        setSecond(grid[1]);
        setThird(grid[2]);

        // if (!(first && second && third)) {
        //     Alert.alert('Sorry', 'We did not find any data for your request');
        //     navigation.goBack();
        // }
    }, []);

    if (!(first && second && third)) {
        return null;
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={[styles.contentCard, getDriverPositionStyles(first.position)]}>
                    <View>
                        <Text style={styles.contentCardHeaderTitle}>
                            {first.position}
                        </Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Driver: '}
                            <Text style={styles.contentCardDataValue}>
                                {first.Driver.givenName} {first.Driver.familyName}
                            </Text>
                        </Text>
                                
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Nationality: '}
                            <Text style={styles.contentCardDataValue}>
                                {first.Driver.nationality}
                            </Text>
                        </Text>
                        
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Team: '}
                            <Text style={styles.contentCardDataValue}>
                                {first.Constructor.name}
                            </Text>
                        </Text>

                        { (first.status === 'Finished' || first.status.startsWith('+')) ? (
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Finished: '}
                                <Text style={styles.contentCardDataValue}>
                                    { first.status !== 'Finished' ? first.status : null }
                                    { first.Time ? first.Time.time : null }
                                </Text>
                            </Text>
                        ): (
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Status: '}
                                <Text style={styles.contentCardDataValue}>
                                    {first.status}
                                </Text>
                            </Text>
                        )}
                    </View>
                </View>
            </View>

            <View style={styles.secondaryContainer}>
                <View style={styles.secondaryContainerCardWrapper}>
                    <View style={[styles.contentCard, getDriverPositionStyles(second.position)]}>
                        <View>
                            <Text style={styles.contentCardHeaderTitle}>
                                {second.position}
                            </Text>
                        </View>

                        <View style={styles.contentCardData}>
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Driver: '}
                                <Text style={styles.contentCardDataValue}>
                                    {second.Driver.givenName} {second.Driver.familyName}
                                </Text>
                            </Text>
                                    
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Nationality: '}
                                <Text style={styles.contentCardDataValue}>
                                    {second.Driver.nationality}
                                </Text>
                            </Text>
                            
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Team: '}
                                <Text style={styles.contentCardDataValue}>
                                    {second.Constructor.name}
                                </Text>
                            </Text>

                            { (second.status === 'Finished' || second.status.startsWith('+')) ? (
                                <Text 
                                    style={styles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Finished: '}
                                    <Text style={styles.contentCardDataValue}>
                                        { second.status !== 'Finished' ? second.status : null }
                                        { second.Time ? second.Time.time : null }
                                    </Text>
                                </Text>
                            ): (
                                <Text 
                                    style={styles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Status: '}
                                    <Text style={styles.contentCardDataValue}>
                                        {second.status}
                                    </Text>
                                </Text>
                            )}
                        </View>
                    </View>
                </View>
                

                <View style={styles.secondaryContainerCardWrapper}>
                    <View style={[styles.contentCard, getDriverPositionStyles(third.position)]}>
                        <View>
                            <Text style={styles.contentCardHeaderTitle}>
                                {third.position}
                            </Text>
                        </View>

                        <View style={styles.contentCardData}>
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Driver: '}
                                <Text style={styles.contentCardDataValue}>
                                    {third.Driver.givenName} {third.Driver.familyName}
                                </Text>
                            </Text>
                                    
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Nationality: '}
                                <Text style={styles.contentCardDataValue}>
                                    {third.Driver.nationality}
                                </Text>
                            </Text>
                            
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Team: '}
                                <Text style={styles.contentCardDataValue}>
                                    {third.Constructor.name}
                                </Text>
                            </Text>

                            { (third.status === 'Finished' || third.status.startsWith('+')) ? (
                                <Text 
                                    style={styles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Finished: '}
                                    <Text style={styles.contentCardDataValue}>
                                        { third.status !== 'Finished' ? third.status : null }
                                        { third.Time ? third.Time.time : null }
                                    </Text>
                                </Text>
                            ): (
                                <Text 
                                    style={styles.contentCardDataLabel}
                                    textBreakStrategy="highQuality"
                                >
                                    {'Status: '}
                                    <Text style={styles.contentCardDataValue}>
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
    console.log(grid.length);

    if (!grid) {
        Alert.alert('a', 'a');
        navigation.goBack();
        return null;
    }

    return (
        <>
            { grid.map(gridPlace => (
                <View
                    key={gridPlace.position} 
                    style={[styles.contentCard, getDriverPositionStyles(gridPlace.position)]}
                >
                    <View>
                        <Text style={styles.contentCardHeaderTitle}>
                            {gridPlace.position}
                        </Text>
                    </View>

                    <View style={styles.contentCardData}>
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Driver: '}
                            <Text style={styles.contentCardDataValue}>
                                {gridPlace.Driver.givenName} {gridPlace.Driver.familyName}
                            </Text>
                        </Text>
                                
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Nationality: '}
                            <Text style={styles.contentCardDataValue}>
                                {gridPlace.Driver.nationality}
                            </Text>
                        </Text>
                        
                        <Text 
                            style={styles.contentCardDataLabel}
                            textBreakStrategy="highQuality"
                        >
                            {'Team: '}
                            <Text style={styles.contentCardDataValue}>
                                {gridPlace.Constructor.name}
                            </Text>
                        </Text>

                        { (gridPlace.status === 'Finished' || gridPlace.status.startsWith('+')) ? (
                            <Text 
                                style={styles.contentCardDataLabel} 
                                textBreakStrategy="highQuality"
                            >
                                {'Finished: '}
                                <Text style={styles.contentCardDataValue}>
                                    { gridPlace.status !== 'Finished' ? gridPlace.status : null }
                                    { gridPlace.Time ? gridPlace.Time.time : null }
                                </Text>
                            </Text>
                        ): (
                            <Text 
                                style={styles.contentCardDataLabel}
                                textBreakStrategy="highQuality"
                            >
                                {'Status: '}
                                <Text style={styles.contentCardDataValue}>
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

    contentCard: {
        height: 240,
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