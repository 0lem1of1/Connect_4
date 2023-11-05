var player1 = prompt("eneter your name player 1");
var player1color = 'rgb(86, 151, 255)';



var player2 = prompt("eneter your name player 2");
var player2color = 'rgb(237, 45, 73)';
var table = $('table tr')

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
  console.log("rcolor");
}
// function returnColor(col,row){
// return table.eq(row).find('td').eq(col).find('button').css("background-color")
//
// }

function checkBottom(col) {

  for (var row = 5; row > -1; row--){
      if (returnColor(row,col) === "rgb(128, 128, 128)" ) {

        return row;

      }

  }

}
function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
  console.log("3");
}
// function changeColor(row,col,color){
//   table.eq(row).find('td').eq(col).find('button').css("background-color",color)
// }

function checkMatch(one,two,three,four){

  return (one === two && one === three && one === four && one !== "rgb(128, 128, 128)" && one !== undefined)

}

function horizonalWin(){
  for (var row = 0; row < 5 ; row++) {
    for (var col = 0; col < 4 ; col++) {

      if ( checkMatch(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))) {

        console.log("horiz win");
        reportWin(row,col);
        return true;
      }else {
        continue
      }
    }
  }
}

  function verticalWin(){
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 2; row++) {

        if (checkMatch(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))) {
            console.log("vert win");
            reportWin(row,col);
            return true;
        }
        else {
          continue;
        }
      }
    }
  }

  function diagonalWin(){
    for (var row = 0; row < 5; row++) {
      for (var col = 0; col < 7; col++) {

      if (checkMatch(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))) {

        console.log("diag win");
        reportWin(row,col);
        return true;
      }
      else if (checkMatch(returnColor(row,col),returnColor(row-1,col-1),returnColor(row-2,col-2),returnColor(row-3,col-3))) {
        console.log("diag win");
        reportWin(row,col);
        return true;
      }
      else {
        continue;
      }
      }
    }
  }

  function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")


      
    }
  }
}



var game_on = true;





var currentPlayer = 1;
var currentColor = player1color;
var currentName = player1;

$('#notice').text(player1 +", please start the game!");




$('.board button').on('click',function(){

  var col = $(this).closest("td").index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail,col,currentColor);

  if (horizonalWin() || verticalWin() || diagonalWin()) {

    gameEnd(currentName);

  }
  currentPlayer = currentPlayer * -1;

  if (currentPlayer === 1) {
    $('#notice').text(player1 + "play your turn")
    currentColor = player1color;
  }
  else {
    $('#notice').text(player2 + "play your turn")
    currentColor = player2color;
  }
})
