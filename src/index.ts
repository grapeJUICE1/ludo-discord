import inquirer from "inquirer";
import { printLudoBoard, printDice } from "./printFuncs";
import data from "./data";

class Dice {
  static val: number | number[] = 0;
  static resetValue() {
    this.val = 0;
  }
  static async waitForInput() {
    await inquirer.prompt({
      name: "d",
      type: "input",
      message: "Press anything to roll the dice",
    });
  }
  static async rollDice() {
    await this.waitForInput();

    let randNumFrom0to6 = Math.ceil(Math.random() * 5) + 1;

    if (randNumFrom0to6 === 6) {
      if (this.val === 6) {
        this.val = [6, 6];
      } else if (Array.isArray(this.val) ? this.val.length === 2 : 0) {
        console.log(
          "you have drawn 6 thrice in a row , so you have to roll the dice from the beginning"
        );
        this.val = 0;
      } else {
        this.val = 6;
      }
      this.printDice(randNumFrom0to6);
      await this.rollDice();
      return;
    } else {
      if (this.val === 6) {
        this.val = [6, randNumFrom0to6];
        this.printDice(randNumFrom0to6);
        return;
      }
    }

    if (Array.isArray(this.val)) {
      this.val.push(randNumFrom0to6);
    } else {
      this.val = randNumFrom0to6;
    }
    this.printDice(randNumFrom0to6);
  }
  static printDice(num = 0) {
    printDice(num ? num : this.val);
  }
}

class Board {
  board: any[][];
  constructor(board) {
    this.board = board;
  }
  printBoard() {
    printLudoBoard(this.board);
  }
  setBoardPiece(newPos: number[], token: Token) {
    let [xOfOldPos, yOfOldPos, zOfOldPos] = token.pos;

    if (zOfOldPos) {
      this.board[xOfOldPos][yOfOldPos][zOfOldPos] = "  ";
    } else {
      let boardPiece = this.board[xOfOldPos][yOfOldPos];
      boardPiece.tokens.splice(boardPiece.tokens.indexOf(token.tokenName));

      boardPiece.text = boardPiece.tokens.length
        ? `${boardPiece.tokens[0]}+${
            boardPiece.tokens.length ? boardPiece.tokens.length - 1 : 0
          }`
        : "     ";
      this.board[xOfOldPos][yOfOldPos] = boardPiece;
    }

    token.pos = newPos;
    let [xOfNewPos, yOfNewPos, zOfNewPos] = newPos;
    if (zOfNewPos) {
      this.board[xOfNewPos][yOfNewPos][zOfNewPos] = token.tokenName;
    } else {
      let boardPiece = this.board[xOfNewPos][yOfNewPos];
      console.log(boardPiece);
      boardPiece.tokens.unshift(token.tokenName);
      console.log(this.board[newPos[0]][newPos[1]]);
      console.log(xOfOldPos + " " + yOfOldPos + " " + newPos);
      let tokens = boardPiece.tokens;
      let numOfTokens = boardPiece.tokens.length;
      let text = `${token.tokenName}+${numOfTokens - 1} `;

      this.board[xOfNewPos][yOfNewPos] = { text, tokens };
    }
  }
}

class Player {
  name: string;
  color: string;
  tokens: Token[] = [];

  constructor(playerName, color) {
    this.name = playerName;
    this.color = color;
    for (let token in data[color]) {
      if (token !== "rootPos" && token !== "seq") {
        let newToken = new Token(
          token,
          data[color][token].start_pos,
          data[color].rootPos,
          data[color].seq,
          data[color][token].end_pos
        );
        Token.tokens.push(newToken);
        this.tokens.push(newToken);
      }
    }
  }
}

class Token {
  tokenName: string;
  pos: number[];
  endPos: number[];
  rootPosInYard: [number, number, number];
  rootPos: [number, number];
  phase: number = 0;
  static tokens: Token[] = [];
  // 0 = in yard
  // 1 = 1st part
  // 2 = 2nd part
  // 3 = 3rd part
  // 4 = 4th part
  // 5 = ripe
  phaseSeq: number;
  constructor(token, pos, rootPos, phaseSeq, endPos) {
    this.tokenName = token;
    this.pos = pos;
    this.endPos = endPos;
    this.rootPosInYard = pos;
    this.rootPos = rootPos;
    this.phaseSeq = phaseSeq;
  }
  goToNextPhase() {
    this.phase += 1;
  }
  moveToken(newPos: number[], board: Board) {
    // board.setBoardPiece(this.pos, "     ");
    // this.pos = newPos;
    board.setBoardPiece(newPos, this);
  }
}

class Game {
  board: Board;
  players: Player[] = [];
  colors: string[];
  availColors: string[];
  numOfPlayer: number;
  gameState = {
    running: true,
    gameOver: false,
  };

  constructor() {
    this.reset();
  }
  reset() {
    this.board = new Board(data.board);
    this.colors = ["green", "red", "yellow", "blue"];
    this.availColors = ["green", "red", "yellow", "blue"];
    this.players = [];
  }
  async getGameData() {
    let answer;
    answer = await inquirer.prompt({
      name: "numOfPlayer",
      type: "list",
      message: "How many players will play?",
      choices: [1, 2, 3, 4],
    });

    this.numOfPlayer = answer.numOfPlayer;
    for (let i = 1; i <= this.numOfPlayer; i++) {
      answer = await inquirer.prompt({
        name: "playerName",
        type: "string",
        message: `Player ${i} : type your name`,
      });
      let playerName = answer.playerName;
      answer = await inquirer.prompt({
        name: "playerColor",
        type: "list",
        message: `${playerName} : What color will you choose?`,
        choices: this.availColors,
      });
      let playerColor = answer.playerColor;
      this.availColors = this.availColors.filter((el) => el != playerColor);
      this.players.push(new Player(playerName, playerColor));
    }
    return "f";
  }
  async checkF(
    player: Player,
    diceVal: number,
    playerTokensList: string[] = undefined,
    token: Token = undefined
  ) {
    let chosenToken = token;
    if (!chosenToken) {
      if (playerTokensList.length) {
        let answer = await inquirer.prompt({
          name: "chosenToken",
          type: "list",
          message: `Choose Token`,
          choices: playerTokensList,
        });
        chosenToken = player.tokens.find(
          (el) => el.tokenName === answer.chosenToken
        );
      } else {
        console.log("you have no tokens available to play right now");
        return;
      }
    }

    let x: number = chosenToken.pos[0];
    let y: number = chosenToken.pos[1];
    let z: number = undefined;

    if (chosenToken.phase === 1) {
      if (y + diceVal > 5) {
        x = chosenToken.phaseSeq[chosenToken.phase];
        chosenToken.goToNextPhase();
      }
      y += diceVal;
    } else if (chosenToken.phase === 2 || chosenToken.phase === 3) {
      if (y > 5) {
        if (y + diceVal > 12) {
          //prettier-ignore
          y = (y + diceVal - 12)-1;
        } else {
          y += diceVal;
        }
      } else {
        if (y + diceVal > 5) {
          x = chosenToken.phaseSeq[chosenToken.phase];
          chosenToken.goToNextPhase();
        }
        y += diceVal;
      }
    } else if (chosenToken.phase === 4) {
      if (y + diceVal > 16) {
        chosenToken.goToNextPhase();
        [x, y, z] = chosenToken.endPos;
      } else {
        y += diceVal;
      }
    }

    z
      ? chosenToken.moveToken([x, y, z], this.board)
      : chosenToken.moveToken([x, y], this.board);
    printLudoBoard(data.board);
  }
  async playTurn(player: Player) {
    let answer;
    await Dice.rollDice();
    console.log(Dice.val);

    if (Array.isArray(Dice.val)) {
      const playerTokensList2 = player.tokens
        .filter((token) => token.phase !== 5)
        ?.map((token) => token.tokenName);

      for (let val of Dice.val) {
        if (val === 6) {
          answer = await inquirer.prompt({
            name: "chosenToken",
            type: "list",
            message: `Choose Token`,
            choices: playerTokensList2,
          });
          const chosenToken = player.tokens.find(
            (el) => el.tokenName === answer.chosenToken
          );

          if (chosenToken.phase === 0) {
            chosenToken.moveToken(chosenToken.rootPos, this.board);
            chosenToken.goToNextPhase();
            printLudoBoard(data.board);
          } else {
            await this.checkF(player, val, undefined, chosenToken);
          }
        } else {
          const playerTokensList = player.tokens
            .filter((token) => token.phase !== 5 && token.phase !== 0)
            ?.map((token) => token.tokenName);
          await this.checkF(player, val, playerTokensList);
        }
      }
      Dice.resetValue();
      return;
    } else {
      const playerTokensList = player.tokens
        .filter((token) => token.phase !== 5 && token.phase !== 0)
        ?.map((token) => token.tokenName);
      await this.checkF(player, Dice.val, playerTokensList);
    }

    Dice.resetValue();
  }
  async startGame() {
    this.reset();
    printLudoBoard(data.board);
    await this.getGameData();

    let i = -1;
    while (this.gameState.running) {
      if (i >= this.numOfPlayer - 1) {
        i = -1;
      }
      i++;
      await this.playTurn(this.players[i]);
    }
  }
}

const game = new Game();
game.startGame();
