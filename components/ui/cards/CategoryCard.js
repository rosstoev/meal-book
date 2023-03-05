import { View, Text, StyleSheet } from "react-native";

function CategoryCard({ category }) {
  return (
    <View
      style={[styles.categoryContainer, { backgroundColor: category.color }]}
      elevation={5}
    >
      <Text style={styles.categorytTitle}>{category.title}</Text>
    </View>
  );
}

export default CategoryCard;

const styles = StyleSheet.create({
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
