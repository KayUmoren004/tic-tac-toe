import React from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const Cell = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Cell</Text>
    </View>
  );
};

export default Cell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
