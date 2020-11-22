var currentPlayer = true
//whos turn is it
var currentMatch =
  [[0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]]
var matchStatus;
//is the match won and who won it
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
    matchStatus = false;
  }//Match won by second player filling all upper spaces

  if (currentMatch[1][0] == currentMatch[1][1] && currentMatch[1][0] == currentMatch[1][2] && currentMatch[1][0] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all middle spaces

  if (currentMatch[2][0] == currentMatch[2][1] && currentMatch[2][0] == currentMatch[2][2] && currentMatch[2][0] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all lower spaces
  if (currentMatch[0][0] == currentMatch[1][0] && currentMatch[0][0] == currentMatch[2][0] && currentMatch[0][0] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all left spaces
  if (currentMatch[0][1] == currentMatch[1][1] && currentMatch[0][1] == currentMatch[2][1] && currentMatch[0][1] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all middle vertical spaces
  if (currentMatch[0][2] == currentMatch[1][2] && currentMatch[0][2] == currentMatch[2][2] && currentMatch[0][2] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all right spaces
  if (currentMatch[0][0] == currentMatch[1][0] && currentMatch[0][0] == currentMatch[2][0] && currentMatch[0][0] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all left spaces
  if (currentMatch[0][1] == currentMatch[1][1] && currentMatch[0][1] == currentMatch[2][1] && currentMatch[0][1] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all middle vertical spaces
  if (currentMatch[0][2] == currentMatch[1][2] && currentMatch[0][2] == currentMatch[2][2] && currentMatch[0][2] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all right spaces
  if (currentMatch[0][0] == currentMatch[1][1] && currentMatch[0][0] == currentMatch[2][2] && currentMatch[0][0] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all left diagonal spaces
  if (currentMatch[0][2] == currentMatch[1][1] && currentMatch[0][2] == currentMatch[2][0] && currentMatch[0][2] == 1) {
    matchStatus = true;
  }
  //Match won by first player filling all right diagonal spaces
  if (currentMatch[0][0] == currentMatch[1][1] && currentMatch[0][0] == currentMatch[2][2] && currentMatch[0][0] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all left diagonal spaces
  if (currentMatch[0][2] == currentMatch[1][1] && currentMatch[0][2] == currentMatch[2][0] && currentMatch[0][2] == 2) {
    matchStatus = false;
  }
  //Match won by second player filling all right diagonal spaces
}
function play(buttonID) {
  var positionX = buttonID[0] - 1;
  var positionY = buttonID[2] - 1;
  // postion of the current button
  var buttonClass = document.getElementById(buttonID).className
  if (currentPlayer == true && !buttonClass.includes("used")) {
    //checks if we can play on this spot
    document.getElementById(buttonID).className += " usedX"
    document.getElementById(buttonID).childNodes[0].src = "../Images/cross copy.png"
    document.getElementById(buttonID).childNodes[0].style.display = "block"
    document.getElementById(buttonID).childNodes[0].style.width = "175px"
    document.getElementById(buttonID).childNodes[0].style.height = "175px"

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
    document.getElementById(buttonID).childNodes[0].style.display = "block"
    document.getElementById(buttonID).childNodes[0].style.width = "140px"
    document.getElementById(buttonID).childNodes[0].style.height = "140px"
    //initiats the visual representation of a move
    currentMatch[positionX][positionY] = 2;
    //logs into memory the move
    currentPlayer = true;
    //switches whos turn it is

  }
  winCheck();
}
let player1wins = 0;
let player2wins = 0;
let ties = 0;
var counter = 0;
function restartGame() {
  var noTie = true;
  if (matchStatus == true && counter == 1) {
    player1wins++;
    document.getElementById("scoreP1").innerHTML = "Играч 1: " + player1wins;
    counter = 0;
    clearboard();
  }
  if (matchStatus == false && counter == 1) {
    player2wins++;
    document.getElementById("scoreP2").innerHTML = "Играч 2: " + player2wins;
    counter = 0;
    clearboard();
  }
  var fullRows = 0;
  for (let i = 0; i < 3; i++) {
    let nonEmptySpaces = 0;
    for (let j = 0; j < 3; j++) {
      if (currentMatch[i][j] != 0) {
        nonEmptySpaces++
      }
      if (nonEmptySpaces == 3) {
        fullRows++;
      }
    }

    if (fullRows == 3) {
      noTie = false
    }
  }
  if (!noTie && counter == 1) {
    ties++;
    document.getElementById("ties").innerHTML = "Равенства: " + ties;
    counter = 0;
    clearboard();
  }
  if (matchStatus == true || matchStatus == false || noTie == false) {
    counter++;
  }
}
function clearboard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      currentMatch[i][j] = 0;
    }
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("img")[i].style.display = "none"
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByTagName("button")[i].className = "game-cell"
  }
  matchStatus = null
  currentPlayer = true
}

