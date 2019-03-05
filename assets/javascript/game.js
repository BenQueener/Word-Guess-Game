    //This function take the computer choice name, the current 'scoreboard' and the
    //user chosen letter and returns and updated scoreboard
    function updateAnswer( compName, filledName, userLetter ){
        
        //find the indexes of all the locations of the letter
        // 'indices' will store the index of off the occuring letters
        var indicies = [];
        // This sets the index of the first occurance of the user-chosen letter
        var idx = compName.indexOf(userLetter);
       // loops while there are still occurances, shortens the loop each time and logs the index .
        while (idx !== -1) {
            indicies.push(idx);
            idx = compName.indexOf(userLetter, idx + 1);
        }   
        //replace the underscore with the letter in those posistions
        //make a for loop that goes through the filled-in name the number of times it
        //happened and replace the index location with the letter
        for (i=0;i < indicies.length; i++) {
            filledName[indicies[i]] = userLetter; 
        }
        
        return filledName;
    }
    

    var names = ["bumblebee", "wheeljack", "cliffjumper", "prowl", "jazz", "sideswipe", "rachet", "ironhide"]

    // Initialize the things we need to track
    var wins = 0;
    var guessesLeft = 10;
    var guessesSofar =[];
    
    //We will use 'letters' to make sure they type a letter
    var letters = "abcdefghijklmnopqrstuvwxyz";
    //The computer randomly chooses a name from the list
    var computerChoice = names[Math.floor(Math.random() * names.length)];
    //split the name into an array of the letters
    var actualAnswerElement = document.getElementById("actualAnswer");
    actualAnswerElement.textContent = computerChoice;
    computerChoice = computerChoice.split("");
    // now create an array that is  the length of the name but filled with underscores
    var answer = Array.apply(null, Array(computerChoice.length )).map(String.prototype.valueOf,"_");
    //answer = computerChoice.map(function(letter){ return "_"})
    //execute when a key is pressed

    //Alerts the user to a change in wins,  guesses left and the letters guessed so far
    var winsElement = document.getElementById("wins");
    winsElement.textContent = wins;
    var answerElement = document.getElementById("answer");
    answerElement.textContent = answer;
    var guessesLeftElement = document.getElementById("guessesLeft");
    guessesLeftElement.textContent = guessesLeft;
    var guessesSofarElement = document.getElementById("guessesSofar");
    guessesSofarElement.textContent = guessesSofar;



    document.onkeyup = function(event) {

        // Determines which key was pressed. 
        var userGuess = event.key;

            // Check if the user inputted something valid
            if(letters.includes(userGuess) == true){
                //if we choose a letter we've haven't already guessed
                if (guessesSofar.includes(userGuess) !== true) {
                              
                    // if we choose a letter that is right
                    if ( computerChoice.includes(userGuess) == true) {
                        //update the user with the letters filled in by passing an array of 
                        //the letters already found. Pass back an updated array
                        answer=updateAnswer(computerChoice,answer,userGuess);
                        answerElement.textContent=answer;

                        //if we finished the puzzle
                        if (answer.includes("_") !== true) {
                            //and one to the wins
                            wins = wins +1;
                            winsElement.textContent = wins;
                            //reset the game
                            guessesLeft = 10;
                            guessesLeftElement.textContent = guessesLeft;
                            //reset the list of letters guessed
                            guessesSofar = [];
                            guessesSofarElement.textContent = guessesSofar;
                            //set a new computer guess
                            computerChoice = names[Math.floor(Math.random() * names.length)];
                            actualAnswerElement.textContent = computerChoice;
                            //split the name into an array of the letters
                            computerChoice = computerChoice.split("");
                            // now create an array that is  the length of the name but filled with underscores
                            answer = Array.apply(null, Array(computerChoice.length )).map(String.prototype.valueOf,"_")
                            answerElement.textContent = answer;
                        }
                        //if there are still answers left
                        else {
                             //If we chose the right letter and there are no more guesses left...
                            if (guessesLeft-1 == 0){ 
                            //reset the game
                            guessesLeft = 10;
                            guessesLeftElement.textContent = guessesLeft;
                            //reset the list of letters guessed
                            guessesSofar = [];
                            guessesSofarElement.textContent = guessesSofar;
                            //set a new computer guess
                            computerChoice = names[Math.floor(Math.random() * names.length)];
                            actualAnswerElement.textContent = computerChoice;
                            //split the name into an array of the letters
                            computerChoice = computerChoice.split("");
                            // now create an array that is  the length of the name but filled with underscores
                            answer = Array.apply(null, Array(computerChoice.length )).map(String.prototype.valueOf,"_")
                            answerElement.textContent = answer;
                            }
                            //if we chose the right letter and there are still guesses left
                            else {
                            //guesses left gets reset
                            guessesLeft = guessesLeft - 1;
                            guessesLeftElement.textContent = guessesLeft;
                            } 
                        }       
                    }

                    //if we choose a new letter that is wrong
                    else {
                        //If we chose the wrong letter and there are no more guesses left...
                        if (guessesLeft-1 == 0){ 
                            //reset the game
                            guessesLeft = 10;
                            guessesLeftElement.textContent = guessesLeft;
                            //reset the list of letters guessed
                            guessesSofar = [];
                            guessesSofarElement.textContent = guessesSofar;
                            //set a new computer guess
                            computerChoice = names[Math.floor(Math.random() * names.length)];
                            actualAnswerElement.textContent = computerChoice;
                            //split the name into an array of the letters
                            computerChoice = computerChoice.split("");
                            // now create an array that is  the length of the name but filled with underscores
                            answer = Array.apply(null, Array(computerChoice.length )).map(String.prototype.valueOf,"_")
                            answerElement.textContent = answer;
                        }
                        //If we chose the wrong letter and we still have some guesses left...
                        else{
                        //guesses left goes down by 1
                        guessesLeft = guessesLeft - 1;
                        guessesLeftElement.textContent = guessesLeft;
                        // add the letter to the list of letters already guessed
                        guessesSofar.push(userGuess);
                        // then sort the letters in alphabetical order because that looks nice.
                        guessesSofar = guessesSofar.sort();
                        guessesSofarElement.textContent = guessesSofar;
                        }
                    }
                    
                }

            } 
            //if  you didn't enter a lower case letter
            else {
                console.log("Please center a lowercase letter");
            }


    }