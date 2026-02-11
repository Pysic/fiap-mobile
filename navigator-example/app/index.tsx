import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Home() {
    const router = useRouter()

    return (
        <View style = {styles.div}>
            <Button title="Tela 1" onPress={ () => router.push('./first-screen') }></Button>
            <Button title="Tela 2" onPress={ () => router.push('./second-screen') }></Button>
        </View>
    )

    // return (
    //     <View style = {styles.div}>
    //         {/* <Banner title="Tela 1" name="Ola" onPress={ () => { alert('Clicou') } }/> */}
    //         <Button title="Navegar" onPress={ () => router.push('./details') }></Button>
    //     </View>
        
    // )
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