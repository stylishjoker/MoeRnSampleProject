import React from "react"
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native"

type Props = {
    title: string;
    callback: () => void;
    bgColor: string;
    color: string;
}
const NewButton: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity style={[styles.container, {
            backgroundColor: props.bgColor,
        }]} onPress={props.callback} >
            <Text style={[styles.text, { color: props.color }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        borderRadius: 25,
        height: 40,
        borderColor: "#333"
    },
    text: {
        textAlign: "center",
        lineHeight: 40,
        textTransform: "uppercase",
        fontWeight: "900",
    }
})
export default NewButton;