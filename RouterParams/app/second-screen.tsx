import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Second() {
    const router = useRouter()

    return (
        <View>
           <Text>Tela 3</Text>
           <Button title='Avançar' onPress={ () => {
                router.push('./third-screen')
            }}>
            </Button>
        </View>
    )
}