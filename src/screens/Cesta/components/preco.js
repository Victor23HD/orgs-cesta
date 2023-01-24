import { Text, StyleSheet } from "react-native";

export default function Preco( { children } )
{
    return <>
        <Text style={estilo.preco}> {children}</Text>
    </>
}

const estilo = StyleSheet.create({
  preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    } 
})