// import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Status() {
    // const { name } = useLocalSearchParams()
    const context = useContext(UserContext)

    return (
        <View>
           <Text>Tela 2</Text>
           <Text>Olá { context?.name }</Text>
        </View>
    )
}