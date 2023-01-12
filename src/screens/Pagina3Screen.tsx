import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { styles } from '../theme/appTheme';

interface Pagina3ScreenProps extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}:Pagina3ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 3</Text>
      <Button 
        title="Regresar"
        onPress={()=> navigation.pop()}
      />
      <Button 
        title="Ir a Inicio"
        onPress={()=> navigation.popToTop()}
      />
    </View>
  )
}
