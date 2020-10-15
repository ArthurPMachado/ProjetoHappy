/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanagesDetails" component={OrphanagesDetails} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
