import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStockParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';

interface PersonaScreenProps extends StackScreenProps<RootStockParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: PersonaScreenProps) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        });
    }, [])


    // console.log('Props', JSON.stringify(params, null, 2))
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Persona</Text>
        </View>
    )
}
