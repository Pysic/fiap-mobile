import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function SecondScreen() {
    const router = useRouter()

    return (
        <View>
            <Text>Tela 2</Text>
            <Button title="Tela 1" onPress={ () => router.push('./first-screen') }></Button>
            <Button title="Voltar" onPress={ () => router.back() }></Button>
        </View>
    )
}
