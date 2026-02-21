import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const login = async () => {
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            alert(`Usuário logado: ${email}`)
            const token = await credential.user.getIdToken()
            console.log(token)
        } catch (error: any) {
            alert(`Usuário NÃO logado`)
            console.log(error)
        }
    }
 
    return (
        <View style={ styles.container }>
            <TextInput style={ styles.input } placeholder='Digite seu E-mail' onChangeText={(text) => setEmail(text)}/>
            <TextInput style={ styles.input } placeholder='Digite sua senha' onChangeText={(text) => setPassword(text)}/>
             
            <Button title='Login' onPress={login}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})