import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { TabNavigator } from './src/navigator/TabNavigator';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  )
}

export default App;  