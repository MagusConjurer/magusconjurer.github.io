var hangman = $("<div>").addClass("col mb-4");
var rpgGame = $("<div>").addClass("col mb-4");
var trivia = $("<div>").addClass("col mb-4");
var gifSearch = $("<div>").addClass("col mb-4");
var train = $("<div>").addClass("col mb-4");
var dabbler = $("<div>").addClass("col mb-4");

hangman.html("<div class='card portfolio'>" +
    "<img src='assets/images/picsum1021.jpg' class='card-img' alt='https://i.picsum.photos/id/1021/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/Word-Guess-Game/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>Hangman</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

rpgGame.html("<div class='card portfolio'>" +
  "<img src=assets/images/picsum1054.jpg' class='card-img' alt='https://i.picsum.photos/id/1054/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/unit-4-game/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>RPG Game</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

trivia.html("<div class='card portfolio'>" +
    "<img src='assets/images/picsum1038.jpg' class='card-img' alt='https://i.picsum.photos/id/1038/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/TriviaGame/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>Shakespeare Trivia</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

gifSearch.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1041.jpg' class='card-img' alt='https://i.picsum.photos/id/1041/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/unit-6-ajax/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>GIF Search</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

train.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1044.jpg' class='card-img' alt='https://i.picsum.photos/id/1044/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/Train-Scheduler/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>Train Scheduler</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

dabbler.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum117.jpg' class='card-img' alt='https://i.picsum.photos/id/117/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/dabbler/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center'>Dabbler</h6>" +
      "</div>" +
    "</a>" +
  "</div>");




$(document).on("click", "#personalBtn", function(){
  $("#portfolioDeck").append(dabbler);
  

});