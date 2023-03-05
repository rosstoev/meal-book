import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "./ui/Title";

function Navigation({ children }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name="md-menu" size={24} color="white" />
      </View>
      <View style={styles.titleContainer}>
        <Title>{children}</Title>
      </View>
    </View>
  );
}

export default Navigation;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    padding: 10,
  },
  iconContainer: {
    flex: 0.4,
  },
  titleContainer: {
    flex: 0.6,
  },
  title: {
    color: "#ffffff",
  },
});
