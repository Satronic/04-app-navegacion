import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';

import { Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styles, sizes, colors } from '../theme/appTheme';
import { View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: (width > 450) ? 'permanent' : 'front',
                drawerPosition: 'left'
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="BottomTabNavigator" options={{ title: 'Home' }} component={BottomTabNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {

    // console.log('Props', JSON.stringify(props, null, 3))

    return (
        <DrawerContentScrollView>
            <Text style={styles.title}>Drawer Navigation</Text>
            <View style={styles.drawerContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'
                    }}
                />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('BottomTabNavigator')}
                >
                    <Icon name="navigate-circle-outline" size={sizes.topTabIcon} color={colors.topTabIcon} />
                    <Text style={styles.nenuItemText}>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name="settings-outline" size={sizes.topTabIcon} color={colors.topTabIcon} />
                    <Text style={styles.nenuItemText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}