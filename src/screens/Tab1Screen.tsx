import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text>
          <TouchableIcon iconName="briefcase-outline" />
          <TouchableIcon iconName="bar-chart-outline" />
          <TouchableIcon iconName="copy-outline" />
        </Text>
    </View>
  )
}
