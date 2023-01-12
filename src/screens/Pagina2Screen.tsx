import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Página Segunda',
      headerBackTitle: 'Atras' // Solo para iOS
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 2</Text>
      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  )
}


