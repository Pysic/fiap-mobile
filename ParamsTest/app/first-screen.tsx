// import { useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function FirstScreen() {
    // const { name } = useLocalSearchParams()
    const context = useContext(UserContext)

    return (
        <View>
           <Text>Tela 1</Text>
           <Text>Olá { context?.name } </Text>
        </View>
    )
}