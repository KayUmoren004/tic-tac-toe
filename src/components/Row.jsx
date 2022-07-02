import React from "react";

// Dependencies
import { StyleSheet, Text, View } from "react-native";

const Row = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Row</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
