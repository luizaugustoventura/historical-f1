import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import SeasonResults from './pages/SeasonResults';
import RoundResults from './pages/RoundResults';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#E2E2E2'
                    }
                }}
            >

                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="SeasonResults" component={SeasonResults} />
                <AppStack.Screen name="RoundResults" component={RoundResults} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;