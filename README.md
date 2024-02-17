
# Flappy Bird Game
Welcome to the Flappy Bird game, a classic and addictive game where you control a bird and navigate it through pipes to earn points.

## Overview
This game is built using HTML5 Canvas and JavaScript. The main components of the game are:

Bird: The player's character, represented as a colorful bird.
Pipes: Green pipes that the bird must pass through without colliding.
Score: Displays the player's current score.
How to Play
Use the spacebar key to make the bird flap its wings and ascend.
Navigate the bird through the gaps between pipes.
Every time the bird successfully passes through a set of pipes, your score increases.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/flappy-bird.git
Open index.html in your web browser.

## Code Details
The game logic is implemented in JavaScript, with HTML for the layout and Canvas for rendering.

bird: Object representing the bird with properties such as position, size, and velocity.
pipes: Array holding pipe objects with properties for position and size.
drawBird(): Draws the bird on the canvas.
drawPipes(): Draws the pipes on the canvas.
drawScore(): Displays the current score on the canvas.
update(): Updates the game state including bird movement, pipe generation, and collision detection.
createPipe(): Creates a new set of pipes.
resetGame(): Resets the game when the bird collides with a pipe.
gameLoop(): The main game loop responsible for rendering and updating the game continuously.
Customization
Feel free to customize the game by tweaking parameters such as bird speed, pipe gap, and pipe speed in the code.

## Credits
[BNDNK] There was no tutor.

## License
This project is licensed under the MIT License. Feel free to use and modify it according to your needs.
