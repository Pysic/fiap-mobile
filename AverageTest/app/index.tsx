import DefaultButton from '@/components/default-button'
import { Score } from '@/managers/score'
import { LocalStorage } from '@/managers/storage'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'

export default function Home() {
    const router = useRouter()
    const [firstScore, setFirstScore] = useState('')
    const [secondScore, setSecondScore] = useState('')
    const [thirdScore, setThirdScore] = useState('')

    const scores = () => {
        const firstScoreNumber = Number(firstScore)
        const secondScoreNumber = Number(secondScore)
        const thirdScoreNumber = Number(thirdScore)

        if (!firstScoreNumber || !secondScoreNumber || !thirdScoreNumber) return undefined
        return [firstScoreNumber, secondScoreNumber, thirdScoreNumber]
    }

    useEffect(() => {
        LocalStorage.verify().then((value) => {
            if (!value) return
            router.push({
                pathname: './average',
                params: {
                    average: value
                }
            })
        })
    }, [])

    return(
        <View>
            <TextInput placeholder='Digite a nota da 1° CP...' value={ firstScore } onChangeText={ (text) => setFirstScore(text) }></TextInput>
            <TextInput placeholder='Digite a nota da 2° CP...' value={ secondScore } onChangeText={ (text) => setSecondScore(text) }></TextInput>
            <TextInput placeholder='Digite a nota da 3° CP...' value={ thirdScore } onChangeText={ (text) => setThirdScore(text) }></TextInput>
            <DefaultButton title='Calcular' onPress={ () => {
                const userScores = scores()
                if (!userScores) { alert('Digite valores válidos.'); return }
                const average = Score.average(userScores)
                router.push({
                    pathname: './average',
                    params: {
                        average: average
                    }
                })
            }}></DefaultButton>
        </View>
    )
}