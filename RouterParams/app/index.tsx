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
            <TextInput value={ userName } onChangeText={ (text) => { setUserName(text) } }></TextInput>
            <Text>Tela 1</Text>
            <Button title='Avançar' onPress={ () => {
                context?.setName(userName)
                router.push('./first-screen')
                // router.push(`./status?name=${ userName }`)

                // router.push({
                //     pathname: './status',
                //     params: { name: encodeURI(userName) }
                // })
            }}>
            </Button>
        </View>
    )
}