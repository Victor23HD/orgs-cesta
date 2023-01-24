import { Text, StyleSheet } from "react-native";

export default function Botao( { children } )
{
    return <>
        <Text style={estilo.botao}> { children } </Text>
    </>
}

const estilo = StyleSheet.create({
    botao:
    {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 26,
        color: "#fff",
    }
})