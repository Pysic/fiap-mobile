import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from "react-native";
import Banner from "../components/banner";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
    const saveAndLoadName = async () => {
      try {
        // await AsyncStorage.setItem('name', 'AAAA'); // salva
        // await AsyncStorage.removeItem('name')
        const storedName = await AsyncStorage.getItem('name'); // busca

        if (storedName !== null) {
          alert(storedName);
        } else {
          alert('Nenhum nome encontrado.');
        }
      } catch (error) {
        alert('Erro');
      }
    };

    saveAndLoadName();
  }, []); 

    return (
        <View style = {styles.div}>
            <Banner onPress={() => { alert("Bt1") }} title="Botao1"/>
            <Banner onPress={() => { alert("Bt2") }} title="Botao2" name="Oi"/>
            <Banner onPress={() => { alert("Bt3") }} title="Botao3" name="Ola2"/>
            <Banner onPress={() => { alert("Bt4") }} title="Botao4" name="Ola3"/>
            <Button title="Ir para perfil" onPress={() => router.push('./details')}
      />
        </View>
        
    )
}

const styles = StyleSheet.create({
    div: { 
        flex: 1, 
        justifyContent: "center", 
        alignContent: "center",
        margin: 10,
        gap: 10
    }
})