// Game state variables
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;

// Card symbols (emojis) - 8 pairs for 16 cards
const cardSymbols = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

// DOM elements
const gameBoard = document.getElementById('game-board');
const restartBtn = document.getElementById('restart-btn');
const movesDisplay = document.getElementById('moves');
const gameOverModal = document.getElementById('game-over');
const finalMovesDisplay = document.getElementById('final-moves');
const playAgainBtn = document.getElementById('play-again-btn');

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    
    // Add event listeners
    restartBtn.addEventListener('click', initializeGame);
    playAgainBtn.addEventListener('click', () => {
        gameOverModal.classList.remove('show');
        initializeGame();
    });
});

/**
 * Initialize the game by creating cards, shuffling them, and setting up the board
 */
function initializeGame() {
    // Reset game state
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    canFlip = true;
    
    // Update display
    movesDisplay.textContent = moves;
    
    // Clear the game board
    gameBoard.innerHTML = '';
    
    // Create card pairs
    const cardPairs = [...cardSymbols, ...cardSymbols]; // Duplicate each symbol
    
    // Shuffle the cards
    shuffleArray(cardPairs);
    
    // Create card elements and add them to the board
    cardPairs.forEach((symbol, index) => {
        const card = createCard(symbol, index);
        gameBoard.appendChild(card);
        cards.push(card);
    });
}

/**
 * Create a single card element with front and back faces
 * @param {string} symbol - The emoji symbol for the card
 * @param {number} index - The index of the card
 * @returns {HTMLElement} The card element
 */
function createCard(symbol, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;
    card.dataset.symbol = symbol;
    
    // Create card front (shows the symbol)
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    cardFront.textContent = symbol;
    
    // Create card back (shows the back design)
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.textContent = '❓';
    
    // Add front and back to the card
    card.appendChild(cardFront);
    card.appendChild(cardBack);
    
    // Add click event listener
    card.addEventListener('click', () => flipCard(card));
    
    return card;
}

/**
 * Handle card flipping logic
 * @param {HTMLElement} card - The card element that was clicked
 */
function flipCard(card) {
    // Don't allow flipping if:
    // 1. Card is already flipped or matched
    // 2. Two cards are already flipped and we're waiting
    // 3. This card is already in the flipped cards array
    if (!canFlip || 
        card.classList.contains('flipped') || 
        card.classList.contains('matched') ||
        flippedCards.includes(card)) {
        return;
    }
    
    // Flip the card
    card.classList.add('flipped');
    flippedCards.push(card);
    
    // If this is the second card flipped, check for a match
    if (flippedCards.length === 2) {
        canFlip = false; // Prevent more flipping while checking
        moves++;
        movesDisplay.textContent = moves;
        
        // Check if the cards match
        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            // Cards match!
            setTimeout(() => {
                flippedCards[0].classList.add('matched');
                flippedCards[1].classList.add('matched');
                flippedCards = [];
                matchedPairs++;
                canFlip = true;
                
                // Check if game is complete
                if (matchedPairs === cardSymbols.length) {
                    setTimeout(showGameOver, 500);
                }
            }, 500);
        } else {
            // Cards don't match - flip them back after a delay
            setTimeout(() => {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }
}

/**
 * Shuffle an array using the Fisher-Yates algorithm
 * @param {Array} array - The array to shuffle
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Show the game over modal when all pairs are matched
 */
function showGameOver() {
    finalMovesDisplay.textContent = moves;
    gameOverModal.classList.add('show');
}

/**
 * Add some fun animations and effects
 */
function addCardEffects() {
    // Add a subtle bounce effect when cards are matched
    const matchedCards = document.querySelectorAll('.card.matched');
    matchedCards.forEach(card => {
        card.style.animation = 'bounce 0.6s ease-in-out';
    });
}

// Add CSS animation for bounce effect
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) scale(0.95);
        }
        40% {
            transform: translateY(-10px) scale(1.05);
        }
        60% {
            transform: translateY(-5px) scale(1.02);
        }
    }
`;
document.head.appendChild(style);
