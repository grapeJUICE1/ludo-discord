export function printLudoBoard(board) {
  // prettier-ignore
  const ludoBoardString =
`###########################################################################################
#                                   #${board[1][11]}   |${board[1][12]}   |${board[1][0]}   # |                                 #
#            RED                    #-----#-----#-----# V              GREEN              #
#                                   #${board[1][10]}   #${board[1][13]}   #${board[1][1]}   #                                   #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][0][0]}  | ${board[0][0][1]} |              #${board[1][9]}   #${board[1][14]}   #${board[1][2]}   #             |${board[0][1][0]}  |${board[0][1][1]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][0][2]}  | ${board[0][0][3]} |              #${board[1][8]}   #${board[1][15]}   #${board[1][3]}   #             |${board[0][1][2]}  |${board[0][1][3]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#                                   #${board[1][7]}   #${board[1][16]}   #${board[1][4]}   #                                   #
#                                   #-----#-----#-----#                                   #
# -->                               #${board[1][6]}   #${board[1][17]}   #${board[1][5]}   #                                   #
#####################################-----#-----#-----#####################################
#${board[2][0]}   |${board[2][1]}   |${board[2][2]}   |${board[2][3]}   |${board[2][4]}   |${board[2][5]}   |                 |${board[3][6]}   |${board[3][7]}   |${board[3][8]}   |${board[3][9]}   |${board[3][10]}   |${board[3][11]}   #
#-----###############################                 ###############################-----#
#${board[2][12]}   |${board[2][13]}   |${board[2][14]}   |${board[2][15]}   |${board[2][16]}   |${board[2][17]}   |        X        |${board[3][17]}   |${board[3][16]}   |${board[3][15]}   |${board[3][14]}   |${board[3][13]}   |${board[3][12]}   #
#-----###############################                 ###############################-----#
#${board[2][11]}   |${board[2][10]}   |${board[2][9]}   |${board[2][8]}   |${board[2][7]}   |${board[2][6]}   |                 |${board[3][5]}   |${board[3][4]}   |${board[3][3]}   |${board[3][2]}   |${board[3][1]}   |${board[3][0]}   #
#####################################-----#-----#-----#####################################
#                                   #${board[4][5]}   #${board[4][17]}   #${board[4][6]}   #                               <-- #
#             BLUE                  #-----#-----#-----#               YELLOW              #
#                                   #${board[4][4]}   #${board[4][16]}   #${board[4][7]}   #                                   #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][2][0]}  |${board[0][2][1]}  |              #${board[4][3]}   #${board[4][15]}   #${board[4][8]}   #             |${board[0][3][0]}  |${board[0][3][1]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][2][2]}  |${board[0][2][3]}  |              #${board[4][2]}   #${board[4][14]}   #${board[4][9]}   #             |${board[0][3][2]}  |${board[0][3][3]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#                                   #${board[4][1]}   #${board[4][13]}   #${board[4][10]}   #                                   #
#                                 ^ #-----#-----#-----#                                   #
#                                 | #${board[4][0]}   |${board[4][12]}   |${board[4][11]}   #                                   #
###########################################################################################
`;
  console.log(ludoBoardString);
}

export function printDice(val) {
  // prettier-ignore
  const diceString = 
`
  ---------
  |${val!== 1?"#":" "}     ${val>3?"#":" "}|
  |${val===6?"#":" "}  ${val%2===1?"#":" "}  ${val===6?"#":" "}|
  |${val>3?"#":" "}     ${val!==1?"#":" "}|
  ---------

`;
  console.log(val);
  console.log(diceString);
}

//
