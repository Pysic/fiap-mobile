import { useRouter } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function Detail() {
    const router = useRouter();

    return (
        <View>
            <Text>Detalhes</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
        
    )
}