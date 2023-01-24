import React from "react";
import { Text, StyleSheet } from "react-native";

export default function NameFarm({ children }) {
    return <>
        <Text style={estilo.nameFarm}> {children} </Text>
    </>
}

const estilo = StyleSheet.create({
    nameFarm:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
})