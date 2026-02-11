import axios from 'axios'
import { useEffect, useState } from "react"
import { FlatList, Text, View } from 'react-native'

type PokemonResult = {
    results: Pokemon[]
}

type Pokemon = {
    name: string
}

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        fetchPokemons()
    }, [])

    async function fetchPokemons() {
        const response = await axios.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon')
        setPokemons(response.data.results)
    }

    return (
        <View>
            <FlatList
                data={ pokemons }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.name.toUpperCase()}</Text>
                )}
            />
        </View>
    )
}