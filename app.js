var p1dice;
var p2dice;
var win;
var one = "1";
var two = "2";

//Generating random dice #s
function randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

//When refresh me is clicked, sets random dice numbers to each player
$(".refresh").on("click", function () {
    $("#p1emoji").empty();
    $("#p2emoji").empty();
    p1dice = randomRoll();
    p2dice = randomRoll();
    console.log("p1:" + p1dice + " p2:" + p2dice);
    //sets the image in the display to the dice number rolled
    image(p1dice, one);
    image(p2dice, two);
    findWinner(p1dice, p2dice);
}
)

//setting the images for players 1 & 2
function image(x, y) {
    link = `"<img src='images/dice` + x + `.png' />"`;
    if (y == "1") {
        $(".image1").html(link);
    }
    else {
        $(".image2").html(link);
    }
}

//finding which player won and entering an emoji to the side of the winner
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
