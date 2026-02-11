import { useContext } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Third() {
    const context = useContext(UserContext)

    return (
        <View>
           <Text>Tela 4</Text>
           <Text>Olá { context?.name }</Text>
        </View>
    )
}