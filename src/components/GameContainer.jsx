import React from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const GameContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>GameContainer</Text>
    </View>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
