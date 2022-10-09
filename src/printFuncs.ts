export function printLudoBoard(board) {
  // prettier-ignore
  const ludoBoardString =
`###########################################################################################
#                                   #${board[1][11].text}|${board[1][12].text}|${board[1][0].text}# |                                 #
#            RED                    #-----#-----#-----# V              GREEN              #
#                                   #${board[1][10].text}#${board[1][13].text}#${board[1][1].text}#                                   #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][0][0]}  | ${board[0][0][1]} |              #${board[1][9].text}#${board[1][14].text}#${board[1][2].text}#             |${board[0][1][0]}  |${board[0][1][1]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][0][2]}  | ${board[0][0][3]} |              #${board[1][8].text}#${board[1][15].text}#${board[1][3].text}#             |${board[0][1][2]}  |${board[0][1][3]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#                                   #${board[1][7].text}#${board[1][16].text}#${board[1][4].text}#                                   #
#                                   #-----#-----#-----#                                   #
# -->                               #${board[1][6].text}#${board[1][17].text}#${board[1][5].text}#                                   #
#####################################-----#-----#-----#####################################
#${board[2][0].text}|${board[2][1].text}|${board[2][2].text}|${board[2][3].text}|${board[2][4].text}|${board[2][5].text}|                 |${board[3][6].text}|${board[3][7].text}|${board[3][8].text}|${board[3][9].text}|${board[3][10].text}|${board[3][11].text}#
#-----###############################                 ###############################-----#
#${board[2][12].text}|${board[2][13].text}|${board[2][14].text}|${board[2][15].text}|${board[2][16].text}|${board[2][17].text}|        X        |${board[3][17].text}|${board[3][16].text}|${board[3][15].text}|${board[3][14].text}|${board[3][13].text}|${board[3][12].text}#
#-----###############################                 ###############################-----#
#${board[2][11].text}|${board[2][10].text}|${board[2][9].text}|${board[2][8].text}|${board[2][7].text}|${board[2][6].text}|                 |${board[3][5].text}|${board[3][4].text}|${board[3][3].text}|${board[3][2].text}|${board[3][1].text}|${board[3][0].text}#
#####################################-----#-----#-----#####################################
#                                   #${board[4][5].text}#${board[4][17].text}#${board[4][6].text}#                               <-- #
#             BLUE                  #-----#-----#-----#               YELLOW              #
#                                   #${board[4][4].text}#${board[4][16].text}#${board[4][7].text}#                                   #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][2][0]}  |${board[0][2][1]}  |              #${board[4][3].text}#${board[4][15].text}#${board[4][8].text}#             |${board[0][3][0]}  |${board[0][3][1]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#          |${board[0][2][2]}  |${board[0][2][3]}  |              #${board[4][2].text}#${board[4][14].text}#${board[4][9].text}#             |${board[0][3][2]}  |${board[0][3][3]}  |           #
#          -----------              #-----#-----#-----#             -----------           #
#                                   #${board[4][1].text}#${board[4][13].text}#${board[4][10].text}#                                   #
#                                 ^ #-----#-----#-----#                                   #
#                                 | #${board[4][0].text}|${board[4][12].text}|${board[4][11].text}#                                   #
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
