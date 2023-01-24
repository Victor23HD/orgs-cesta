import { Text, StyleSheet } from 'react-native';

export default function Descricao({ children }){
    return <>
    <Text style={estilo.descricao}> {children} </Text>
    </>
}

const estilo = StyleSheet.create({
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    }
});