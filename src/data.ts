let data = {
  board: [
    [
      ["R1", "R2", "R3", "R4"],
      ["G1", "G2", "G3", "G4"],
      ["B1", "B2", "B3", "B4"],
      ["Y1", "Y2", "Y3", "Y4"],
    ],
    Array(18).fill("  "),
    Array(18).fill("  "),
    Array(18).fill("  "),
    Array(18).fill("  "),
  ],

  // specialBoardIndexes: {
  //   rootPlace1: [1, 1],
  //   rootPlace2: [2, 1],
  //   rootPlace3: [3, 1],
  //   rootPlace4: [4, 1],
  //   safePlace1: [1, 9],
  //   safePlace2: [2, 9],
  //   safePlace3: [3, 9],
  //   safePlace4: [4, 9],
  // },

  green: {
    G1: [0, 1, 0],
    G2: [0, 1, 1],
    G3: [0, 1, 2],
    G4: [0, 1, 3],
    seq: [1, 3, 4, 2],
    rootPos: [1, 1],
  },
  red: {
    R1: [0, 0, 0],
    R3: [0, 0, 1],
    R2: [0, 0, 2],
    R4: [0, 0, 3],
    seq: [2, 1, 3, 4],
    rootPos: [2, 1],
  },
  yellow: {
    Y1: [0, 3, 0],
    Y2: [0, 3, 1],
    Y3: [0, 3, 2],
    Y4: [0, 3, 3],
    seq: [3, 4, 2, 1],
    rootPos: [3, 1],
  },
  blue: {
    B1: [0, 2, 0],
    B2: [0, 2, 1],
    B3: [0, 2, 2],
    B4: [0, 2, 3],
    seq: [4, 2, 1, 3],
    rootPos: [4, 1],
  },
};
export default data;
