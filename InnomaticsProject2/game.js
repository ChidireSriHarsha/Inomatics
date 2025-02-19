let selectedCategory;
let cards = [];
let flippedCards = [];
let score = 0;
let timer;
let timeLeft = 30;

const categories = {
    fruits: ['🍎', '🍌', '🍇', '🍉', '🍓', '🍍', '🍊', '🍑'],
    emojis: ['😀', '😂', '😍', '😎', '😢', '😡', '😱', '🤔'],
    animals: ['🐶', '🐱', '🐰', '🐻', '🐼', '🐨', '🦁', '🐸'],
    planets: ['🌍', '🌕', '🌟', '🌌', '🌑', '🌞', '🌎', '🌏'],
    flags: ['🇺🇸', '🇬🇧', '🇨🇦', '🇦🇺', '🇩🇪', '🇫🇷', '🇯🇵', '🇧🇷']
};

function startGame(category) {
    selectedCategory = category;
    cards = createCards(selectedCategory);
    shuffle(cards);
    displayCards();
    startTimer();
}

function createCards(category) {
    const cardArray = categories[category];
    return [...cardArray, ...cardArray].map(item => ({ value: item, matched: false }));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayCards() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = '';
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-index', index);
        cardElement.addEventListener('click', handleCardClick);
        gameContainer.appendChild(cardElement);
    });
}

function handleCardClick(event) {
    const cardElement = event.currentTarget;
    const index = cardElement.getAttribute('data-index');
    if (flippedCards.length < 2 && !cards[index].matched) {
        cardElement.textContent = cards[index].value;
        cardElement.classList.add('flipped');
        flippedCards.push({ cardElement, index });
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    if (cards[firstCard.index].value === cards[secondCard.index].value) {
        cards[firstCard.index].matched = true;
        cards[secondCard.index].matched = true;
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    } else {
        firstCard.cardElement.textContent = '';
        secondCard.cardElement.textContent = '';
        firstCard.cardElement.classList.remove('flipped');
        secondCard.cardElement.classList.remove('flipped');
    }
    flippedCards = [];
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').textContent = `Time: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    document.getElementById('game-over').textContent = score === (cards.length / 2) ? 'You Win!' : 'Game Over!';
    document.getElementById('game-over').style.display = 'block';
    clearInterval(timer);
}
