/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { Colors } from '../theme';
import { DrinkDetail, DrinksList } from '../views/Drinks';

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: Colors.primary_light,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#fff',
  },
  headerBackTitle: '',
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Drinks" component={DrinksList} options={headerOptions} />
        <Stack.Screen name="DrinkDetail" component={DrinkDetail} options={({ route }) => ({ ...headerOptions, title: route.params.item.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
