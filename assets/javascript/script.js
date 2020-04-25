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
    "<a href='https://magusconjurer.github.io/Word-Guess-Game/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>Hangman</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

rpgGame.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1054.jpg' class='card-img' alt='https://i.picsum.photos/id/1054/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/unit-4-game/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>RPG Game</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

trivia.html("<div class='card portfolio'>" +
    "<img src='assets/images/picsum1038.jpg' class='card-img' alt='https://i.picsum.photos/id/1038/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/TriviaGame/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>Shakespeare Trivia</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

gifSearch.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1041.jpg' class='card-img' alt='https://i.picsum.photos/id/1041/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/unit-6-ajax/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>GIF Search</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

train.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum1044.jpg' class='card-img' alt='https://i.picsum.photos/id/1044/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/Train-Scheduler/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>Train Scheduler</h6>" +
      "</div>" +
    "</a>" +
  "</div>");

dabbler.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum117.jpg' class='card-img' alt='https://i.picsum.photos/id/117/200/200.jpg'>" +
    "<a href='https://magusconjurer.github.io/dabbler/' class='portfolio-link'>" +
      "<div class='card-img-overlay'>" +
        "<h6 class='card-title text-center portfolioTitles'>Dabbler</h6>" +
      "</div>" +
    "</a>" +
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