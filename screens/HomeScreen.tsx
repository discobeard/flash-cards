import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

type RootStackParamList = {
  Home: undefined;
  Pokedex: undefined;
}

type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate("Pokedex")}
                style={styles.buttonWrapper}
            >
                Go to Pokedex
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    title: {
      fontSize: 28,
      fontWeight: '600',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 16,
      color: '#555',
      marginBottom: 24,
      textAlign: 'center',
    },
    buttonWrapper: {
      marginTop: 20,
      width: '60%',
    },
  });

  export default HomeScreen;