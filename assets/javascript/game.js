$(document).ready(function() {
  var names = [
    "abigail", 
    "aldersberg", 
    "alvin", 
    "annarietta", 
    "avallach", 
    "berengar", 
    "carmen", 
    "cecil", 
    "cerys", 
    "cirilla", 
    "crach", 
    "cynthia", 
    "dandelion", 
    "demavend", 
    "dethmold", 
    "dijkstra", 
    "emhyr", 
    "eredin", 
    "ermion", 
    "eskel", 
    "foltest", 
    "gaunter", 
    "geralt", 
    "gramps", 
    "guillaume", 
    "henselt", 
    "hjalmar", 
    "imlerith", 
    "iorveth", 
    "javed", 
    "johnny", 
    "kalkstein", 
    "kiera", 
    "lambert", 
    "letho", 
    "leuvaarden", 
    "loredo", 
    "nimue", 
    "olgierd", 
    "orianna", 
    "phillip", 
    "philippa", 
    "priscilla", 
    "professor", 
    "radovid", 
    "ramsmeat", 
    "rayla", 
    "raymond", 
    "regis", 
    "roche", 
    "saskia", 
    "savolla", 
    "shani", 
    "siegfried", 
    "stennis", 
    "syanna", 
    "thaler", 
    "toruviel", 
    "triss", 
    "vaska", 
    "velerad", 
    "vesemir", 
    "vincent", 
    "vivaldi", 
    "vivienne", 
    "vlodimir", 
    "yaevinn", 
    "yarpin", 
    "yennefer", 
    "zoltan"];

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var name = "";
  var guessesRemaining = -1;
  var lettersRemaining = name.length;

  var wins = 0;
  var losses = 0;

  // Reset the game after a win/loss
  function Reset() {
    if (guessesRemaining > 0) {
      wins++
    }
    else if (guessesRemaining == 0) {
      losses++
    }

    $("#name").empty();
    name = names[Math.floor(Math.random() * names.length)];

    for (var i = 0; i < alphabet.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("id", alphabet[i]);
      letterBtn.text(alphabet[i]);
      $("#buttons").append(letterBtn);
    }

    for (var i = 0; i < name.length; i++){
      var correct = $("<p>");
      correct.attr("id", i);
      correct.text(" _ ");
      $("#name").append(correct);
    }
    
    guessesRemaining = 6;
    lettersRemaining = name.length;

    console.log("Correct Name: " + name);
    console.log("Remaining Guesses: " + guessesRemaining);
    console.log("Remaining Letters: " + lettersRemaining);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("");
  }

  Reset();

  $(".letter-button").on("click", function() {
    var userGuess = document.getElementById(this.id).id;
    var correctGuess = false;
    $("#" + userGuess).remove();

    for (var i = 0; i < name.length; i++) {
      if(userGuess === name[i].toUpperCase()) {
        document.getElementById(i).textContent = " " + name[i].toUpperCase() + " ";
        lettersRemaining--;
        correctGuess = true;
      }
    }

    if (!correctGuess) {
      guessesRemaining--;
    }

    console.log("User Guessed: " + userGuess);
    console.log("Remaining Guesses: " + guessesRemaining);
    console.log("Remaining Letters: " + lettersRemaining);
    console.log("");

    correctGuess = false;

    if (guessesRemaining == 0 || lettersRemaining == 0) {
      for (var i = 0; i < alphabet.length; i++) {
        $("#" + alphabet[i]).detach();
      }
      Reset();
    }
  });

});