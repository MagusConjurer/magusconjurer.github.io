var hangman = $("<div>").addClass("col mb-4"),
    rpgGame = $("<div>").addClass("col mb-4"), 
    trivia = $("<div>").addClass("col mb-4"), 
    gifSearch = $("<div>").addClass("col mb-4"), 
    train = $("<div>").addClass("col mb-4"), 
    dabbler = $("<div>").addClass("col mb-4"), 
    liri = $("<div>").addClass("col mb-4"), 
    wordCLI = $("<div>").addClass("col mb-4"), 
    bamazon = $("<div>").addClass("col mb-4");

var personalCards = [bamazon, wordCLI, liri, train, gifSearch, trivia, rpgGame, hangman];
var groupCards = [dabbler];
var picsumImages = [11, 16, 117, 140, 202, 1021, 1037, 1038, 1041, 1044, 1054];

hangman.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[0] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[0] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Hangman</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/Word-Guess-Game' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/Word-Guess-Game' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

rpgGame.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[1] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[1] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>RPG Game</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/unit-4-game/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/unit-4-game' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

trivia.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[2] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[2] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Shakespeare Trivia</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/TriviaGame/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/TriviaGame' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

gifSearch.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[3] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[3] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>GIF Search</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/unit-6-ajax/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/unit-6-ajax' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

train.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[4] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[4] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Train Scheduler</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/Train-Scheduler/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/Train-Scheduler' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

dabbler.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[5] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[5] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Dabbler</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://magusconjurer.github.io/dabbler/' class='links' target=' '>App</a> | " +
        "<a href='https://github.com/MagusConjurer/dabbler' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>");

liri.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[6] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[6] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>LIRI</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://github.com/MagusConjurer/liri-node-app' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>"); 

wordCLI.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[7] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[7] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>CLI Word Guess</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://github.com/MagusConjurer/cli-word-guess' class='links' target=' '>GitHub</a>" +
      "</p>" +
    "</div>" +
  "</div>"); 

bamazon.html("<div class='card portfolio'>" +
  "<img src='assets/images/picsum" + picsumImages[8] + ".jpg' class='card-img' alt='https://i.picsum.photos/id/" + picsumImages[8] + "/200/200.jpg'>" +
    "<div class='card-img-overlay'>" +
      "<h6 class='card-title text-center portfolioTitles'>Bamazon</h6>" +
      "<p class='otherPages'>" +
        "<a href='https://github.com/MagusConjurer/bamazon' class='links' target=' '>GitHub</a>" +
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