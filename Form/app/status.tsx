import { useLocalSearchParams } from 'expo-router';
import { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Status() {
    const { nome } = useLocalSearchParams();
    const context = useContext(UserContext);

    useEffect(() => {
        context?.setNome('c')
    }) 

    return (
        <View>
            <Text>
                Ola { nome } e { context?.nome }
            </Text>
        </View>
    )
}