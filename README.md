# GifTastic
Vanderbilt Bootcamp - Week 6 assignment

## Pseudocode Description
This app will generate gifs from a set of predefined topics that a user can choose from. When the user clicks on one of the topic buttons it will generate 10 images and place them in the gallery section. Image will animate when clicked and stop when clicked again. Will also allow user to add a topic to the topic buttons.

### Pseudocode List
1. When user CLICKS a topic button: 
   1. GET 10 gifs from the Giphy api according to the selected topic
   1. REMOVE prev images from gallery if there are any
   1. DISPLAY the 10 newly FETCHED gifs in the gallery in a paused state
1. Gif will then play/pause when clicked.