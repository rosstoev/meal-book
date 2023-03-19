import { FlatList, StyleSheet } from "react-native";
import {useLayoutEffect} from "react";

import { MEALS } from "../data/data";
import MealCard from "../components/ui/cards/MealCard";
import { CATEGORIES } from "../data/data";

function Meals({route, navigation}) {
  const categoryId = route.params.categoryId;
  const categoryMeals = MEALS.filter((meal) => {return meal.categoryIds.includes(categoryId)})
  const selectedCategory = CATEGORIES.find(category => category.id == categoryId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title
    })
  }, [categoryId, navigation])
  
  
  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={categoryMeals}
      renderItem={({ item }) => <MealCard meal={item} navigation={navigation} />}
      keyExtractor={(meal) => meal.id}
    />
  );
}

export default Meals;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 50,
    alignItems: "center"
  },
});
