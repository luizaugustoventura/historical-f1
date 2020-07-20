import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PageTitleParams {
    text: string;
}

const PageTitle: React.FC<PageTitleParams> = ({ text }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{text}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    titleContainer: {
        marginHorizontal: 16,
        marginTop: 32,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4B4949',
        textAlign: 'center'
    },
});

export default PageTitle;