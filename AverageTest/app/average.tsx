import DefaultButton from '@/components/default-button';
import { Score } from '@/managers/score';
import { LocalStorage } from '@/managers/storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from "react-native";

export default function Average() {
    const router = useRouter()
    const { average } = useLocalSearchParams()

    return(
        <View>
            <Text>Sua média é: { average }</Text>
            <Text>Sua categoria é: { Score.category(Number(average)) }</Text>
            <DefaultButton title='Salvar' onPress={ () => { LocalStorage.save(String(average)) } }></DefaultButton>
            <DefaultButton title='Limpar' onPress={ () => { LocalStorage.clean(); router.back() } }></DefaultButton>
            <DefaultButton title='Voltar' onPress={ () => { router.back() } }></DefaultButton>
        </View>
    )
}