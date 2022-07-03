import React from "react";

// Dependencies
import { SafeAreaView, StyleSheet, Alert } from "react-native";
import GameBoard from "./GameBoard";

const GameContainer = () => {
  // Create game modes (one for two real players, one for one AI player and one real player)
  const [gameMode, setGameMode] = React.useState();

  // Prompt for game mode
  const promptGameMode = () => {
    Alert.alert(
      "Game Mode",
      "Would you like to play against a real player or an AI?",
      [
        {
          text: "Real Player",
          onPress: () => setGameMode("real"),
        },
        {
          text: "AI",
          onPress: () => setGameMode("bot"),
        },
      ],
      { cancelable: false }
    );
  };

  // Run promptGameMode on mount should only run once
  React.useEffect(() => {
    promptGameMode();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GameBoard mode={gameMode} />
    </SafeAreaView>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
