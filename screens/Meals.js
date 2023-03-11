import { FlatList, StyleSheet } from "react-native";

import { MEALS } from "../data/data";
import MealCard from "../components/ui/cards/MealCard";

function Meals() {
  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={MEALS}
      renderItem={({ item }) => {
        if (item.categoryIds.includes("c2")) {
          return <MealCard meal={item} />;
        }
      }}
      keyExtractor={(meal) => meal.id}
    />
  );
}

export default Meals;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 50,
  },
});
