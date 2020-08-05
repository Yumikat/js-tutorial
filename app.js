var p1dice;
var p2dice;
var win;

//Generating random dice #s
function randomRoll(){
    return Math.floor(Math.random()*6 + 1);
}

//When refresh me is clicked, sets random dice numbers to each player
$(".refresh").on("click", function() {
    $("#p1emoji").empty();
    $("#p2emoji").empty();
    p1dice = randomRoll();
    p2dice = randomRoll();
    console.log("p1:" + p1dice + " p2:" + p2dice);
//sets the image in the display to the dice number rolled
    imageset1(p1dice);
    imageset2(p2dice);
    findWinner(p1dice, p2dice);
}
)

//setting the images for player 1 (i know there's probably a way to do this quicker and reuse the code for bother players, but I'm not
//sure how to do it exactly. This was the only method that I could think of, since I couldn't use a <span> inside of the src link)
function imageset1(x){
    if (x == 1) {
        $(".image1").html("<img src= 'images/dice1.png' />");
    }
    else if (x == 2) {
        $(".image1").html("<img src= 'images/dice2.png' />");
    }
    else if (x == 3) {
        $(".image1").html("<img src= 'images/dice3.png' />");
    }
    else if (x == 4) {
        $(".image1").html("<img src= 'images/dice4.png' />");
    }
    else if (x == 5) {
        $(".image1").html("<img src= 'images/dice5.png' />");
    }
    else {
        $(".image1").html("<img src= 'images/dice6.png' />");
    }
}

function imageset2(x){
    if (x == 1) {
        $(".image2").html("<img src= 'images/dice1.png' />");
    }
    else if (x == 2) {
        $(".image2").html("<img src= 'images/dice2.png' />");
    }
    else if (x == 3) {
        $(".image2").html("<img src= 'images/dice3.png' />");
    }
    else if (x == 4) {
        $(".image2").html("<img src= 'images/dice4.png' />");
    }
    else if (x == 5) {
        $(".image2").html("<img src= 'images/dice5.png' />");
    }
    else {
        $(".image2").html("<img src= 'images/dice6.png' />");
    }
}

function findWinner(x, y) {
    if (x == y) {
        $("#winner").text("Players 1 and 2 Win!!!");
        $("#p1emoji").html("<i class='fas fa-dice'></i>");
        $("#p2emoji").html("<i class='fas fa-dice'></i>");
    }
    else if (x > y) {
        $("#winner").text("Player 1 Wins!!!");
        $("#p1emoji").html("<i class='fas fa-dice'></i>");
    }
    else {
        $("#winner").text("Player 2 Wins!!!");
        $("#p2emoji").html("<i class='fas fa-dice'></i>");
    }
}
