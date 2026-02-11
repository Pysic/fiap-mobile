import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Home() {
    const router = useRouter()
    const context = useContext(UserContext);

    return (
        <View>
            <TextInput>
            </TextInput>
            <Button title='Verificar' onPress={ () => {
                // context?.setNome('B')
                router.push('./status?nome=Jose')
                // router.push({
                //     pathname: './status',
                //     params: { nome: 'Maria' },
                // });
            }}>
            </Button>
            <Text> { context?.nome } </Text>
        </View>
    )
}