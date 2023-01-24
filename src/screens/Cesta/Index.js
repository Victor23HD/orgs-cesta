import React from "react";
import { ScrollView ,StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Title from "./components/Title";
import NameFarm from "./components/NameFarm";
import Descricao from "./components/Descricao";
import Botao from "./components/Botao";
import Preco from "./components/preco";
import Itens from "./components/Itens";

const width = Dimensions.get('screen').width;


export default function Cesta({detalhes, itens}) {
    return <ScrollView>
        <Image source={require("../../../assets/topo.png")} style={styles.topo} />
        <Title>{detalhes.nome}</Title>
        <View style={styles.cesta}>
            
            <View style={styles.farm}>
                <Image source={detalhes.logo} style={styles.imgFarm} />
                <NameFarm>{detalhes.NameFarm}</NameFarm>
            </View>
            <Descricao>{detalhes.descricao}</Descricao>
            <Preco>{detalhes.preco}</Preco>
            <TouchableOpacity style={styles.botao}> 
              <Botao> {detalhes.botao} </Botao>   
            </TouchableOpacity> 
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    cesta:
    {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    topo:{
        width: "100%",
        height: 578 / 768 * width,
    },
    farm:
    {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imgFarm:
    {
        width: 32,
        height: 32,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85", 
        paddingVertical: 16,
        borderRadius: 6,
    }
});