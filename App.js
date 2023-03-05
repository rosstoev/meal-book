import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Navigation from './components/Navigation';
import Categories from './screens/Categories';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Navigation>Navigation</Navigation>
      <View style={styles.contentContainer}>
      <Categories />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#3d1c0f',
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#754136",
    borderTopWidth: 4,
    borderTopColor: "#774e46",
  },
});
