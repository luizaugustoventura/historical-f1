import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingContent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#E54A4A" size={38} />
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center' 
    }
});

export default LoadingContent;