import data from './data.js';

const quizz = {

    //we need this info in every functions so we define it in the init
    rightPlayerIndex: null,


    init: function() {
        //define the player
        //choose a random player between 0 and 53
        quizz.rightPlayerIndex = Math.floor( Math.random() * 53);

        quizz.load();
        
        //définir playersButtons au début du module
        const playersButtons = document.querySelectorAll(".name-buttons button");

        playersButtons.forEach((playerButton) => {
            playerButton.addEventListener("click", quizz.handleQuizzAnswer)
        })

        const nextButton = document.querySelector(".next-button")
        nextButton.addEventListener("click", quizz.handleNext)

    },

    load: function() {
        const quizzElement = document.querySelector(".quizz-container")

        //create img of a player
        const img = document.createElement("img");
        img.src = data[quizz.rightPlayerIndex][2];
        img.alt = 'Photo du joueur';
        img.style = 'width: 15%'
        quizzElement.prepend(img);

        //create a set for players index
        const playersIndexSet = new Set();

        //adding the right index in the set
        playersIndexSet.add(quizz.rightPlayerIndex);

        for (let i = 0; i < 3; i++){
            //adding 3 random players in the set
            const randomPlayerIndex = Math.floor( Math.random() * 53);
            if (randomPlayerIndex !== quizz.rightPlayerIndex ) {
                playersIndexSet.add(randomPlayerIndex);
            //if is equal we add the next player
            } else {
                playersIndexSet.add(randomPlayerIndex + 1)
            }
        }

        //create an array from the set
        const playersIndex = Array.from(playersIndexSet);

        //shuffle the array
        console.log(playersIndex)

        // declare the function 
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1)); // Indice aléatoire entre 0 et i (inclus)
              // Échange array[i] avec array[j]
              [array[i], array[j]] = [array[j], array[i]];
            }
            return array; // Retourne le tableau mélangé
          }

        //   Explication :

        //   L'algorithme commence à la fin du tableau et parcourt jusqu'au début.
        //   À chaque étape, il génère un indice aléatoire entre 0 et i (inclus).
        //   Ensuite, il échange l'élément à l'indice i avec l'élément à l'indice aléatoire j.
        //   Cette méthode garantit un mélange équitable.

        const shuffledPlayersIndex = shuffle(playersIndex);

        console.log(shuffledPlayersIndex)

        //create buttons
        const playersButtons = document.querySelector(".name-buttons")

        shuffledPlayersIndex.forEach(playerIndex => {
            const playerButton = document.createElement("button");
            playerButton.textContent = data[playerIndex][0];
            playerButton.dataset.playerIndex = playerIndex;
            playersButtons.append(playerButton)
        });

    },

    handleQuizzAnswer: function(event) {
        const clickedButtonElement = event.currentTarget;
        const playerIndex = clickedButtonElement.dataset.playerIndex;
        const rightAnswerMessage = document.querySelector(".right-answer")
        const wrongAnswerMessage = document.querySelector(".wrong-answer")
        //reset messages
        rightAnswerMessage.style.display = "none";
        wrongAnswerMessage.style.display= "none";

        console.log(playerIndex);
        console.log(quizz.rightPlayerIndex)

        if (playerIndex == quizz.rightPlayerIndex){
            rightAnswerMessage.style.display = "block";
        } else {
            wrongAnswerMessage.style.display= "block";
        }
        
    },

    handleNext: function(event) {
        location.reload();
    }

    

}

document.addEventListener('DOMContentLoaded', quizz.init);
