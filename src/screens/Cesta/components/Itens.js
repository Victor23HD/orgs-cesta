import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";

export default function Itens({ titulo, lista }) {
    const renderItem = ({ item: {nome, imagem} }) => <View key={nome} style={estilo.itens}>
        <Image source={imagem} style={estilo.imagem} />
        <Text style={estilo.list}> {nome} </Text>
    </View>

    return <>
        <Text style={estilo.title}> {titulo} </Text>
        <FlatList 
        data={lista}
        renderItem={renderItem}
        keyExtractor={({ nome }) => nome}
        />
    </>
}

const estilo = StyleSheet.create({
    title:
    {
        color: "#464646",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32,
    },
    list:
    {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "italic",
        lineHeight: 26,
        color: "#464646"
    },
    itens:
    {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ECECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },
    imagem:
    {
        width: 46,
        height: 46,
    }
})
