$(document).ready(function() {
  var names = [
    "Abigail", 
    "Adam", 
    "Adda", 
    "Albert Vegelbud", 
    "Alina", 
    "Alvin", 
    "Anabelle", 
    "Anna Henrietta", 
    "Anna Strenger", 
    "Arnvald", 
    "Aryan La Valette", 
    "Avallach", 
    "Azar Javed", 
    "Barnabas Basil", 
    "Berengar", 
    "Bernard Loredo", 
    "Birna Bran", 
    "Blueboy Lugos", 
    "Bran", 
    "Brewess", 
    "Caleb Menge", 
    "Carmen", 
    "Cecil Burdon", 
    "Cedric", 
    "Celina", 
    "Cerys an Craite", 
    "Cirilla", 
    "Corinne", 
    "Crach an Craite", 
    "Cynthia", 
    "Damien", 
    "Dandelion", 
    "Dea", 
    "Declan Leuvaarden", 
    "Demavend", 
    "Dethmold", 
    "Dettlaff", 
    "Dijkstra", 
    "Edna var Attre", 
    "Emhyr var Emreis", 
    "Eredin", 
    "Ermion", 
    "Eskel", 
    "Ewald Borsodi", 
    "Felicia", 
    "Foltest", 
    "Francesca", 
    "Fringilla", 
    "Gaunter ODimm", 
    "Geels", 
    "Geralt of Rivia", 
    "Golan Vivaldi", 
    "Graham", 
    "Gramps", 
    "Guillaume", 
    "Halbjorn", 
    "Henry var Attre", 
    "Henselt", 
    "Hermit", 
    "Hjalmar an Craite", 
    "Hjort", 
    "Horst Borsodi", 
    "Igor Vivaldi", 
    "Imlerith", 
    "Ingrid Vegelbud", 
    "Iorveth", 
    "Irina", 
    "Iris von Everec", 
    "Jacques de Aldersberg", 
    "Jean Pierre", 
    "Jethro", 
    "Johnny", 
    "Julian", 
    "Kalkstein", 
    "Kiera Metz", 
    "Lady of the Lake", 
    "Lambert", 
    "Leo", 
    "Letho of Gulet", 
    "Madman Lugos", 
    "Margarita", 
    "Mary La Valette", 
    "Milton", 
    "Morenn", 
    "Morkvarg", 
    "Morvran Voorhis", 
    "Olgierd von Everec", 
    "Orianna", 
    "Palmerin", 
    "Patricia Vegelbud", 
    "Phillip Strenger", 
    "Philippa Eilhart", 
    "Priscilla", 
    "Radovid", 
    "Ramsmeat", 
    "Rayla", 
    "Raymond", 
    "Regis", 
    "Reverend", 
    "Roderick de Wett", 
    "Rosa var Attre", 
    "Sabrina", 
    "Saskia", 
    "Savolla", 
    "Shani", 
    "Sheldon Skaggs", 
    "Shilard", 
    "Siegfried", 
    "Sile de Tansarville", 
    "Skalen Burdon", 
    "Skjall", 
    "Stennis", 
    "Syanna", 
    "Tamara Strenger", 
    "Thaler", 
    "The Pellar", 
    "The Professor", 
    "Toruviel", 
    "Triss Merigold", 
    "Udalryk", 
    "Uma", 
    "Vaska", 
    "Velerad", 
    "Vernon Roche", 
    "Ves", 
    "Vesemir", 
    "Vimme Vivaldi", 
    "Vincent Meis", 
    "Vivienne", 
    "Vlodimir von Everec", 
    "Weavess", 
    "Whispess", 
    "Yaevinn", 
    "Yarpen Zigrin", 
    "Yennefer", 
    "Zoltan Chivay"];

  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var name = "";
  var lettersRemaining = 0;
  var guessesRemaining = -1;

  var wins = 0;
  var losses = 0;

  // Reset the game after a win/loss
  function Game() {
    if (guessesRemaining > 0) {
      wins++
      $("#wins").text("Wins: " + wins);
    }
    else if (guessesRemaining == 0) {
      losses++
      $("#losses").text("Losses: " + losses);
    }

    $("#name").empty();
    name = names[Math.floor(Math.random() * names.length)];

    lettersRemaining = 0;

    if (name.length > 10)
      guessesRemaining = 6;
    else if (name.length <= 10 & name.length >= 8)
      guessesRemaining = 7;
    else if (name.length < 8)
      guessesRemaining = 8;

    for (var i = 0; i < alphabet.length; i++) {
      var letterBtn = $("<button>");
      letterBtn.addClass("letter-button letter letter-button-color");
      letterBtn.attr("id", alphabet[i]);
      letterBtn.text(alphabet[i]);
      $("#buttons").append(letterBtn);
    }

    for (var i = 0; i < name.length; i++){
      var correct = $("<p>");

      if (name[i] !== " ") {
        correct.attr("id", i);
        correct.text(" _ ");
        lettersRemaining++;
      }
      else {
        correct.attr("id", "_");
        correct.html("&nbsp;&nbsp;");
      }
      $("#name").append(correct);
    }

    $("#guessesLeft").text("Guesses Remaining: " + guessesRemaining);

    console.log("Correct Name: " + name);
    console.log("Remaining Letters: " + lettersRemaining);
    console.log("Remaining Guesses: " + guessesRemaining);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("");

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
  
      $("#lettersLeft").text("Letters Remaining: " + lettersRemaining);
      $("#guessesLeft").text("Guesses Remaining: " + guessesRemaining);

      console.log("User Guessed: " + userGuess);
      console.log("Remaining Letters: " + lettersRemaining);
      console.log("Remaining Guesses: " + guessesRemaining);
      console.log("");
  
      correctGuess = false;

      if (guessesRemaining == 0 || lettersRemaining == 0) {
        $("#name").empty();

        for (var i = 0; i < name.length; i++){
          var correct = $("<p>");
    
          if (name[i] !== " ") {
            correct.attr("id", i);
            correct.text(name[i]);
            lettersRemaining++;
          }
          else {
            correct.attr("id", "_");
            correct.html("&nbsp;");
          }
          $("#name").append(correct);
        }

        for (var i = 0; i < alphabet.length; i++) {
          $("#" + alphabet[i]).remove();
        }
        
        var resetBtn = $("<button>");
        resetBtn.addClass("btn btn-dark");
        resetBtn.attr("id", "reset");
        resetBtn.text("Play Again");
        $("#buttons").append(resetBtn);
  
        if (guessesRemaining == 0) {
          $("#winLose").css("color", "orangered");
          $("#winLose").text("YOU LOSE!");
        }
        else {
          $("#winLose").css("color", "lime");
          $("#winLose").text("YOU WIN!");
        }
  
        $("#reset").on("click", function() {
          $("#reset").remove();
          $("#winLose").text("");
          Game();
        });
      }
    });
  }

  Game();

});