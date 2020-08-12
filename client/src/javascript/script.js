var personalCards = [memory, news, bamazon, liri, wordCLI, rpg] // train, gifSearch, trivia, hangman
var groupCards = [hopping, dabbler, tripleD];

function createCards(projects) {
  var projectCard = $("<div>").addClass("row no-gutters");
  projects.forEach(project => {
    var addApp
    if (project.app !== "''") {
      addApp = "<a href=" + project.app + " class='links' target=' '>App</a> | ";
    } else {
      addApp = "";
    }
    projectCard.html(projectCard.html() +
    "<div class='card col-md-5 portfolio-card'>" +
      "<div class='row portfolio-row'>" +
        "<div class='col-md-2 portfolioCol'>" +
          "<img src='" + project.source + "' class='card-img portfolio-img' alt='" + project.alt + "' data-toggle='popover' data-img='" + project.source + "'>" +
        "</div>" +
        "<div class='col-md-10 portfolioCol'>" +
          "<div class='card-body portfolioBody'>" +
            "<h5 class='card-title portfolio-title'>" + project.name + "</h5>" +
            "<p class='otherPages'>" +
              addApp +
              "<a href=" + project.repo + " class='links' target=' '>GitHub</a>" +
            "</p>" +
            "<p class='card-text'>" + project.description + "</p>" +
            "<p class='card-text'> Technology Used: </br>" + project.tech + "</p>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>");
  });
  $("#portfolioDeck").append(projectCard);
};

function loadCards(type) {
  if (type === "personal") {
    $("#portfolioDeck").empty();
    createCards(personalCards);
  } else if (type === "group") {
    $("#portfolioDeck").empty();
    createCards(groupCards);
  }
};

$(document).ready(function() {
  loadCards("personal");
  $(document).on("mouseenter", "[data-toggle='popover']", function() {
    if (!$(this).data("popover")) {
      $(this).popover({
        container: "body",
        html: true,
        trigger: "hover",
        content: function() { return "<img src='" + $(this).data("img") + "' class='popover-img' />"; }
      }).triggerHandler("mouseenter");
    }
  });
});

$(document).on("click", "#personalBtn", function() {
  loadCards("personal");
});

$(document).on("click", "#groupBtn", function() {
  loadCards("group");
});
