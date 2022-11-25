/*
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
*/




function round(num) {
    return Math.round(num * 100) / 100;
}

function lerp(start, end, progress) {
    return start + (end - start) * progress;
}

function easeIn(time) {
    return time * time;
}

function easeOut(time) {
    return 1 - (easeIn(1 - time));
}

function easeInOut(time) {
    return lerp(easeIn(time), easeOut(time), time);
}

function spike(time) {
    if (time <= 0.5) {
        return easeIn(time / 0.5);
    } else {
        return easeIn((1 - time) / 0.5);
    }
}

function sine(time) {
    return Math.sin(time * Math.PI);
}

for (i = 0; i <= 1; i += 0.1) {
    //console.log(round(easeInOut(i)));
    //console.log(easeOut(i));
    //console.log(round(spike(i)));
    console.log(sine(i));
}