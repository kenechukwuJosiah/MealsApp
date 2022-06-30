import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { ResturantScreen } from "./src/screens/resturant.screen";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/component/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { ResturantsContextProvider } from "./src/services/resturants/mock/restaurants.context";

export default function App() {
  const [oswalLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }

  const SettingsScreen = () => {
    return (
      <SafeArea>
        <View>
          <Text>Hello this is setting view</Text>
        </View>
      </SafeArea>
    );
  };

  const MapScreen = () => {
    return (
      <SafeArea>
        <View>
          <Text>Hello this is Map screen</Text>
        </View>
      </SafeArea>
    );
  };

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Resturant") {
                    iconName = focused ? "fast-food" : "fast-food-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  } else if (route.name === "map") {
                    iconName = focused ? "map" : "map-outline";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Resturant">{ResturantScreen}</Tab.Screen>
              <Tab.Screen name="map">{MapScreen}</Tab.Screen>
              <Tab.Screen name="Settings">{SettingsScreen}</Tab.Screen>
            </Tab.Navigator>
          </NavigationContainer>
        </ResturantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
