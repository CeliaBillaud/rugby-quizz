import data from './data.js';

const quizz = {

    //we start with the first player
    currentPlayerIndex: 0,
    currentScore: 0,

    // //define to access in every function
    // rightAnswerMessage: null,
    // wrongAnswerMessage: null,


    init: function() {

        // quizz.rightAnswerMessage = document.querySelector(".right-answer")
        // quizz.wrongAnswerMessage = document.querySelector(".wrong-answer")

        quizz.load();
        
        //définir playersButtons au début du module
        const playersButtons = document.querySelectorAll(".name-buttons button");

        playersButtons.forEach((playerButton) => {
            playerButton.addEventListener("click", quizz.handleQuizzAnswer)
        })

        const nextButton = document.querySelector(".next-button");
        nextButton.addEventListener("click", quizz.handleNext);

        const tryAgainButton = document.querySelector(".try-again");
        tryAgainButton.addEventListener("click", quizz.handleTryAgain);

    },

    load: function() {
        const quizzElement = document.querySelector(".quizz-container")

        //clear the content of the quizz container
        quizzElement.innerHTML = "";

        //clear the message
        // quizz.rightAnswerMessage.style.display = "none";
        // quizz.wrongAnswerMessage.style.display = "none";

        //create img of a player
        const img = document.createElement("img");
        img.src = data[quizz.currentPlayerIndex][2];
        img.alt = 'Photo du joueur';
        quizzElement.prepend(img);

        //create a set for players index
        const playersIndexSet = new Set();

        //adding the right index in the set
        playersIndexSet.add(quizz.currentPlayerIndex);

        for (let i = 0; i < 3; i++){
            //adding 3 random players in the set
            const randomPlayerIndex = Math.floor( Math.random() * 53);
            if (randomPlayerIndex !== quizz.currentPlayerIndex ) {
                playersIndexSet.add(randomPlayerIndex);
            //if is equal we add the next player
            } else {
                playersIndexSet.add(randomPlayerIndex + 1)
            }
        }

        //create an array from the set
        const playersIndex = Array.from(playersIndexSet);

        //shuffle the array
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

        //create buttons

        const playersButtons = document.createElement("div");
        playersButtons.classList.add("name-buttons")
        quizzElement.append(playersButtons);

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
        const scoreElement = document.querySelector(".score span");
        const currentScore = document.querySelector(".score span").innerHTML;
        const playersButtons = document.querySelector(".name-buttons")
        const quizzElement = document.querySelector(".quizz-container")

        //hide buttons 
        playersButtons.innerHTML = "";

        //créer une div avec le nom du joueur et son poste
        const playerInfos = document.createElement("p");
        playerInfos.classList.add('player-infos');
        playerInfos.innerHTML = data[quizz.currentPlayerIndex][0] +" - "+ data[quizz.currentPlayerIndex][1];
        quizzElement.append(playerInfos)

        console.log(playerIndex);
        console.log(quizz.currentPlayerIndex)

        if (playerIndex == quizz.currentPlayerIndex){
            rightAnswerMessage.style.display = "block";
            
            // ajouter +1 au score
            const newScore = parseInt(currentScore) + 1;
            //changer le score
            scoreElement.innerHTML = newScore;

        } else {
            wrongAnswerMessage.style.display= "block";
        }
        
    },

    //Si currentIndex n'est pas à la fin du tableau, l'ajout de 1 à currentIndex le déplace vers l'index suivant.
    //Si currentIndex est à la fin du tableau (c'est-à-dire, si currentIndex + 1 égale rugbyPlayers.length), l'opérateur modulo fait en sorte que le nouvel index soit 0, retournant au début du tableau.

    handleNext: function(event) {
        const quizzElement = document.querySelector(".quizz-container")
        const quizzHeader = document.querySelector(".quizz-header")
        const nextButton = document.querySelector(".next-button")
        const rightAnswerMessage = document.querySelector(".right-answer")
        const wrongAnswerMessage = document.querySelector(".wrong-answer")
        const tryAgainButton = document.querySelector(".try-again");
        //reset messages
        rightAnswerMessage.style.display = "none";
        wrongAnswerMessage.style.display= "none";
        
        //todo quand les 53 sont passés, afficher le score et un bouton "recommencer"

        if((quizz.currentPlayerIndex + 1) % data.length === 0){
            //quizzElement display None
            quizzElement.style.display="none";
            nextButton.style.display="none";
            //add congrats
            const congratsElement = document.createElement('p');
            congratsElement.innerHTML= "Bien joué, tu as fini le quizz !";
            congratsElement.classList.add = "congrats-element";
            quizzHeader.prepend(congratsElement);
            //add button try again ?
            tryAgainButton.style.display="block";
        } else
        {
            quizz.currentPlayerIndex = (quizz.currentPlayerIndex + 1) % data.length;
            quizz.init();
        }

        
    },

    handleTryAgain: function(event) {
        //Pour recharger entièrement la page, y compris à partir du serveur (sans utiliser le cache)
        window.location.reload(true);
    }

}

document.addEventListener('DOMContentLoaded', quizz.init);
