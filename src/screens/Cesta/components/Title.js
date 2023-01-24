import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
    return <>
        <Text style={estilo.title}> {children} </Text>
    </>
}

const estilo = StyleSheet.create({
    title:{
        paddingVertical: 8,
        marginLeft: 8,
        width: "100%",
        fontSize: 26,
        color: "#464646",
        fontWeight: "bold",
    },
})