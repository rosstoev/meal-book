import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function MealCard({ meal }) {

    function onPressHandler() {}

  return (
    <View style={styles.mainContainer} elevation={5}>
      <Pressable style={styles.pressableContainer} onPress={onPressHandler} android_ripple={styles.ripple}>
        <Image style={styles.logoImage} source={{ uri: meal.imageUrl }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>
            {meal.duration}m{" "}
            <Text style={styles.infoElement}>{meal.complexity}</Text>{" "}
            <Text style={styles.infoElement}>{meal.affordability}</Text>{" "}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealCard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
    width: 300,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 5,
    
  },
  pressableContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: 180,
  },
  titleContainer: {
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  infoContainer: {
    padding: 10,
  },
  infoElement: {
    textTransform: "uppercase",
  },
  ripple: {
    color: '#ecececb7', 
    foreground: true
  }
});
