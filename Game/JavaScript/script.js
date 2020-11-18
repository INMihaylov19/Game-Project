var currentPlayer = true
var currentMatch = [[0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]]
var matchStatus;
//is the match won and who won it.
function winCheck() {
  if (currentMatch[0][0] == currentMatch[0][1] && currentMatch[0][0] == currentMatch[0][2] && currentMatch[0][0] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all upper spaces

  if (currentMatch[1][0] == currentMatch[1][1] && currentMatch[1][2] == currentMatch[1][0] && currentMatch[1][2] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all middle spaces

  if (currentMatch[2][0] == currentMatch[2][1] && currentMatch[2][0] == currentMatch[2][2] && currentMatch[2][0] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all lower spaces

  if (currentMatch[0][0] == currentMatch[0][1] && currentMatch[0][0] == currentMatch[0][2] && currentMatch[0][0] == 2) {
    matchStatus = true;
  }//Match won by second player filling all upper spaces

  if (currentMatch[1][0] == currentMatch[1][1] && currentMatch[1][0] == currentMatch[1][2] && currentMatch[1][0] == 2) {
    matchStatus = true;
  }
  //Match won by second player filling all middle spaces

  if (currentMatch[2][0] == currentMatch[2][1] && currentMatch[2][0] == currentMatch[2][2] && currentMatch[2][0] == 2) {
    matchStatus = true;
  }
  //Match won by second player filling all lower spaces

}
function play(buttonID) {
  var positionX = buttonID[0] - 1;
  var positionY = buttonID[2] - 1;
  // postion of the current button
  var buttonClass = document.getElementById(buttonID).className
  if (currentPlayer && !buttonClass.includes("used")) {
    //checks if we can play on this spot
    document.getElementById(buttonID).className += " usedX"
    document.getElementById(buttonID).childNodes[0].src = "../Images/cross.png"
    document.getElementById(buttonID).childNodes[0].style.width = "200px"
    document.getElementById(buttonID).childNodes[0].style.height = "200px"
    //initiats the visual representation of a move
    currentMatch[positionX][positionY] = 1;
    //logs into memory the move
    currentPlayer = false;
    //switches whos turn it is
  }

  else if (!buttonClass.includes("used")) {
    //checks if we can play on this spot
    document.getElementById(buttonID).className += " usedO"
    document.getElementById(buttonID).childNodes[0].src = "../Images/circle.png"
    document.getElementById(buttonID).childNodes[0].style.width = "200px"
    document.getElementById(buttonID).childNodes[0].style.height = "200px"
    //initiats the visual representation of a move
    currentMatch[positionX][positionY] = 2;
    //logs into memory the move
    currentPlayer = true;
    //switches whos turn it is

  }
  winCheck();
  console.log(matchStatus)

}