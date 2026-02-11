import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="details"
        options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
        }}
    />
    <Stack
      screenOptions={{
        animation: 'slide_from_right',
        gestureEnabled: true,
      }}
    />
    </Stack>
    
  );
}