# Memory Card Game

A simple and fun memory card game built with vanilla HTML, CSS, and JavaScript.

## Features

- **4x4 Grid**: 16 cards arranged in a 4x4 grid (8 pairs of matching cards)
- **Card Flipping**: Click cards to reveal their symbols
- **Matching Logic**: Find pairs of matching cards to win
- **Move Counter**: Track how many moves you make
- **Restart Game**: Shuffle and restart the game at any time
- **Game Over Modal**: Celebration when you complete the game
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Beautiful card flip and hover effects

## How to Play

1. **Start the Game**: Open `index.html` in your web browser
2. **Flip Cards**: Click on any card to reveal its symbol
3. **Find Matches**: Click on a second card to see if it matches the first
4. **Match Pairs**: If cards match, they stay revealed. If not, they flip back
5. **Complete the Game**: Find all 8 pairs to win!
6. **Restart**: Use the "Restart Game" button to shuffle and start over

## Game Rules

- You can only flip two cards at a time
- Cards that don't match will automatically flip back after 1 second
- Cards that match will stay revealed and change color
- The game tracks your moves (each pair of cards flipped counts as 1 move)
- Try to complete the game with as few moves as possible!

## File Structure

```
memory-card-game/
├── index.html      # Main HTML structure
├── style.css       # CSS styling and animations
├── script.js       # JavaScript game logic
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No frameworks or libraries required
- **CSS Grid**: For the card layout
- **CSS Transforms**: For card flip animations

## Browser Compatibility

This game works in all modern browsers that support:
- CSS Grid
- CSS Transforms
- ES6 JavaScript features

## Customization

You can easily customize the game by:

1. **Changing Card Symbols**: Modify the `cardSymbols` array in `script.js`
2. **Adjusting Grid Size**: Change the grid layout in `style.css`
3. **Modifying Colors**: Update the CSS variables and gradients
4. **Adding Sound Effects**: Include audio files and JavaScript audio API calls

## Getting Started

1. Download or clone the files to your computer
2. Open `index.html` in your web browser
3. Start playing!

No server setup or installation required - just open the HTML file and enjoy!

## License

This project is open source and available under the MIT License.

