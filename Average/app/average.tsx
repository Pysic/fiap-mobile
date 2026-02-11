import { DefaultButton } from '@/components/button'
import { Score } from '@/managers/score'
import { LocalStorage } from '@/managers/storage'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function Home() {
    const [isSavedAverage, setIsSavedAverage] = useState<boolean>()
    const router = useRouter()
    const { average, isSaved } = useLocalSearchParams()

    useEffect(() => setIsSavedAverage(isSaved === 'true'), [])

    return (
        <View>
            <Text>Sua média é { average }</Text>
            <Text>Voce está { Score.category(Number(average)) }</Text>

            { isSavedAverage === true
                ?   <DefaultButton title='Limpar' onPress={ () => { LocalStorage.clean(); router.back() }} />
                :   <View>
                        <DefaultButton title='Salvar' onPress={ () => { LocalStorage.save(String(average)); setIsSavedAverage(true) }} />
                        <DefaultButton title='Voltar' onPress={ () => { router.back() }} />
                    </View>
            }
            
        </View>
    )
}