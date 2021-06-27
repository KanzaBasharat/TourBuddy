import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from '../Screens/FrontScreen';
import SindhScreen from '../Screens/SindhScreen';
import KPKScreen from '../Screens/KPKScreen';
import KashmirScreen from '../Screens/KashmirScreen';
import BalochistanScreen from '../Screens/BalochistanScreen';
import GBScreen from '../Screens/GBScreen';
import ICTScreen from '../Screens/ICTScreen';
import Punjabscreen from '../Screens/PunjabScreen';
const Stack = createStackNavigator();

function forApp() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Tour Buddy" component={FrontScreen} />
        <Stack.Screen name="Punjab" component={Punjabscreen} />
        <Stack.Screen name="Sindh" component={SindhScreen} />
        <Stack.Screen name="Balochistan" component={BalochistanScreen} />
        <Stack.Screen name="Kashmir" component={KashmirScreen} />
        <Stack.Screen name="KPK" component={KPKScreen} />
        <Stack.Screen name="GB" component={GBScreen} />
        <Stack.Screen name="ICT" component={ICTScreen} />

      </Stack.Navigator>
    
  );
}

export default forApp;
