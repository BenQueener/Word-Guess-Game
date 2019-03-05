# Word Guess game

I have heavily commented my file.  It should be possible to read through and see exactly what is going on.  In the HTML file I made a lightly styled Jumbotron that gives the wins, letters guess, guesses left and a series of underscores for each letter of the name.  I added a hint for the TAs so they won't have to work on it forever.

My approach to the game was to set out all the possible things that could happen when the user entered a letter.  I put those options in nested in/else loops

//Did the  user input something valid (a lowercase letter)
    //if we choose a letter we've haven't already guessed
        //if we choose a letter that is right
            //if we finished the puzzle
            //if we aren't finished (there are still letters left in the answer)
                //If we chose the right letter and there are no more guesses left.
                //if we chose the right letter and there are still guesses left.
        //if we choose a new letter that is wrong
            //If we chose the wrong letter and there are no more guesses left.
            //If we chose the wrong letter and we still have some guesses left.
//if  you didn't enter a lower case letter
      
I did not do as much styling as I wanted to.  I finished the jovascript portions of both homeworks, and spend more time than I maybe should have helping other people.  This is what I finished.  I intended to have a background image and have images load of the autobots if they were correctly chosen.  (maybe some sound too)