import { Text, StyleSheet } from "react-native";

function Title({children}) {
    return (<Text style={styles.title}>{children}</Text>);
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    }
})