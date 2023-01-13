import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { TabNavigator } from './src/navigator/TabNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <DrawerNavigator />
        {/* <TabNavigator /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;  