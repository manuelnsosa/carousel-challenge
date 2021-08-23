import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "./src/components/Carousel.jsx";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel />
    </View>
  );
}
