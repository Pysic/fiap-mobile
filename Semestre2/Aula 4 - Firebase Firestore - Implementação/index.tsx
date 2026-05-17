import { firestore } from '@/services/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export default function Home() {
    const [cp1, setCp1] = useState<number>()
    const [cp2, setCp2] = useState<number>()
    const [cp3, setCp3] = useState<number>()
    const [average, setAverage] = useState<number>()
    const docCp1Ref = doc(firestore, 'cps', 'cp1')
    const docCp2Ref = doc(firestore, 'cps', 'cp2')
    const docCp3Ref = doc(firestore, 'cps', 'cp3')

    const calculateAverage = () => {
        if (cp1 && cp2 && cp3) {
            const scores = [cp1, cp2, cp3]
            const minScore = Math.min(...scores)
            const sum = cp1 + cp2 + cp3 - minScore
            const avg = sum / 2
            setAverage(avg)
        }
    }

    const getScores = () => {
        getDoc(docCp1Ref).then((document) => {
            if (document.exists()) {
                setCp1(document.data().value)
            }
        })

        getDoc(docCp2Ref).then((document) => {
            if (document.exists()) {
                setCp2(document.data().value)
            }
        })

        getDoc(docCp3Ref).then((document) => {
            if (document.exists()) {
                setCp3(document.data().value)
            }
        })
    }

    const addScores = async () => {
        await setDoc(docCp1Ref, {value: cp1})
        await setDoc(docCp2Ref, {value: cp2})
        await setDoc(docCp3Ref, {value: cp3})
    }

    const calculate = async () => {
        if (!cp1 || !cp2 || !cp3) {
            await getScores()
            calculateAverage()
        }

        await addScores()
        await getScores()
        calculateAverage()
    }

    return(
        <View>
            <TextInput placeholder='Digite CP1' value={String(cp1)} onChangeText={(text) => setCp1(parseFloat(text))}/>
            <TextInput placeholder='Digite CP2' value={String(cp2)} onChangeText={(text) => setCp2(parseFloat(text))}/>
            <TextInput placeholder='Digite CP3' value={String(cp3)} onChangeText={(text) => setCp3(parseFloat(text))}/>

            <Button title='Calcular' onPress={calculate}/>
            <Text>Cp1: {cp1}</Text>
            <Text>Cp2: {cp2}</Text>
            <Text>Cp3: {cp3}</Text>

            <Text>Média: {average}</Text>
        </View>
    )
}