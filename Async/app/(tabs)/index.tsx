import { Image } from 'expo-image';
import { Button, StyleSheet, TextInput } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useEffect, useState } from 'react';
import { storageClear, storageGet, storageSave } from './storage';

export default function HomeScreen() {
  const [valueName, setValueName] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    storageGet().then((value) => setName(value ?? ""));
  }, [])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome {name} !</ThemedText>
        <HelloWave />
      </ThemedView>
      <TextInput placeholder='Your Name' onChangeText={(value) => setValueName(value) }></TextInput>
      <Button title="Save" onPress={ () => { storageSave(valueName); setName(valueName) }}></Button>
      <Button title="Delete" onPress={ () => { storageClear(); setName("") }}></Button>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
