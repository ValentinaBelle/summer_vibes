const cardArray = [     
    {
        name: 'island',
        img: 'images/island.png',
    },
    {
        name: 'coconut',
        img: 'images/coconut.png',
    },
    {
        name: 'sea-shell',
        img: 'images/sea-shell.png',
    },
    {
        name: 'water-wave',
        img: 'images/water-wave.png',
    },
    {
        name: 'starfish',
        img: 'images/starfish.png',
    },
    {
        name: 'lighthouse',
        img: 'images/lighthouse.png',
    },
    {
        name: 'island',
        img: 'images/island.png',
    },
    {
        name: 'coconut',
        img: 'images/coconut.png',
    },
    {
        name: 'sea-shell',
        img: 'images/sea-shell.png',
    },
    {
        name: 'water-wave',
        img: 'images/water-wave.png',
    },
    {
        name: 'starfish',
        img: 'images/starfish.png',
    },
    {
        name: 'lighthouse',
        img: 'images/lighthouse.png',
    },
] 

// sort everything in the array randomly
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

 //check for matches
 function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
  
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        //remove the ability to click on card
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again babes')
      }
      cardsChosen = [] //start the process all over again
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations darling! You found all the all!'
      }
    }

function flipCard() {
    const cardId = this.getAttribute('data-id')
    // data-id => to know which card we clicked and get the name of the card
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
