import { Text, StyleSheet } from "react-native";

function Title({children, style}) {
    return (<Text style={[styles.title, style]}>{children}</Text>);
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    }
})