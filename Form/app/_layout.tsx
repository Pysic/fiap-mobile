import { Stack } from 'expo-router';
import React from 'react';
import { UserProvider } from '../context/UserContext';

export default function Layout() {
  return (
    <UserProvider>
      <Stack />
    </UserProvider>
  );
}