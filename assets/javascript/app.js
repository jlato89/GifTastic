//TODO
//+ add global variables

// MAIN PROCESS
displayTopicButtons();

// FUNCTIONS
function displayTopicButtons() {
   for (var i = 0; i < topics.length; i++) {
      var topicName = topics[i];
      var topicButtons = 
      "<a href='#' class='topic-btn'>"+topicName+"</a>";
      
      $("#topics").append(topicButtons);
   }
}


// GLOBAL VARIABLES
var topics = ["Cats", "Dogs", "Deer", "Rabbits", "Fish", "Snakes", "Lions", "Chickens", "Cows", "Ferrets"];
console.log('topics: ', topics);
