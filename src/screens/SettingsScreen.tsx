import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const { authState } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={{fontSize: 20}}>{JSON.stringify(authState, null, 3)}</Text>
      {authState.favoriteIcon && 
        <Icon 
          name={authState.favoriteIcon}
          size={80}
          color='green'
        />
      }
    </View>
  )
}
