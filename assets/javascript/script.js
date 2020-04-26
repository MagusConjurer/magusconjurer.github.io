var hangman = $("<div>").addClass("col mb-4");
var rpgGame = $("<div>").addClass("col mb-4");
var trivia = $("<div>").addClass("col mb-4");
var gifSearch = $("<div>").addClass("col mb-4");
var train = $("<div>").addClass("col mb-4");
var dabbler = $("<div>").addClass("col mb-4");

var personalCards = [hangman, rpgGame, trivia, gifSearch, train];
var groupCards = [dabbler];

hangman.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1021.jpg' class='card-img' alt='https://i.picsum.photos/id/1021/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Hangman</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/Word-Guess-Game' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/Word-Guess-Game' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

rpgGame.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1054.jpg' class='card-img' alt='https://i.picsum.photos/id/1054/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>RPG Game</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/unit-4-game/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/unit-4-game' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

trivia.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1038.jpg' class='card-img' alt='https://i.picsum.photos/id/1038/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Shakespeare Trivia</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/TriviaGame/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/TriviaGame' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

gifSearch.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1041.jpg' class='card-img' alt='https://i.picsum.photos/id/1041/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>GIF Search</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/unit-6-ajax/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/unit-6-ajax' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

train.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1044.jpg' class='card-img' alt='https://i.picsum.photos/id/1044/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Train Scheduler</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/Train-Scheduler/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/Train-Scheduler' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

dabbler.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum117.jpg' class='card-img' alt='https://i.picsum.photos/id/117/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Dabbler</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/dabbler/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/dabbler' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

function loadCards(type){
  if(type == "personal"){
    $("#portfolioDeck").empty();
    for(var i = 0; i < personalCards.length; i++){
      $("#portfolioDeck").append(personalCards[i]);
    }
  } else if (type == "group") {
    $("#portfolioDeck").empty();
    for(var i = 0; i < groupCards.length; i++){
      $("#portfolioDeck").append(groupCards[i]);
    }
  }
};


$(document).ready(loadCards("personal"));


$(document).on("click", "#personalBtn", function(){
  loadCards("personal");
});

$(document).on("click", "#groupBtn", function(){
  loadCards("group");
});