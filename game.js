// 
var numberOfSquares=9;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton=document.querySelector("#reset");
// var easyButton =document.querySelector("#easyBtn");
// var hardButton =document.querySelector("#hardBtn");
// var superButton =document.querySelector("#superBtn");
var modeButtons =document.querySelectorAll(".mode");

start();
function start (){
    setUpModeBtns();
    setUpSquares();
    // for (var i = 0; i < modeButtons.length; i++) {
    //     modeButtons[i].addEventListener("click", function () {
    //         modeButtons[0].classList.remove("selected");
    //         modeButtons[1].classList.remove("selected");
    //         modeButtons[2].classList.remove("selected");
    //         this.classList.add("selected");
    //         if (this.textContent === "Easy") {
    //             numberOfSquares = 3;
    //         } else if (this.textContent === "Hard") {
    //             numberOfSquares = 6;
    //         } else {
    //             numberOfSquares = 9;
    //         }
    //         reset();
    //     });
    // }
// for (var i = 0; i < colors.length; i++) {
//     //squares[i].style.backgroundColor = colors[i] ;
//     squares[i].addEventListener("click", function () {
//         var clickedColor = this.style.backgroundColor;
//         if (clickedColor === pickedColor) {
//             messageDisplay.textContent = "Correct!";
//             resetButton.textContent = "Play again!";
//             changeColors(clickedColor);
//             h1.style.backgroundColor = clickedColor;
//         } else {
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try again";
//         }
//     });
//}
reset();
}
function setUpSquares(){
    for (var i = 0; i < colors.length; i++) {
        //squares[i].style.backgroundColor = colors[i] ;
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });

} }
function setUpModeBtns(){
    for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numberOfSquares = 3;
            } else if (this.textContent === "Hard") {
                numberOfSquares = 6;
            } else {
                numberOfSquares = 9;
            }
            reset();
        });
    }
}
function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        } else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}
// easyButton.addEventListener("click", function(){
//     hardButton.classList.remove("selected");
//     superButton.classList.remove("selected");
//     easyButton.classList.add("selected");
//     h1.style.backgroundColor = "steelblue";
//     numberOfSquares= 3;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent=pickedColor;
//     console.log(pickedColor);
//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//             console.log(colors);
//         }else{
//             squares[i].style.display="none";
//         }
//     }
// });

// hardButton.addEventListener("click", function () {
//    easyButton.classList.remove("selected");
//    superButton.classList.remove("selected");
//    hardButton.classList.add("selected");
//    h1.style.backgroundColor = "steelblue";
//    numberOfSquares= 6;
//    colors = generateRandomColors(numberOfSquares);
//    pickedColor = pickColor();
//    for (var i = 0; i < squares.length; i++) {
//        if (colors[i]) {
//            squares[i].style.backgroundColor = colors[i];
//            console.log(colors);
//            squares[i].style.display="block";
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//    });
// superButton.addEventListener("click", function () {
//     easyButton.classList.remove("selected");
//     hardButton.classList.remove("selected");
//     superButton.classList.add("selected");
//    h1.style.backgroundColor = "steelblue";
//     numberOfSquares = 9;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i];
//             console.log(colors);
//             squares[i].style.display = "block";
// }
// });
colorDisplay.textContent = pickedColor;
for (var i = 0; i < colors.length; i++) {
    //squares[i].style.backgroundColor = colors[i] ;
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor) {
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play again!";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent= "Try again";
        }
    });
}
resetButton.addEventListener("click", function() {
    reset();
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//    messageDisplay.textContent="";
//     colorDisplay.textContent = pickedColor;
//     this.textContent ="New Colors";
//     for (var i = 0; i < colors.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//        }
//     h1.style.backgroundColor = "steelblue";
    
});
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor= color;
    }
     
}
function pickColor() {
 var  randomNumber = Math.floor(Math.random()*colors.length);
    return colors[randomNumber];
}
function generateRandomColors(num){
    var arr =[];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}