import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors, sizes } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
    }}
    screenOptions={{
      tabBarPressColor: colors.primary, // Colores globales
      tabBarActiveTintColor: 'green',
      tabBarLabelStyle: {
        fontSize: sizes.topTabLabel,
        fontWeight: '700'
      }
      // tabBarIndicatorStyle: {
      //   backgroundColor: 'green'
      // }
    }}
    >
      <Tab.Screen 
        name="ChatScreen" 
        component={ChatScreen} 
        options={{
          tabBarIcon: () => <Icon name="chatbox-ellipses-outline" size={sizes.topTabIcon} color={colors.topTabIcon} />,
          title: 'Chat',
        }}
      />
      <Tab.Screen 
        name="ContactsScreen" 
        component={ContactsScreen} 
        options={{
          tabBarIcon: () => <Icon name="people-outline" size={sizes.topTabIcon} color={colors.topTabIcon} />,
          title: 'Contacts',
        }}
      />
      <Tab.Screen 
        name="AlbumsScreen" 
        component={AlbumsScreen}
        options={{
          tabBarIcon: () => <Icon name="images-outline" size={sizes.topTabIcon} color={colors.topTabIcon} />,
          title: 'Albums',
        }}
       />
    </Tab.Navigator>
  );
};