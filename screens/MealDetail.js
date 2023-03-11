import { View, Text, StyleSheet, Image, SectionList } from "react-native";

import Title from "../components/ui/Title";

import { MEALS } from "../data/data";

function MealDetail() {
  const selectedMeal = MEALS[1];
  const cookingInfo = [
    { title: "ingredients", data: selectedMeal.ingredients },
    {title: 'steps', data: selectedMeal.steps}
  ];

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
          renderItem={({item}) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
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
    color: "#ffe6dc",
  },
  infoElement: {
    textTransform: "uppercase",
  },
  subTitle: {
    color: "#fff8f5",
    fontSize: 12
  },
  listContainer: {
    marginHorizontal: 45,
    marginBottom: 60
  },
  listHeaderElement: {
    alignItems: "center"
  },
  listHeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#e3b28f'
  },
  listItemContainer: {
    alignItems: "center",
    backgroundColor: "#e3b28f",
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  listItem: {
    justifyContent: "center",
    textAlign: "center",
    color: "#47372b",
    fontWeight: "bold"
  }
});
