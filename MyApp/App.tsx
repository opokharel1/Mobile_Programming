// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import IdentityVerifyScreen from './src/screens/IdentityVerifyScreen';
import ListGadgetScreen from './src/screens/ListGadgetScreen';
import RentalSummaryScreen from './src/screens/RentalSummaryScreen';
import WalletScreen          from './src/screens/WalletScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IdentityVerify" component={IdentityVerifyScreen} />
        <Stack.Screen name="ListGadget" component={ListGadgetScreen} />
        <Stack.Screen name="RentalSummary" component={RentalSummaryScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;