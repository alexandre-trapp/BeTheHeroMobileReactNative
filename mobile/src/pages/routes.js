import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './Incidents';
import Detail from './Detail';

export default function Routes() {

const a = 1;
    return (

        <NavigationContainer>

            <AppStack.Navigator>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}