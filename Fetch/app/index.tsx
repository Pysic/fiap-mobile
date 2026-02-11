import axios from 'axios';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

interface PokemonListResponse {
  results: Pokemon[];
}

type Pokemon = {
    name: string
}

export default function Home() {
    const [pokemonName, setPokemonName] = useState<string>()

    async function fetchPokemons() {
      try {
        const { data } = await axios.get<PokemonListResponse>("https://pokeapi.co/api/v2/pokemon?limit=20");
        const results = data.results
        const random = Math.floor(Math.random() * (11));
        setPokemonName(results[random].name)
      } catch {

      }
    }

    return (
        <View>
            <Text>Pokemon Capturado</Text>
            <Text>{ pokemonName }</Text>
            <Button title='Capturar' onPress={() => fetchPokemons() }></Button>
        </View>    
    )
}