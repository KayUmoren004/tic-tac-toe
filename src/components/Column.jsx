import React, { useEffect, useState } from "react";

// Dependencies
import { StyleSheet, View, Animated } from "react-native";

import { LeftColumn, RightColumn, CenterColumn } from "../utils/CellNames";
import Cell from "./Cell";

import {
  diagWinCase1,
  diagWinCase2,
  horWinCase1,
  horWinCase2,
  horWinCase3,
  vertWinCase1,
  vertWinCase2,
  vertWinCase3,
} from "../utils/Wins";

const Column = ({
  score,
  setScore,
  players,
  winner,
  setWinner,
  p1Moves,
  p2Moves,
  setP1Moves,
  setP2Moves,
  isDisabled,
  setIsDisabled,
  cellsOccupied,
  setCellsOccupied,
  currentCell,
  setCurrentCell,
  currentPlayer,
  setCurrentPlayer,
  animation,
  setAnimation,
  mode,
}) => {
  const player1 = "X";
  const player2 = "O";

  //  console.log({ botMove: botMove() });

  const [botIsEnabled, setBotIsEnabled] = useState(false);

  // Functions

  // if array contains array
  const compareArrays = (a, b) => {
    let newArray = [];
    for (let i = 0; i < b.length; i++) {
      if (a.includes(b[i])) {
        newArray.push(b[i]);
      }
    }
    // if new array length is equal to b array length and new array elements is equal to b array, return true
    if (newArray.length === b.length && newArray.every((v) => b.includes(v))) {
      return true;
    }
    return false;
  };

  const cellPress = () => {
    // Check if player has won
    checkForWin();
  };

  // disable bot if mode is real player
  const disableBot = () => {
    if (mode === "real") {
      setBotIsEnabled(false);
    } else {
      setBotIsEnabled(true);
    }
  };

  // check if mode is "bot" on mount
  useEffect(() => {
    disableBot();
  }, []);

  const cellPressIn = (cellName) => {
    // Check if cell is occupied
    if (cellsOccupied.includes(cellName)) {
      console.log(`${cellName} is occupied`);
      // if mode is bot, rerun botMove
      if (mode === "bot") {
        botMove();
      }
    } else {
      // Let User Play in the cell then set the cell to occupied

      setCellsOccupied([...cellsOccupied, cellName]);
      setCurrentPlayer(currentPlayer === player1 ? player2 : player1);

      // Add move to player's move array
      currentPlayer === player1
        ? setP1Moves([...p1Moves, cellName])
        : setP2Moves([...p2Moves, cellName]);
    }

    // Check if player has won
    checkForWin();
  };

  const cellPressOut = () => {
    checkForWin();
  };

  const checkForWin = () => {
    // check if player 1 wins diagonally using compareArrays
    if (p1Moves.length >= 2) {
      if (
        compareArrays(p1Moves, diagWinCase1) ||
        compareArrays(p1Moves, diagWinCase2)
      ) {
        setWinner(players.p1);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1 + 1,
          p2: score.p2,
        });
        console.log(`Diag: ${players.p1} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if player 2 wins diagonally
    if (p2Moves.length >= 2) {
      if (
        compareArrays(p2Moves, diagWinCase1) ||
        compareArrays(p2Moves, diagWinCase2)
      ) {
        setWinner(players.p2);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1,
          p2: score.p2 + 1,
        });
        console.log(`Diag: ${players.p2} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if player 1 wins horizontally
    if (p1Moves.length >= 2) {
      if (
        compareArrays(p1Moves, horWinCase1) ||
        compareArrays(p1Moves, horWinCase2) ||
        compareArrays(p1Moves, horWinCase3)
      ) {
        setWinner(players.p1);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1 + 1,
          p2: score.p2,
        });
        console.log(`Hor: ${players.p1} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if player 2 wins horizontally
    if (p2Moves.length >= 2) {
      if (
        compareArrays(p2Moves, horWinCase1) ||
        compareArrays(p2Moves, horWinCase2) ||
        compareArrays(p2Moves, horWinCase3)
      ) {
        setWinner(players.p2);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1,
          p2: score.p2 + 1,
        });
        console.log(`Hor: ${players.p2} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if player 1 wins vertically
    if (p1Moves.length >= 2) {
      if (
        compareArrays(p1Moves, vertWinCase1) ||
        compareArrays(p1Moves, vertWinCase2) ||
        compareArrays(p1Moves, vertWinCase3)
      ) {
        setWinner(players.p1);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1 + 1,
          p2: score.p2,
        });
        console.log(`Ver: ${players.p1} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if player 2 wins vertically
    if (p2Moves.length >= 2) {
      if (
        compareArrays(p2Moves, vertWinCase1) ||
        compareArrays(p2Moves, vertWinCase2) ||
        compareArrays(p2Moves, vertWinCase3)
      ) {
        setWinner(players.p2);
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start();
        setScore({
          p1: score.p1,
          p2: score.p2 + 1,
        });
        console.log(`Ver: ${players.p2} has won!`);
        setIsDisabled(true);
        return false;
      }
    }

    // if no one wins
    if (p1Moves.length + p2Moves.length === 9) {
      setWinner("Tie");
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      setScore({
        p1: "Tie",
        p2: "Tie",
      });
      console.log("Tie!");
      setIsDisabled(true);
    }
  };

  // console.log({
  //   "Player 1 Moves": p1Moves,
  //   "Player 2 Moves": p2Moves,
  // });

  const setInput = (cellName) => {
    return p1Moves.includes(cellName)
      ? "X"
      : "" || p2Moves.includes(cellName)
      ? "O"
      : "";
  };

  // Dynamically set text color based on player turn
  const setTextColor = (cellName) => {
    return currentPlayer === player1
      ? p1Moves.includes(cellName)
        ? "#00b0ffff"
        : "#e0bad7ff"
      : p2Moves.includes(cellName)
      ? "#e0bad7ff"
      : "#00b0ffff";
  };

  // Dynamically change background color based on the winner
  const setBoardColor = () => {
    switch (winner) {
      case players.p1:
        return p1Wins;
      case players.p2:
        return p2Wins;
      case "Tie":
        return tie;

      default:
        return styles.container;
    }
  };

  const p1Wins = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(224, 186, 215, 0)", "rgba(224, 186, 215, 1)"],
    }),
    flexDirection: "row",
    borderColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(224, 186, 215, 0)", "rgba(224, 186, 215, 1)"],
    }),
    borderRadius: 25 / 2,
    // borderWidth: 25,
  };
  const p2Wins = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(0, 176, 255, 0)", "rgba(0, 176, 255, 1)"],
    }),
    flexDirection: "row",
    borderColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(0, 176, 255, 0)", "rgba(0, 176, 255, 1)"],
    }),
    borderRadius: 25 / 2,
  };
  const tie = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(136, 146, 176, 0)", "rgba(136, 146, 176, 1)"],
    }),
    flexDirection: "row",
    borderColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(136, 146, 176, 0)", "rgba(136, 146, 176, 1)"],
    }),
    borderRadius: 25 / 2,
  };

  // Bot logic
  const botMove = () => {
    // Constraints for bot to make a move

    // 0 - 11 for Left Column
    // 0 - 3 for LTE
    // 4 - 7 for LME
    // 8 - 11 for LBE

    // 12 - 23 for Center Column
    // 12 - 15 for CTE
    // 16 - 19 for CME
    // 20 - 23 for CBE

    // 24 - 35 for Right Column
    // 24 - 27 for RTE
    // 28 - 31 for RME
    // 32 - 35 for RBE

    // Randomly select a cell
    const randomCell = Math.floor(Math.random() * 36);

    // Bot Cell Variable

    // Switch case for botCell based on randomCell and constraints
    const botCell = () => {
      switch (true) {
        case randomCell >= 0 && randomCell <= 3:
          return LeftColumn[0];

        case randomCell >= 4 && randomCell <= 7:
          return LeftColumn[1];

        case randomCell >= 8 && randomCell <= 11:
          return LeftColumn[2];

        case randomCell >= 12 && randomCell <= 15:
          return CenterColumn[0];

        case randomCell >= 16 && randomCell <= 19:
          return CenterColumn[1];

        case randomCell >= 20 && randomCell <= 23:
          return CenterColumn[2];

        case randomCell >= 24 && randomCell <= 27:
          return RightColumn[0];

        case randomCell >= 28 && randomCell <= 31:
          return RightColumn[1];

        case randomCell >= 32 && randomCell <= 35:
          return RightColumn[2];
      }
    };

    // console.log(`Bot Move: ${botCell()}`);

    cellPressIn(botCell());
  };

  // always check if current player is player 2 and cell is not occupied, if true run botMove with useEffect
  useEffect(() => {
    // only run if bot is enabled
    if (botIsEnabled) {
      if (currentPlayer === player2) {
        botMove();
      }
    }
  }, [currentPlayer]);

  // check for win after every move
  useEffect(() => {
    checkForWin();
  }, [p1Moves, p2Moves]);

  return (
    <Animated.View style={setBoardColor()}>
      <View>
        {
          // Map LeftColumn to Cell components
          LeftColumn.map((cellName, index) => {
            return (
              <Cell
                key={index}
                type={cellName}
                onPress={() => cellPress()}
                onPressIn={() => cellPressIn(cellName)}
                onPressOut={() => cellPressOut()}
                input={setInput(cellName)}
                isDisabled={isDisabled}
                textColor={setTextColor(cellName)}
              />
            );
          })
        }
      </View>
      <View>
        {
          // Map CenterColumn to Cell components
          CenterColumn.map((cellName, index) => {
            return (
              <Cell
                key={index}
                type={cellName}
                onPress={() => cellPress()}
                onPressIn={() => cellPressIn(cellName)}
                onPressOut={() => cellPressOut()}
                input={setInput(cellName)}
                isDisabled={isDisabled}
                textColor={setTextColor(cellName)}
              />
            );
          })
        }
      </View>
      <View>
        {
          // Map RightColumn to Cell components
          RightColumn.map((cellName, index) => {
            return (
              <Cell
                key={index}
                type={cellName}
                onPress={() => cellPress()}
                onPressIn={() => cellPressIn(cellName)}
                onPressOut={() => cellPressOut()}
                input={setInput(cellName)}
                isDisabled={isDisabled}
                textColor={setTextColor(cellName)}
              />
            );
          })
        }
      </View>
    </Animated.View>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
