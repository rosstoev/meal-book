import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Categories from "./screens/Categories";
import Meals from "./screens/Meals";
import MealDetail from "./screens/MealDetail";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavoriteMealsContextProvider from "./store/context/favoriteMealContext";

const Stack = createNativeStackNavigator();

// in order to work react-native-reanimated for drawer you must look in babe.confin.js file
// then you have to clear cache with: npm cache clean --force and run: npx expo start --clear --tunnel
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#090a38" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#35379c" },
        drawerActiveBackgroundColor: "#35379c",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#090a38",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorite",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteMealsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#090a38" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#35379c" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{
                title: "All categories",
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={Meals} />
            <Stack.Screen name="MealDetail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteMealsContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#070833",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#754136",
    borderTopWidth: 4,
    borderTopColor: "#774e46",
  },
});
