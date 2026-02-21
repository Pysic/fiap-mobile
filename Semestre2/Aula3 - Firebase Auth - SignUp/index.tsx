import { auth } from '@/services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const signUp = async () => {
        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password)
            alert(`Usuário Cadastrado: ${email}`)
            const token = await credential.user.getIdToken()
            console.log(token)
        } catch (error: any) {
            alert(`Usuário NÃO Cadastrado`)
            console.log(error)
        }
    }
 
    return (
        <View style={ styles.container }>
            <TextInput style={ styles.input } placeholder='Digite seu E-mail' onChangeText={(text) => setEmail(text)}/>
            <TextInput style={ styles.input } placeholder='Digite sua senha' onChangeText={(text) => setPassword(text)}/>
             
            <Button title='Cadastrar' onPress={signUp}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})