import React from "react";

// Dependencies
import { StyleSheet, View } from "react-native";

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
}) => {
  const player1 = "X";
  const player2 = "O";

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

  const cellPressIn = (cellName) => {
    // Check if cell is occupied
    if (cellsOccupied.includes(cellName)) {
      console.log(`${cellName} is occupied`);
    } else {
      // Let User Play in the cell then set the cell to occupied
      setCurrentCell(cellName);
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
        return styles.p1Wins;
      case players.p2:
        return styles.p2Wins;
      case "Tie":
        return styles.tie;

      default:
        return styles.container;
    }
  };

  return (
    <View style={setBoardColor()}>
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
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  p1Wins: {
    backgroundColor: "#e0bad7ff",
    flexDirection: "row",
    borderColor: "#e0bad7ff",
    borderRadius: 25 / 2,
    borderWidth: 25,
  },
  p2Wins: {
    backgroundColor: "#00b0ffff",
    flexDirection: "row",
    borderColor: "#00b0ffff",
    borderRadius: 25 / 2,
    borderWidth: 25,
  },
  tie: {
    backgroundColor: "#8892b0",
    flexDirection: "row",
    borderColor: "#8892b0",
    borderRadius: 25 / 2,
    borderWidth: 25,
  },
});
