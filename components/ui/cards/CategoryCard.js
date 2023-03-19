import { View, Text, StyleSheet, Pressable } from "react-native";

function CategoryCard({ category, navigation }) {
  function onPressCategory() {
    navigation.navigate('Meals', {
      categoryId: category.id,
    })
  }

  return (
    <View
      style={[styles.categoryContainer, { backgroundColor: category.color }]}
      elevation={5}
    >
      <Pressable style={styles.pressContainer} onPress={onPressCategory} android_ripple={styles.ripple}>
        <View>
            <Text style={styles.categorytTitle}>{category.title}</Text>
        </View>
      </Pressable>
      
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
    overflow: 'hidden',
  },
  pressContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  categorytTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ripple: {
    color: "#acacac2d",
  },
});
