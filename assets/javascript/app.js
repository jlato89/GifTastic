//TODO
//+ add global variables

// GLOBAL VARIABLES
var topics = ["Cats", "Dogs", "Deer", "Rabbits", "Fish", "Snakes", "Lions", "Chickens", "Cows", "Ferrets"];



// FUNCTIONS
function displayTopicButtons() {
   $("#topics").empty();
   for (var i = 0; i < topics.length; i++) {
      var topicName = topics[i];
      var topicButtons = 
      "<a href='#' class='topic-btn'>"+topicName+"</a>";
      
      $("#topics").append(topicButtons);
   }
}

$(document).ready(function() {

// MAIN PROCESS
displayTopicButtons();

});
