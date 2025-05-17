import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { Image } from 'expo-image';
import { Card } from "react-native-paper";
import { pokedexEnhanced } from "../data/constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Pokedex'>;

const PokedexScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                {pokedexEnhanced?.map(async (pokemon) => (
                    <Card key={pokemon.index} style={styles.card} 
                    onPress={() => navigation.navigate("Pokemon", { name: pokemon.name })}>
                        <Image
                            source={{ uri: pokemon.sprite }}
                            style={{ width: 100, height: 100 }}
                            contentFit="cover"
                            transition={1000}
                            />
                        <Text style={styles.pokemonText}>{`${pokemon.index}. ${pokemon.name}`}</Text>
                    </Card>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap", // Allows wrapping to the next row
        justifyContent: "space-between", // Adds spacing between cards
    },
    card: {
        width: "30%", // Each card takes up 30% of the row width
        marginBottom: 16, // Adds spacing between rows
        padding: 8,
        backgroundColor: "transparent",
        borderRadius: 4,
    },
    pokemonText: {
        fontSize: 16,
        color: "#333",
        textAlign: "center", // Centers the text inside the card
    },
});

export default PokedexScreen;