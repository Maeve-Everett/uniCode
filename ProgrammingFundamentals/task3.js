object1 = {x: 5, y:5, w: 5, h:5};
object2 = {x: 0, y:0, w: 50, h:50};

function checkCollision(object1, object2) {
    if (
        object1.x < object2.x + object2.w &&
        object1.x + object1.w > object2.x &&
        object1.y < object2.y + object2.h &&
        object1.h + object1.y > object2.y
    ) {
        return true;
    } else {
        return false;
    }
}

checkCollision(object1, object2);