import { View, StyleSheet, FlatList, Text } from "react-native";

import { CATEGORIES } from "../data/data";
import CategoryCard from "../components/ui/cards/CategoryCard";

function Categories() {
  return (
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(category) => category.id}
      />
  );
}

export default Categories;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 50,
  },
  categoryContainer: {
    margin: 15,
    width: 150,
    height: 140,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  categorytTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
