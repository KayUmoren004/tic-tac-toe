import { LeftColumn, RightColumn, CenterColumn } from "./CellNames";

// How to win a game of Tic Tac Toe

// 1 - Diagonally
export const diagWinCase1 = [LeftColumn[0], CenterColumn[1], RightColumn[2]];
export const diagWinCase2 = [LeftColumn[2], CenterColumn[1], RightColumn[0]];

// 2 - Horizontally
export const horWinCase1 = [LeftColumn[0], CenterColumn[0], RightColumn[0]];
export const horWinCase2 = [LeftColumn[1], CenterColumn[1], RightColumn[1]];
export const horWinCase3 = [LeftColumn[2], CenterColumn[2], RightColumn[2]];

// 3 - Vertically
export const vertWinCase1 = [RightColumn[0], RightColumn[1], RightColumn[2]];
export const vertWinCase2 = [LeftColumn[0], LeftColumn[1], LeftColumn[2]];
export const vertWinCase3 = [CenterColumn[0], CenterColumn[1], CenterColumn[2]];

/*
// 1 - Diagonally
export const diagWinCase1 = [LeftColumn[0]+CenterColumn[1]+RightColumn[2]];
export const diagWinCase2 = [LeftColumn[2]+CenterColumn[1]+RightColumn[0]];

// 2 - Horizontally
export const horWinCase1 = [LeftColumn[0]+CenterColumn[0]+RightColumn[0]];
export const horWinCase2 = [LeftColumn[1]+CenterColumn[1]+RightColumn[1]];
export const horWinCase3 = [LeftColumn[2]+CenterColumn[2]+RightColumn[2]];

// 3 - Vertically
export const vertWinCase1 = [RightColumn[0]+RightColumn[1]+RightColumn[2]];
export const vertWinCase2 = [LeftColumn[0]+LeftColumn[1]+LeftColumn[2]];
export const vertWinCase3 = [CenterColumn[0]+CenterColumn[1]+CenterColumn[2]];
*/

/* 
    // // if player 1 wins
    // for (let i = 0; i < p1Moves.length - 1; i++) {
    //   if (
    //     (p1Moves[i] === diagWinCase1[0] &&
    //       p1Moves[i + 1] === diagWinCase1[1] &&
    //       p1Moves[i + 2] === diagWinCase1[2]) ||
    //     (p1Moves[i] === horWinCase1[0] &&
    //       p1Moves[i + 1] === horWinCase1[1] &&
    //       p1Moves[i + 2] === horWinCase1[2]) ||
    //     (p1Moves[i] === vertWinCase1[0] &&
    //       p1Moves[i + 1] === vertWinCase1[1] &&
    //       p1Moves[i + 2] === vertWinCase1[2]) ||
    //     (p1Moves[i] === diagWinCase2[0] &&
    //       p1Moves[i + 1] === diagWinCase2[1] &&
    //       p1Moves[i + 2] === diagWinCase2[2]) ||
    //     (p1Moves[i] === horWinCase2[0] &&
    //       p1Moves[i + 1] === horWinCase2[1] &&
    //       p1Moves[i + 2] === horWinCase2[2]) ||
    //     (p1Moves[i] === vertWinCase2[0] &&
    //       p1Moves[i + 1] === vertWinCase2[1] &&
    //       p1Moves[i + 2] === vertWinCase2[2]) ||
    //     (p1Moves[i] === diagWinCase3[0] &&
    //       p1Moves[i + 1] === diagWinCase3[1] &&
    //       p1Moves[i + 2] === diagWinCase3[2]) ||
    //     (p1Moves[i] === horWinCase3[0] &&
    //       p1Moves[i + 1] === horWinCase3[1] &&
    //       p1Moves[i + 2] === horWinCase3[2]) ||
    //     (p1Moves[i] === vertWinCase3[0] &&
    //       p1Moves[i + 1] === vertWinCase3[1] &&
    //       p1Moves[i + 2] === vertWinCase3[2])
    //   ) {
    //     setWinner(players.p1);
    //     setScore(score.p1 + 1);
    //     console.log(`${players.p1} has won!`);
    //     return;
    //   }
    // }

    // // if player 2 wins

    // for (let i = 0; i < p2Moves.length - 1; i++) {
    //   if (
    //     (p2Moves[i] === diagWinCase1[0] &&
    //       p2Moves[i + 1] === diagWinCase1[1] &&
    //       p2Moves[i + 2] === diagWinCase1[2]) ||
    //     (p2Moves[i] === horWinCase1[0] &&
    //       p2Moves[i + 1] === horWinCase1[1] &&
    //       p2Moves[i + 2] === horWinCase1[2]) ||
    //     (p2Moves[i] === vertWinCase1[0] &&
    //       p2Moves[i + 1] === vertWinCase1[1] &&
    //       p2Moves[i + 2] === vertWinCase1[2]) ||
    //     (p2Moves[i] === diagWinCase2[0] &&
    //       p2Moves[i + 1] === diagWinCase2[1] &&
    //       p2Moves[i + 2] === diagWinCase2[2]) ||
    //     (p2Moves[i] === horWinCase2[0] &&
    //       p2Moves[i + 1] === horWinCase2[1] &&
    //       p2Moves[i + 2] === horWinCase2[2]) ||
    //     (p2Moves[i] === vertWinCase2[0] &&
    //       p2Moves[i + 1] === vertWinCase2[1] &&
    //       p2Moves[i + 2] === vertWinCase2[2]) ||
    //     (p2Moves[i] === diagWinCase3[0] &&
    //       p2Moves[i + 1] === diagWinCase3[1] &&
    //       p2Moves[i + 2] === diagWinCase3[2]) ||
    //     (p2Moves[i] === horWinCase3[0] &&
    //       p2Moves[i + 1] === horWinCase3[1] &&
    //       p2Moves[i + 2] === horWinCase3[2]) ||
    //     (p2Moves[i] === vertWinCase3[0] &&
    //       p2Moves[i + 1] === vertWinCase3[1] &&
    //       p2Moves[i + 2] === vertWinCase3[2])
    //   ) {
    //     setWinner(players.p2);
    //     setScore(score.p2 + 1);
    //     console.log(`${players.p2} has won!`);
    //     return;
    //   }
    // }

*/
