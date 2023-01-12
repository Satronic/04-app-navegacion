import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
// import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { sizes } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        // tabBarIconStyle: {
        //   margin: 10
        // },
        tabBarStyle: {
          height: 60
        },
        tabBarActiveTintColor: 'green',
        tabBarActiveBackgroundColor: 'rgba(0, 200, 0, 0.3)',
        tabBarInactiveBackgroundColor: 'rgba(255, 255, 0, 0.3)',
        headerStyle: {
          backgroundColor: 'rgba(0, 200, 0, 0.3)'
        }
      }}
    >
      <Tab.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          tabBarIcon: () => <Icon name="briefcase-outline" size={sizes.bottomTabIcon} color="green" />,
          tabBarLabel: 'Tab 1',
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: '700'
          }
        }}
      />
      <Tab.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          tabBarIcon: () => <Icon name="bar-chart-outline" size={sizes.bottomTabIcon} color="green"></Icon>,
          tabBarLabel: 'Top Tab',
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: '700'
          }
        }}
      />
      <Tab.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          tabBarIcon: () => <Icon name="copy-outline" size={sizes.bottomTabIcon} color="green"></Icon>,
          tabBarLabel: 'Stack',
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: '700'
          }
        }}
      />
    </Tab.Navigator>
  );
};