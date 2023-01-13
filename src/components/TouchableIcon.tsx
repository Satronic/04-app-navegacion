import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface TouchableIconProps {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: TouchableIconProps) => {

    const {changeFavIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => changeFavIcon(iconName)}
        >
            <Icon name={iconName} size={40} color="green" />
        </TouchableOpacity>
    )
}
