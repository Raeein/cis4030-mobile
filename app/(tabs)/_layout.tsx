import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
interface TabBarIconProps {
  IconComponent: React.ElementType;
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}

function TabBarIcon(props: TabBarIconProps) {
  return <props.IconComponent size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].background,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="clockcircleo" color={color} />,
        }}
      />
      <Tabs.Screen
        name="itinerary/index"
        options={{
          title: 'Itinerary',
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={AntDesign} name="calendar" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="matching/index"
        options={{
          title: 'Matching',
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={FontAwesome} name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon IconComponent={Ionicons} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
