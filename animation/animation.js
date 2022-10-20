const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const FPS = 1000;

let x = 50;
let y = 50;
let dur = 0;

function easeInQuad(progress) {
    return progress * progress;
}

function sineWave(progress) {
    return Math.sin(progress);
}

function easeOutBounce(progress) {
    const n1 = 7.5625;
    const d1 = 2.75;
    
    if (progress < 1 / d1) {
        return n1 * progress * progress;
    } else if (progress < 2 / d1) {
        return n1 * (progress -= 1.5 / d1) * progress + 0.75;
    } else if (progress < 2.5 / d1) {
        return n1 * (progress -= 2.25 / d1) * progress + 0.9375;
    } else {
        return n1 * (progress -= 2.625 / d1) * progress + 0.984375;
    }
}

function easeInOutBounce(progress) {
    return progress < 0.5
        ? (1 - easeOutBounce(1 -2 * progress)) / 2
        : (1 + easeOutBounce(2 * progress - 1)) / 2;
}

function move() {
    x += 1;
    dur += 0.01;
    //y = ((easeInQuad(dur) * 10) * -1) + 800;
    //y = ((sineWave(dur) * 100) + 800);
    y = ((easeInOutBounce(dur)) * -1 + 800);
    console.log("step: " + dur);

    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.stroke();
}


let moveTimer = setInterval(move, (1/FPS) * 1000);