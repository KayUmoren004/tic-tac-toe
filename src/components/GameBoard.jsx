import React from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const GameBoard = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>GameBoard</Text>
    </View>
  );
};

export default GameBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
