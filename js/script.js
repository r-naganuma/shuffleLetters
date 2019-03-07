window.onload = function() {
  
    // container is the DOM element;
  // userText is the textbox
  var container = $("#sub-sentence p")
    userText = $('#sub-sentence p'); 
  
  // Shuffle the contents of container
  container.shuffleLetters();
};

window.onload = function() {

    // container is the DOM element;
  // userText is the textbox
  setTimeout(function(){
  var container = $("#sub-sentence p")
    userText = $('#sub-sentence p');
  
  // Shuffle the contents of container
  container.shuffleLetters({
        fps:50
    });
  },3500);
};