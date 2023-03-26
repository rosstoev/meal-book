import { View, Text, StyleSheet, Image, SectionList } from "react-native";
import { useLayoutEffect, useContext } from "react";

import { FavoriteMealsContext } from "../store/context/favoriteMealContext";

import Title from "../components/ui/Title";
import { MEALS } from "../data/data";
import IconButton from "../components/ui/IconButton";

function MealDetail({ route, navigation }) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  const favoriteMealsContext = useContext(FavoriteMealsContext);
  const isMealFavorite = favoriteMealsContext.ids.includes(mealId);

  const cookingInfo = [
    { title: "ingredients", data: selectedMeal.ingredients },
    { title: "steps", data: selectedMeal.steps },
  ];
  
  function onPressFavoriteButtonHandler() {
    if (isMealFavorite) {
      favoriteMealsContext.removeFavoriteMealId(mealId);
    } else {
      favoriteMealsContext.addFavoriteMealId(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={isMealFavorite ? "star" : "star-outline"}
            size={16}
            color="white"
            onPress={onPressFavoriteButtonHandler}
          />
        );
      },
    });
  }, [selectedMeal, navigation, isMealFavorite]);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.infoContainer}>
        <Title style={styles.title}>{selectedMeal.title}</Title>
        <Text style={styles.subTitle}>
          {selectedMeal.duration}m{" "}
          <Text style={styles.infoElement}>{selectedMeal.complexity}</Text>{" "}
          <Text style={styles.infoElement}>{selectedMeal.affordability}</Text>{" "}
        </Text>
      </View>
      <SectionList
        style={styles.listContainer}
        sections={cookingInfo}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            <Text style={styles.listItem}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.listHeaderElement}>
            <Text style={styles.listHeaderTitle}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    height: "100%",
  },
  image: {
    minWidth: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
  },
  infoElement: {
    textTransform: "uppercase",
  },
  subTitle: {
    color: "#ffffff",
    fontSize: 12,
  },
  listContainer: {
    marginHorizontal: 45,
    marginBottom: 60,
  },
  listHeaderElement: {
    alignItems: "center",
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  listItemContainer: {
    alignItems: "center",
    backgroundColor: "#F2DF3A",
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  listItem: {
    justifyContent: "center",
    textAlign: "center",
    color: "#303030",
    fontWeight: "bold",
  },
});
