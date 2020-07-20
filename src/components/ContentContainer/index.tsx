import React, { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const ContentContainer: React.FC = ({ children }) => {
    return (
        <ScrollView style={styles.contentContainer}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginTop: 32,
        marginHorizontal: 16,
        marginBottom: 16,
    }
});

export default ContentContainer;