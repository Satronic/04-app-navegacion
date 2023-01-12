import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles, sizes, colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Pagina1ScreenProps extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Pagina1ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={styles.title}>Navegar con Argumentos</Text>

      <View style={{
        flexDirection: 'row'
      }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'black'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name="person-circle-outline" size={sizes.buttonIcon} color={styles.botonGrandeTexto.color} />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name="person-circle-outline" size={sizes.buttonIcon} color={styles.botonGrandeTexto.color} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
