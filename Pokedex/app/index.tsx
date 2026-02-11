import axios from 'axios';
import { useState } from 'react';
import { Button, Text, View } from "react-native";

type PokemonListResponse = {
    results: Pokemon[]
}

type Pokemon = {
    name: string
}

export default function Home() {
    const [pokemonName, setPokemonName] = useState('')

    async function fetchPokemons() {
        const response = await axios.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/')
        const data = response.data
        const results = data.results
        const random = Math.floor(Math.random() * 11)
        const name = results[random].name
        setPokemonName(name)
    }

    return(
        <View>
            <Text>Pokebola</Text>
            <Text>{ pokemonName }</Text>
            <Button title='Lançar Pokebola' onPress={ fetchPokemons }></Button>
        </View>
    )
}