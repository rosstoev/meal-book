import { StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/data";
import { CATEGORIES } from "../data/data";
import MealList from "../components/ui/MealList";

function Meals({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });
  const selectedCategory = CATEGORIES.find(
    (category) => category.id == categoryId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [categoryId, navigation]);

  return <MealList meals={categoryMeals} navigation={navigation} />;
}

export default Meals;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 50,
    alignItems: "center",
  },
});
