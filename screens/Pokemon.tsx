import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import PokemonService from '../service/pokemon-service';
import { PokemonDetails } from '../types/types';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { Button, Card } from 'react-native-paper';
import { overrides, pokeball, legendaryPokemon, masterball } from '../data/constants';

interface PokemonProps {
    name: string
}

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'Pokemon'>;

type Props = {
    route: PokemonScreenRouteProp;
  };

const Pokemon: React.FC<Props> = ({route}) => {
    const reducer = 5;
    const { name } = route.params; // Extract the "name" para
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
    const isLegendary = legendaryPokemon.find((pokemon) => pokemon === name);
    const [ topCoordinate, setTopCoordinate ] = useState(440);
    const [ leftCoordinate, setLeftCoordinate ] = useState(0);
    const [ rotate, setRotate ] = useState(0);
    const topC = useRef(440)

    const [ isLoading , setIsLoading ] = useState(false)


    const adjustTopCoordinate = async () => {
        if (topC.current > 200) {
            setTimeout(async () => {
                setTopCoordinate((prev) => prev - reducer); // Decrease the top position
                topC.current = topC.current - reducer
                setIsLoading(false)
                await adjustTopCoordinate(); // Call the function recursively
            }, 10); // Delay for smooth animation
        } else {
            return
        }
        setIsLoading(false)
    };

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const index = overrides.find((pokemon) => pokemon.name === name)?.index.toString();
            const details = await PokemonService.getPokemonDetail(index ? index : name);
            setPokemonDetails(details);
        }
        fetchPokemonDetails();
    }, [name]);
    return (
        <View>
            {pokemonDetails && 
            <Card style={styles.card}>
                <Image
                    source={{ uri: pokemonDetails.artwork }}
                    style={{ width: 300, height: 300 }}
                    contentFit="fill"
                    transition={1000}
                />
                </Card>}
            <Text style={styles.pokemonText}>{name}</Text>
            <Button
            style={styles.button}
                mode="contained"
                onPress={() => console.log("Button Pressed")}
                >
                Hear them talk
                </Button>
                <Image
                    source={{ uri: isLegendary ? masterball : pokeball }}
                    style={{            
                        width: 100,
                        height: 100,
                        marginLeft: 150,
                        marginTop: 20,
                        transform: [{ rotate: `${rotate}deg` }],
                        position: 'absolute',
                        top: topCoordinate,
                        left: leftCoordinate,}}
                    contentFit="fill"
                    transition={1000}
                    onTouchStart={async () => {
                        await adjustTopCoordinate()
                    }}
                    />
        </View>
    )
    }

    const styles = StyleSheet.create({
        pokemonText: {
            fontSize: 50,
            color: "#333",
            textAlign: "center", // Centers the text inside the card
            shadowColor: "#000",
        },
        container: {
            padding: 16,
            backgroundColor: "#fff",
        },
        card: {
            backgroundColor: 'transparent',
            width: 300,
            height: 300,
            marginLeft: 50,
            marginTop: 50,
        },
        button: {
            width: 200,
            marginLeft:100,
            marginTop: 10,
        },
        pokeball: {
            width: 100,
            height: 100,
            marginLeft: 150,
            marginTop: 20,
            transform: [{ rotate: '0deg' }],
            position: 'absolute',
            top: 440,
            
        }
    });
export default Pokemon;