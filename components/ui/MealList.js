import { FlatList, StyleSheet } from "react-native";

import MealCard from "./cards/MealCard";

function MealList({meals, navigation}){
    return (
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={meals}
          renderItem={({ item }) => <MealCard meal={item} navigation={navigation} />}
          keyExtractor={(meal) => meal.id}
        />
      );
}

export default MealList;

const styles = StyleSheet.create({
    flatListContainer: {
      paddingBottom: 50,
      alignItems: "center"
    },
  });  