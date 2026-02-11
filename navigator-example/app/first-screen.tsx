import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function FirstScreen() {
    const router = useRouter()

    return (
        <View>
            <Text>Tela 1</Text>
            <Button title="Tela 2" onPress={ () => router.push('./second-screen') }></Button>
            <Button title="Voltar" onPress={ () => router.back() }></Button>
        </View>
    )
}
