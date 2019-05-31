//TODO
//+ add global variables

// GLOBAL VARIABLES
var selectedTopic = "cat";
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=eUuVlEd7l3OZ27FzQGAlgo0TXWlm15Cb&q="+selectedTopic+"&limit=10";

var topics = ["Cats", "Dogs", "Deer", "Rabbits", "Fish", "Snakes", "Lions", "Chickens", "Cows", "Ferrets"];


// FUNCTIONS
function displayTopicButtons() {
   $("#topics").empty();
   for (var i = 0; i < topics.length; i++) {
      var topicName = topics[i];
      var topicButtons = 
      "<a href='#' class='topic-btn topics'>"+topicName+"</a>";
      
      $("#topics").append(topicButtons);
   }
}  //* End of DisplayTopicButtons


// MAIN PROCESS
$(document).ready(function() {

   // Display Topic Buttons
displayTopicButtons();

   // Show gifs when user clicks a topic
$(".topics").on("click", function() {
   selectedTopic = $(this).text();
   console.log('selectedTopic: ', selectedTopic);
   giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=eUuVlEd7l3OZ27FzQGAlgo0TXWlm15Cb&q="+selectedTopic+"&limit=10";

   $.ajax({
      url: giphyURL,
      method: "GET"
   }).then(function(response) {
      $("#gallery").empty();
      for (var i = 0; i < 10; i++) {
         var stillURL = response.data[i].images.fixed_width_still.url;
         var gifyURL = response.data[i].images.fixed_width.url;
         var rated = response.data[i].rating;

         var ratingP = $("<h4 id='gallery-header'>").text("Rating: "+rated);
         var galleryImage = $("<img class='gallery-img' alt='placeholder'>");
         galleryImage.attr("src", stillURL);
         galleryImage.attr("data-state", "still");
         galleryImage.attr("data-animate", gifyURL);
         galleryImage.attr("data-still", stillURL);
         galleryImage.attr("alt", "Cat Gif");

         var final = $("<div id='gallery-content'>");
         
         final.append(ratingP);
         final.append(galleryImage);

         $("#gallery").append(final);
      }
   });
});

   // Add submit topic feature
$("#add-topic-submit").on("click", function() {
   var value = $("#topic-text").val();
   
   if (value) {
   topics.push(value);
   } else {}

   $("#topic-text").val("");
   displayTopicButtons();
});

}); //* End of Doc Ready
