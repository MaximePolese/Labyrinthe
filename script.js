console.log('JS chargé');

let size = 6;

function getData(size, ex) {
    return data[0][size][ex];
}

let labyrinthe = getData(size.toString(), 'ex-2');
console.log(labyrinthe);

// let entrancePosX = 0;
// let entrancePosY = 0;
let playerPos = 0;

function displayLabyrinthe(labyrinthe) {
    $('main').attr('style', ('width:' + (size * 100) + 'px'));
    labyrinthe.forEach(function (obj, index) {
        let div = $('<div>');
        div.attr('id', index);
        if (obj.entrance) {
            div.attr('class', 'entrance');
            playerPos = index;
            // entrancePosX = obj.posX;
            // entrancePosY = obj.posY;
        } else if (obj.exit) {
            div.attr('class', 'exit');
        }
        displayBorder(obj, div);
        $('main').append(div);
    });
}

function displayBorder(obj, div) {
    if (obj.walls[0] === true) {
        div.css('border-top', 'solid 1px red');
    }
    if (obj.walls[1] === true) {
        div.css('border-right', 'solid 1px red');
    }
    if (obj.walls[2] === true) {
        div.css('border-bottom', 'solid 1px red');
    }
    if (obj.walls[3] === true) {
        div.css('border-left', 'solid 1px red');
    }
}

displayLabyrinthe(labyrinthe);
// console.log(entrancePosX, entrancePosY);
console.log(playerPos);

// let posXPlayer = entrancePosX;
// let posYPlayer = entrancePosY;

function checkWalls(id) {
    if (id.walls[0] === false) {
        posXPlayer = posXPlayer - 1;
    } else if (id.walls[1] === false) {
        posYPlayer = posYPlayer + 1;
    } else if (id.walls[2] === false) {
        posXPlayer = posXPlayer + 1;
    } else if (id.walls[3] === false) {
        posYPlayer = posYPlayer - 1;
    }
    console.log('le joueur est sur la case ' + posXPlayer + ', ' + posYPlayer);
}

checkWalls(playerPos);


// function look_for_key(main_box) {
//     let pile = main_box.make_a_pile_to_look_through();
//     while (pile is not empty) {
//         box = pile.grab_a_box();
//         for (item in box) {
//             if (item.is_a_box()) {
//                 pile.append(item)
//             } else if (item.is_a_key()) {
//                 console.log("found the key!")
//             }
//         }
//     }}
// //
// function checkWalls(box) {
//     for (wall in box) {
//         if (wall === true) {
//             look_for_key(item);
//         } else if (wall === false) {
//             console.log("found the key!")
//         }
//     }
// }

//
// function displayLabyrinthe(labyrinthe) {
//     $('main').attr('style', ('width:' + (size * 100) + 'px'));
//     labyrinthe.forEach(function (obj) {
//         if (obj.entrance === true) {
//             let entranceDiv = $('<div>');
//             entranceDiv.attr('class', 'entrance');
//             displayBorder(obj, entranceDiv);
//             $('main').append(entranceDiv);
//             entrancePosX = obj.posX;
//             entrancePosY = obj.posY;
//         } else if (obj.exit === true) {
//             let exitDiv = $('<div>');
//             exitDiv.attr('class', 'exit');
//             displayBorder(obj, exitDiv);
//             $('main').append(exitDiv);
//         } else {
//             let div = $('<div>');
//             displayBorder(obj, div);
//             $('main').append(div);
//         }
//     });
// }