import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function First() {
    const router = useRouter()

    return (
        <View>
           <Text>Tela 2</Text>
           <Button title='Avançar' onPress={ () => {
                router.push('./second-screen')
            }}>
            </Button>
        </View>
    )
}