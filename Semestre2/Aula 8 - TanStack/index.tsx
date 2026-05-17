import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

type Pokemon = {
  name: string
  url: string
}

const queryClient = new QueryClient()

async function fetchPokemons() {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  )

  if (!response.ok) {
    throw new Error('Erro ao buscar pokémons')
  }

  const data = await response.json()

  return data.results
}

function PokemonList() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })


  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Erro ao carregar pokémons</Text>
      </SafeAreaView>
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item: Pokemon) => item.name}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 16,
            marginBottom: 12,
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textTransform: 'capitalize',
            }}
          >
            {item.name}
          </Text>
        </View>
      )}
    />
  )
}

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <PokemonList />
      </SafeAreaView>
    </QueryClientProvider>
  )
}