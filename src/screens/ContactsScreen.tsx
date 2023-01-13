import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext(AuthContext);

  console.log(JSON.stringify(authState,null,3));

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {!authState.isLoggedIn &&
        <Button
          title='Sign In'
          onPress={signIn}
        />
      }
    </View>
  )
}
