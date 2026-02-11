import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { UserContext } from '../context/UserContext';

export default function Home() {
    const [userName, setUserName] = useState('')
    const router = useRouter()
    const context = useContext(UserContext)

    return (
        <View>
            <TextInput placeholder='Digite seu nome' value={ userName } onChangeText={ (text) => { setUserName(text) } }></TextInput>
            <Text>Tela Inicio</Text>
            <Button title='Avançar' onPress={ () => {
                context?.setName(userName)
                router.push(`./first-screen`)
                // router.push(`./first-screen?name=${ userName }`)
                // router.push({
                //     pathname: './first-screen',
                //     params: { name: encodeURI(userName) }
                // })
            }}>
            </Button>
        </View>
    )
}