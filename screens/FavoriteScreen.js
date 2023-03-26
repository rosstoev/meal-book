import { StyleSheet, View } from "react-native";
import { useContext } from "react";

import { FavoriteMealsContext } from "../store/context/favoriteMealContext";
import { MEALS } from "../data/data";
import MealList from "../components/ui/MealList";
import Title from "../components/ui/Title";

function FavoriteScreen({navigation}) {
  const favoriteMealsContext = useContext(FavoriteMealsContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id))

  if (favoriteMeals.length == 0) {
    return <View style={styles.textContainer}><Title>There is no favorite meals</Title></View>
  }

  return <MealList meals={favoriteMeals} navigation={navigation}/>;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
})
