var gameMode;

var currentPlayer = true
//whos turn is it
var board =
  [[0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]]

//is the match won and who won it
var matchStatus;

//is there a tie
var noTie = true;

//counts the moves that have happened
var counter = 0;

//checks what the game mode is
function chooseGameMode(buttonID) {
  if (buttonID == "p1") {
    gameMode = true;
  }
  if (buttonID == "p2") {
    gameMode = false;
  }
  //removes the chose game mode menu
  document.getElementById("gameMode").style.display = "none"
  document.getElementById("show").style.display = "block"
  document.getElementById("stats").style.display = "block"
}



//check if someone has one and who won it
function winCheck() {

  //Match won by first player filling all upper spaces
  if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == 1) {
    matchStatus = true;
  }

  //Match won by first player filling all middle spaces
  if (board[1][0] == board[1][1] && board[1][2] == board[1][0] && board[1][2] == 1) {
    matchStatus = true;
  }

  //Match won by first player filling all lower spaces
  if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == 1) {
    matchStatus = true;
  }

  //Match won by second player filling all upper spaces
  if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] == 2) {
    matchStatus = false;
  }

  //Match won by second player filling all middle spaces
  if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] == 2) {
    matchStatus = false;
  }

  //Match won by second player filling all lower spaces
  if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] == 2) {
    matchStatus = false;
  }

  //Match won by first player filling all left spaces 
  if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == 1) {
    matchStatus = true;
  }

  //Match won by first player filling all middle vertical spaces
  if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == 1) {
    matchStatus = true;
  }

  //Match won by first player filling all right spaces
  if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == 1) {
    matchStatus = true;
  }

  //Match won by second player filling all left spaces
  if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] == 2) {
    matchStatus = false;
  }

  //Match won by second player filling all middle vertical spaces
  if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] == 2) {
    matchStatus = false;
  }

  //Match won by second player filling all right spaces
  if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] == 2) {
    matchStatus = false;
  }

  //Match won by first player filling all left diagonal spaces
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == 1) {
    matchStatus = true;
  }

  //Match won by first player filling all right diagonal spaces
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == 1) {
    matchStatus = true;
  }

  //Match won by second player filling all left diagonal spaces
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] == 2) {
    matchStatus = false;
  }

  //Match won by second player filling all right diagonal spaces
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[0][2] == 2) {
    matchStatus = false;
  }

  //checks if there is a tie
  if (counter > 8) {
    //how many filled rows are there
    var fullRows = 0;
    for (let i = 0; i < 3; i++) {
      //how many empty spaces are there in a row
      let nonEmptySpaces = 0;
      for (let j = 0; j < 3; j++) {
        //checks if a space is empty
        if (board[i][j] != 0) {
          nonEmptySpaces++
        }
        //sees if all the spaces in a row are empty
        if (nonEmptySpaces == 3) {
          fullRows++;
        }
      }
    }
    //checks if there all the rows are filled
    if (fullRows == 3 && matchStatus == null) {
      noTie = false
    }

  }
  //checks if it has to display a pop

}
function play(buttonID) {


  // postion of the current button
  var positionX = buttonID[0] - 1;
  var positionY = buttonID[2] - 1;

  //Name of the class
  var buttonClass = document.getElementById(buttonID).className
  if (gameMode == true) {
    //checks if we can play on this spot
    if (currentPlayer == true && !buttonClass.includes("used")) {
      //initiats the visual representation of a move
      document.getElementById(buttonID).className += " usedX"
      document.getElementById(buttonID).childNodes[0].src = "../Images/cross copy.png"
      document.getElementById(buttonID).childNodes[0].style.display = "block"
      document.getElementById(buttonID).childNodes[0].style.width = "175px"
      document.getElementById(buttonID).childNodes[0].style.height = "175px"

      //logs into memory the move
      board[positionX][positionY] = 1;

      //switches whos turn it is
      currentPlayer = false;

      counter++;
    }

    //checks if we can play on this spot
    else if (!buttonClass.includes("used")) {

      //initiats the visual representation of a move
      document.getElementById(buttonID).className += " usedO"
      document.getElementById(buttonID).childNodes[0].src = "../Images/circle.png"
      document.getElementById(buttonID).childNodes[0].style.display = "block"
      document.getElementById(buttonID).childNodes[0].style.width = "140px"
      document.getElementById(buttonID).childNodes[0].style.height = "140px"

      //logs into memory the move 
      board[positionX][positionY] = 2;

      //switches whos turn it is
      currentPlayer = true;
      counter++;
    }
  }
  else if (gameMode == false) {
    //checks if we can play on this spot
    if (currentPlayer == true && !buttonClass.includes("used")) {
      //initiats the visual representation of a move
      document.getElementById(buttonID).className += " usedX"
      document.getElementById(buttonID).childNodes[0].src = "../Images/cross copy.png"
      document.getElementById(buttonID).childNodes[0].style.display = "block"
      document.getElementById(buttonID).childNodes[0].style.width = "175px"
      document.getElementById(buttonID).childNodes[0].style.height = "175px"

      //logs into memory the move
      board[positionX][positionY] = 1;

      //switches whos turn it is
      currentPlayer = false;

      counter++
    }

    winCheck();

    if (currentPlayer == false) {
      var bestScore = -Infinity
      var bestMoveID;
      var aiPositionX;
      var aiPositionY;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == 0) {
            board[i][j] = 2
            let score = aiMove(true)
            board[i][j] = 0
            if (score > bestScore) {
              bestScore = score;
              aiPositionX = i;
              aiPositionY = j;
              bestMoveID = (i + 1) + "-" + (j + 1)
            }
          }
        }
      }
      //initiats the visual representation of a move
      document.getElementById(bestMoveID).className += " usedO"
      document.getElementById(bestMoveID).childNodes[0].src = "../Images/circle.png"
      document.getElementById(bestMoveID).childNodes[0].style.display = "block"
      document.getElementById(bestMoveID).childNodes[0].style.width = "140px"
      document.getElementById(bestMoveID).childNodes[0].style.height = "140px"
      //logs into memory the move
      board[aiPositionX][aiPositionY] = 2;

      //switches whos turn it is
      currentPlayer = true;
      counter++;
    }
  }
  //check if someone has won

  if (counter > 4) {
    winCheck();
  }
}
function aiMove(currentAiPlayer) {
  winCheck();
  aimatchStatus = matchStatus
  aiNoTie = noTie;
  matchStatus = null;
  noTie = true;
  if (aimatchStatus == true) {
    return -1;
  }
  if (aimatchStatus == false) {
    return 1;
  }
  if (aiNoTie == false) {
    return 0;
  }
  if (currentAiPlayer) {
    let bestScore = +Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == 0) {
          board[i][j] = 1;
          let score = aiMove(false)
          board[i][j] = 0;
          if (score < bestScore) {
            bestScore = score
          }
        }
      }
    }
    return bestScore;
  }
  if (!currentAiPlayer) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == 0) {
          board[i][j] = 2;
          let score = aiMove(true)
          board[i][j] = 0;
          if (score > bestScore) {
            bestScore = score
          }
        }
      }
    }
    return bestScore;
  }
}
//count of first player wins
let player1wins = 0;

//count of second player wins
let player2wins = 0;

//count of ties
let ties = 0;

//how many times have the user clicked the screen since the match was over
var clicksAfterWinCounter = 0;

//resets the game
function restartGame() {

  //checks if X player won
  if (matchStatus == true && clicksAfterWinCounter >= 1) {
    player1wins++;

    //updates the stats on the screen
    document.getElementById("scoreP1").innerHTML = "Играч 1: " + player1wins;
    clicksAfterWinCounter = 0;

    //removes the pop up
    document.getElementsByClassName("message")[0].style.display = "none"

    //clears board 
    clearBoard();
  }

  //checks if O player won
  if (matchStatus == false && clicksAfterWinCounter >= 1) {
    player2wins++;
    //updates the stats on the screen
    document.getElementById("scoreP2").innerHTML = "Играч 2: " + player2wins;
    clicksAfterWinCounter = 0;

    //removes the pop up
    document.getElementsByClassName("message")[0].style.display = "none"

    //clears board
    clearBoard();

  }
  //checks if there is a tie
  if (!noTie && clicksAfterWinCounter >= 1) {
    ties++;

    //Updates the score on the screen
    document.getElementById("ties").innerHTML = "Равенства: " + ties;
    clicksAfterWinCounter = 0;
    noTie = true

    //removes the pop up
    document.getElementsByClassName("message")[0].style.display = "none"
    clearBoard();
  }

  //Makes updates the number of times the board was click when there is a winner
  if ((matchStatus == true || matchStatus == false || noTie == false) & clicksAfterWinCounter != 2) {
    clicksAfterWinCounter++;
  }

  if (matchStatus == true) {
    //sets the pop up to be right
    document.getElementsByClassName("message")[0].innerHTML = "Играч 1 победи"

    //displays the pop up
    document.getElementsByClassName("message")[0].style.display = "block"
  }
  if (matchStatus == false) {
    //sets the pop up to be right
    document.getElementsByClassName("message")[0].innerHTML = "Играч 2 победи"

    //displays the pop up
    document.getElementsByClassName("message")[0].style.display = "block"
  }
  if (noTie == false) {
    //sets the pop up to be right
    document.getElementsByClassName("message")[0].innerHTML = "Равни"

    //displays the pop up
    document.getElementsByClassName("message")[0].style.display = "block"
  }

}

function clearBoard() {
  //runs through all the places of the board
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //resets the data base
      board[i][j] = 0;
    }
  }
  for (let i = 0; i < 9; i++) {
    //removes the visual representation
    document.getElementsByTagName("img")[i].style.display = "none"
  }
  for (let i = 0; i < 9; i++) {
    //removes the html code changed in the game
    document.getElementsByTagName("button")[i].className = "game-cell"
  }
  //resets the score
  matchStatus = null
  //sets the currently playing player to be X
  currentPlayer = true


}