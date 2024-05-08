import data from './data.js';

const quizz = {
    quizzElement: null,
    rightAnswerMessage : null,
    wrongAnswerMessage: null,
    scoreElement : null,
    playersButtons : null,
    nextButton : null,
    tryAgainButton : null,


    //we start with the first player
    currentPlayerIndex: 0,
    currentScore: 0,

    init: function() {
        quizz.initElement();
        quizz.load();
        quizz.bind();
    },

    initElement : function(){
        quizz.quizzElement = document.querySelector(".quizz-container");
        quizz.rightAnswerMessage = document.querySelector(".right-answer")
        quizz.wrongAnswerMessage = document.querySelector(".wrong-answer")
        quizz.scoreElement = document.querySelector(".score span");
        quizz.playersButtons = document.querySelectorAll(".name-buttons button");
        quizz.nextButton = document.querySelector(".next-button");
        quizz.tryAgainButton = document.querySelector(".try-again");

    },

    bind: function(){
        quizz.playersButtons.forEach((playerButton) => {
            playerButton.addEventListener("click", quizz.handleQuizzAnswer)
        })

        quizz.nextButton.addEventListener("click", quizz.handleNext);
        quizz.tryAgainButton.addEventListener("click", quizz.handleTryAgain);
    },

    load: function() {
        //clear the content of the quizz container
        quizz.quizzElement.innerHTML = "";

        //create img of a player
        const img = document.createElement("img");
        img.src = data[quizz.currentPlayerIndex][2];
        img.alt = 'Photo du joueur';
        quizz.quizzElement.prepend(img);

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
        quizz.quizzElement.append(playersButtons);

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
        const currentScore = document.querySelector(".score span").innerHTML;

        //hide buttons 
        quizz.playersButtons.innerHTML = "";

        //créer une div avec le nom du joueur et son poste
        const playerInfos = document.createElement("p");
        playerInfos.classList.add('player-infos');
        playerInfos.innerHTML = data[quizz.currentPlayerIndex][0] +" - "+ data[quizz.currentPlayerIndex][1];
        quizz.quizzElement.append(playerInfos)

        console.log(playerIndex);
        console.log(quizz.currentPlayerIndex)

        if (playerIndex == quizz.currentPlayerIndex){
            quizz.rightAnswerMessage.style.display = "block";
            
            // ajouter +1 au score
            const newScore = parseInt(currentScore) + 1;
            //changer le score
            quizz.scoreElement.innerHTML = newScore;

        } else {
            quizz.wrongAnswerMessage.style.display= "block";
        }
        
    },

    //Si currentIndex n'est pas à la fin du tableau, l'ajout de 1 à currentIndex le déplace vers l'index suivant.
    //Si currentIndex est à la fin du tableau (c'est-à-dire, si currentIndex + 1 égale rugbyPlayers.length), l'opérateur modulo fait en sorte que le nouvel index soit 0, retournant au début du tableau.

    handleNext: function(event) {
        const quizzHeader = document.querySelector(".quizz-header")
        const nextButton = document.querySelector(".next-button")
        const tryAgainButton = document.querySelector(".try-again");
        //reset messages
        quizz.rightAnswerMessage.style.display = "none";
        quizz.wrongAnswerMessage.style.display= "none";

        if((quizz.currentPlayerIndex + 1) % data.length === 0){
            //quizzElement display None
            quizz.quizzElement.style.display="none";
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
