window.onload=start;

function start () {

  //changeTextAndBack();
  changeCell();
  //changeBackgroundColor();
    resetEverything();
}

var count= 1;
var box = document.getElementsByTagName("td");

function changeCell () {
  //THE FOLOWIGN VARIABLE IS GLOBALLY DECLARED SO I DONT EVEN NEED IT
   //var box = document.getElementsByTagName("td");
    //loop is same as sayign add an event listener to each index
   for (var i = 0; i < box.length; i++) {
     // console.log("This is box[i] at index " + i);
    // console.log(box[i]);
    box[i].addEventListener("click", changeTextAndBack);
   }
  
}

function changeTextAndBack (event) {
  
  if (event.target.innerHTML.length === 0) {
      if (count % 2 === 0){
            event.target.innerHTML = "X";
            event.target.style.backgroundColor = "rgba(206, 43, 54, .9)";
            document.querySelector("h2").innerHTML = "Player One";
            checkWin("X");
      } else {
        event.target.innerHTML = "O";
        event.target.style.backgroundColor = "rgba(122, 222, 134, .9)";
        document.querySelector("h2").innerHTML = "Player Two";
        checkWin("O");
        
      }
      console.log("the count is now " + count);
      console.log(event.target.innerHTML);
    count++;   
  }
}












function resetEverything (){

   var resetButton = document.getElementById("reset");
   resetButton.addEventListener("click", clearBoard);
}

function clearBoard () {

     var box = document.getElementsByTagName("td");
    //loop is same as sayign add an event listener to each index
     for (var i = 0; i < box.length; i++) {
      // console.log("This was the text before")
     // console.log(box[i].innerHTML)
     box[i].innerHTML = " ";
     box[i].style.backgroundColor = "white";
     //location.reload refreshes the page when you engage the clearBoard function
     location.reload();
      // console.log("This is the text after")
     // console.log(box[i].innerHTML)
         }

}
//the following variable is GLOBAL, and it is used two other times!
//var box = document.getElementsByTagName("td");
console.log(box);
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", changeColor);
  box[i].addEventListener("mouseout", changeBack);
}

function changeColor (event) {
  event.target.style.backgroundColor = "rgba(78, 177, 223, .7)";

}

function changeBack (event) {
  event.target.style.backgroundColor = "transparent";
}

//event.target for each specific event
//event addEventListener is something you need to apply to every thing you want to watch for an event

//CHECK WINNER FUNCTIONS
function gameOver (winner) {
  alert(winner + " wins the game!");

}

//function win (playerMoves) {

//create functions for what each player is playing X or O
//create
//winConditions =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

//}
  
 

    function checkWin(letter) {
       //top row check
        if (document.getElementById("1").innerHTML === letter){
            if (document.getElementById("2").innerHTML === letter) {
                if (document.getElementById("3").innerHTML ===letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
       //middle row check
        
        if (document.getElementById("4").innerHTML === letter){
            if (document.getElementById("5").innerHTML === letter) {
                if (document.getElementById("6").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
       //bottom row check
        if (document.getElementById("7").innerHTML === letter){
            if (document.getElementById("8").innerHTML === letter) {
                if (document.getElementById("9").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }  
        //left column check
        if (document.getElementById("1").innerHTML === letter){
            if (document.getElementById("4").innerHTML === letter) {
                if (document.getElementById("7").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    console.log(alert);
                    
                }
            }
        }
        //right column check
       if (document.getElementById("3").innerHTML === letter){
            if (document.getElementById("6").innerHTML === letter) {
                if (document.getElementById("9").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
        
       //middle column check
        if (document.getElementById("2").innerHTML === letter){
            if (document.getElementById("5").innerHTML === letter) {
                if (document.getElementById("8").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
        //left diagonal check
        if (document.getElementById("1").innerHTML === letter){
            if (document.getElementById("5").innerHTML === letter) {
                if (document.getElementById("9").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
        //right diag check
        if (document.getElementById("3").innerHTML === letter){
            if (document.getElementById("5").innerHTML === letter) {
                if (document.getElementById("7").innerHTML === letter) {
                    alert('Game over! ' + letter + ' is the winner!');
                    
                }
            }
        }
        
        
        
              
    }