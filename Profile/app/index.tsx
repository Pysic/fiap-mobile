import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Home() {
    const [userName, setUserName] = useState('')
    const [names, setNames] = useState('')

    const saveName = async () => {
      try {
        await AsyncStorage.setItem('name', userName);
        loadName()
      } catch (error) {
        alert('Erro');
      }
    };

    const loadName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');

        if (storedName !== null) {
          setNames(storedName)
        } else {
          alert('Nenhum nome encontrado.');
        }
        
      } catch (error) {
        alert('Erro');
      }
    };

    useEffect(() => {
        loadName();
    }, []);

    return (
        <View>
            <TextInput value={userName} placeholder='Insira o nome' onChangeText={ (text) => { setUserName(text) } }></TextInput>         
            <Button title="Salvar" onPress = { () => saveName() }></Button>
            <Text>{names}</Text>
        </View>
    );
}
