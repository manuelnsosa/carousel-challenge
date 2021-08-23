import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "./src/components/Carousel.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textInput: {
      color: "green",
    },
    alignItems: "center",
    justifyContent: "center",
  },
});
