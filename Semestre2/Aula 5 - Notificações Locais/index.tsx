import * as Linking from 'expo-linking';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';

// Configura como o app deve lidar com a notificação quando ele está ABERTO
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  
  const handleDeepLink = (url: string) => {
    if (url.startsWith('notify://')) {
      const path = url.replace('notify://', '/');
      router.push(path as any);
    } else {
      Linking.openURL(url);
    }
  };

  useEffect(() => {
    // Solicita permissão assim que o app carregar
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Você precisa liberar as notificações nas configurações!');
      }
    };
    requestPermissions();

    // Verifica se o app foi aberto por uma notificação
    // const checkLastNotificationResponse = async () => {
    //   const lastResponse = await Notifications.getLastNotificationResponseAsync();
    //   if (lastResponse) {
    //     const data = lastResponse.notification.request.content.data;
    //     if (data.url && typeof data.url === 'string') {
    //       handleDeepLink(data.url);
    //     }
    //   }
    // };
    // checkLastNotificationResponse();

    // Listener para quando uma notificação é tocada
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data;
      if (data.url && typeof data.url === 'string') {
        handleDeepLink(data.url);
      }
    });

    return () => subscription.remove();
  }, []);

  async function scheduleNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá! 👋",
        body: 'Esta é uma notificação local do Expo com deep link.',
        data: { url: 'https://www.google.com' }, // Deep link interno; crie a rota app/profile.tsx se necessário
      },
      trigger: { type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL, seconds: 2 }, // Dispara daqui a 2 segundos
    });
  }

  return (
    <View style={styles.container}>
      <Button 
        title="Enviar Notificação em 2s" 
        onPress={scheduleNotification} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
