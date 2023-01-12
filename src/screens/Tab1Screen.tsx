import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text>
          <Icon name="briefcase-outline" size={60} color="green" />
        </Text>
    </View>
  )
}
