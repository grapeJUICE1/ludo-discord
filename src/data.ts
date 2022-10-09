let data = {
  board: [
    [
      ["R1", "R2", "R3", "R4"],
      ["G1", "G2", "G3", "G4"],
      ["B1", "B2", "B3", "B4"],
      ["Y1", "Y2", "Y3", "Y4"],
    ],
    new Array(18).fill(null).map(function () {
      return {
        text: "     ",
        tokens: [],
      };
    }),
    new Array(18).fill(null).map(function () {
      return {
        text: "     ",
        tokens: [],
      };
    }),
    new Array(18).fill(null).map(function () {
      return {
        text: "     ",
        tokens: [],
      };
    }),
    new Array(18).fill(null).map(function () {
      return {
        text: "     ",
        tokens: [],
      };
    }),
    [
      [Array(4).fill("  ")],
      [Array(4).fill("  ")],
      [Array(4).fill("  ")],
      [Array(4).fill("  ")],
    ],
  ],

  // specialBoardIndexes: {
  //   rootPlace1: [1, 1],
  //   rootPlace2: [2, 1],
  //   rootPlace3: [3, 1],
  //   rootPlace4: [4, 1],
  //   ,
  //   safePlace1: [1, 9],
  //   safePlace2: [2, 9],
  //   safePlace3: [3, 9],
  //   safePlace4: [4, 9],
  // },

  red: {
    R1: {
      start_pos: [0, 0, 0],
      end_pos: [5, 0, 0],
    },
    R2: {
      start_pos: [0, 0, 1],
      end_pos: [5, 0, 1],
    },
    R3: {
      start_pos: [0, 0, 2],
      end_pos: [5, 0, 2],
    },
    R4: {
      start_pos: [0, 0, 3],
      end_pos: [5, 0, 3],
    },
    seq: [2, 1, 3, 4],
    rootPos: [2, 1],
  },
  green: {
    G1: {
      start_pos: [0, 1, 0],
      end_pos: [5, 1, 0],
    },
    G2: {
      start_pos: [0, 1, 1],
      end_pos: [5, 1, 1],
    },
    G3: {
      start_pos: [0, 1, 2],
      end_pos: [5, 1, 2],
    },
    G4: {
      start_pos: [0, 1, 3],
      end_pos: [5, 1, 3],
    },
    seq: [1, 3, 4, 2],
    rootPos: [1, 1],
  },
  blue: {
    B1: {
      start_pos: [0, 2, 0],
      end_pos: [5, 2, 0],
    },
    B2: {
      start_pos: [0, 2, 2],
      end_pos: [5, 2, 2],
    },
    B3: {
      start_pos: [0, 2, 3],
      end_pos: [5, 2, 3],
    },
    B4: {
      start_pos: [0, 2, 4],
      end_pos: [5, 2, 4],
    },
    seq: [4, 2, 1, 3],
    rootPos: [4, 1],
  },
  yellow: {
    Y1: {
      start_pos: [0, 3, 0],
      end_pos: [5, 3, 0],
    },
    Y2: {
      start_pos: [0, 3, 1],
      end_pos: [5, 3, 1],
    },
    Y3: {
      start_pos: [0, 3, 2],
      end_pos: [5, 3, 2],
    },
    Y4: {
      start_pos: [0, 3, 3],
      end_pos: [5, 3, 3],
    },
    seq: [3, 4, 2, 1],
    rootPos: [3, 1],
  },
};
export default data;
