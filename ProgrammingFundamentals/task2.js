// Creating global variables for calculating the delta time
let timeAtLastFrame = new Date();
let deltaTime;

// Creating global variables for what we are moving
let movementSpeed = 10;
let x = 0;

function timeBasedMovement(speed) {
    // Multiply speed by deltaTime to calculate how much movement
    // should take place based on how long the last frame took
    x += speed * deltaTime;
}

while (true) {
    // Calculating delta time
    deltaTime = new Date() - timeAtLastFrame;
    timeAtLastFrame = new Date();
    
    timeBasedMovement(movementSpeed);
}