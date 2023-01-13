import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStockParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface PersonaScreenProps extends StackScreenProps<RootStockParams, 'PersonaScreen'> { };

export const PersonaScreen = ({ navigation, route }: PersonaScreenProps) => {

    const params = route.params;
    const { authState, changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        });
    }, [])

    useEffect(() => {
        if (authState.isLoggedIn) {
            changeUserName(params.nombre);
        }
    }, [])



    // console.log('Props', JSON.stringify(params, null, 2))
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Persona</Text>
        </View>
    )
}
