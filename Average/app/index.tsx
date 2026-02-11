import { DefaultButton } from '@/components/button'
import { Score } from '@/managers/score'
import { LocalStorage } from '@/managers/storage'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { TextInput, View } from 'react-native'
import { Routes } from '../managers/routes'

export default function Home() {
    const router = useRouter()
    const [firstScore, setFirstScore] = useState('')
    const [secondScore, setSecondScore] = useState('')
    const [thirdScore, setThirdScore] = useState('')

    useEffect(() => {
        LocalStorage.verify().then((value) => {
            if (!value) return
            router.push({
                pathname: `./${Routes.average}`,
                params: {
                    average: value,
                    isSaved: String(true)
                }
            })
        })
    }, [])

    const scores = () => {
        const firstScoreToNumber = Number(firstScore)
        const secondScoreToNumber = Number(secondScore)
        const thirdScoreToNumber = Number(thirdScore)

        if (!firstScoreToNumber || !secondScoreToNumber || !thirdScoreToNumber) return undefined
        return [firstScoreToNumber, secondScoreToNumber, thirdScoreToNumber]
    }

    return (
        <View>
            <TextInput placeholder='Nota CP1' value={ firstScore } onChangeText={ (text) => setFirstScore(text) }/>
            <TextInput placeholder='Nota CP2' value={ secondScore } onChangeText={ (text) => setSecondScore(text) }/>
            <TextInput placeholder='Nota CP3' value={ thirdScore } onChangeText={ (text) => setThirdScore(text) }/>
            <DefaultButton title='Calcular' onPress={ () => {
                    const userScores = scores()
                    if (!userScores) { alert('Digite valores válidos.'); return }
                    const average = Score.average(userScores)
                    router.push({
                        pathname: `./${Routes.average}`,
                        params: {
                            average: average,
                            isSaved: String(false)
                        }
                    })
                }
            } />
        </View>
    )
}