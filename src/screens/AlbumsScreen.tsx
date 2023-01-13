import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { authState, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Albums Screen</Text>
        {authState.isLoggedIn && <Button title='Sign Out' onPress={signOut} />}
    </View>
  )
}
