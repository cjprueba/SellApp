import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Icon from 'react-native-feather';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon.Home height="25" weight="25" stroke="gray"/>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Favorito',
          tabBarIcon: ({ color, focused }) => (
            <Icon.Heart height="25" weight="25" stroke="gray"/>
          ),
        }}
      />
      <Tabs.Screen
        name="crear"
        options={{
          title: 'Crear',
          tabBarIcon: ({ color, focused }) => (
            <Icon.PlusCircle height="25" weight="25" stroke="gray"/>
          ),
        }}
      />
      <Tabs.Screen
        name="notificaciones"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color, focused }) => (
            <Icon.Bell height="25" weight="25" stroke="gray"/>
          ),
        }}
      />
      <Tabs.Screen
        name="cuenta"
        options={{
          title: 'Cuenta',
          tabBarIcon: ({ color, focused }) => (
            <Icon.Settings height="25" weight="25" stroke="gray"/>
          ),
        }}
      />
    </Tabs>
  );
}
