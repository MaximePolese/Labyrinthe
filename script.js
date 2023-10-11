let size = 6;

function getData(size, ex) {
    return data[0][size][ex];
}

let labyrinthe = getData(size.toString(), 'ex-2');

let playerPos = [];

function displayLabyrinthe(laby) {
    $('main').attr('style', ('width:' + (size * 100) + 'px'));
    laby.forEach(function (obj, index) {
        let div = $('<div>');
        div.attr('id', index);
        obj.id = index;
        if (obj.entrance) {
            div.attr('class', 'entrance');
            playerPos.push(obj);
        } else if (obj.exit) {
            div.attr('class', 'exit');
        }
        displayBorder(obj, div);
        $('main').append(div);
    });
}

function displayBorder(obj, div) {
    if (obj.walls[0]) {
        div.css('border-top', 'solid 1px red');
    }
    if (obj.walls[1]) {
        div.css('border-right', 'solid 1px red');
    }
    if (obj.walls[2]) {
        div.css('border-bottom', 'solid 1px red');
    }
    if (obj.walls[3]) {
        div.css('border-left', 'solid 1px red');
    }
}

displayLabyrinthe(labyrinthe);
console.log(labyrinthe);
console.log(playerPos);

function checkWalls(player, laby) {
    if (playerPos[0].walls[0] === false) {
        playerPos[0].posX = playerPos[0].posX - 1;
    } else if (playerPos[0].walls[1] === false) {
        playerPos[0].posY = playerPos[0].posY + 1;
    } else if (playerPos[0].walls[2] === false) {
        playerPos[0].posX = playerPos[0].posX + 1;
    } else if (playerPos[0].walls[3] === false) {
        playerPos[0].posY = playerPos[0].posY - 1;
    }
    console.log('le joueur est sur la case ' + playerPos[0].posX + ', ' + playerPos[0].posY);
    laby.forEach(function (obj) {
        if ((obj.posX === playerPos[0].posX) && (obj.posY === playerPos[0].posY)) {
            playerPos = [];
            playerPos.push(obj);
        }
    });
}

// while (playerPos[0].id !== 8 ){
checkWalls(playerPos, labyrinthe);
console.log(playerPos);
// }