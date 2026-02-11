import Card from '@/components/card'
import { View } from 'react-native'

export default function Home() {
    return (
        <View>
            <Card title = "Clicar" onPress={ () => { alert("Clicou botao 1") } }/>
            <Card name="Botao 2" title = "Clicar" onPress={ () => { alert("Clicou botao 2") } }/>
            <Card name="Botao 3" title = "Clicar" onPress={ () => { alert("Clicou botao 3") } }/>
        </View>
    ) 
}