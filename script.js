console.log('JS chargé');

let size = 5;

function getData(size, ex) {
    return data[0][size][ex];
}

let labyrinthe = getData(size.toString(), 'ex-1');
console.log(labyrinthe);

function displayLabyrinthe(labyrinthe) {
    $('main').attr('style', ('width:' + (size * 100) + 'px'));
    labyrinthe.forEach(function (obj) {
        if (obj.entrance === true) {
            let entranceDiv = $('<div>');
            entranceDiv.attr('class', 'entrance');
            displayBorder(obj, entranceDiv);
            $('main').append(entranceDiv);
        } else if (obj.exit === true) {
            let exitDiv = $('<div>');
            exitDiv.attr('class', 'exit');
            displayBorder(obj, exitDiv);
            $('main').append(exitDiv);
        } else {
            let div = $('<div>');
            displayBorder(obj, div);
            $('main').append(div);
        }
    });
}

function displayBorder(obj, div) {
    if (obj.walls[0] === true) {
        div.css({
            'border-top': 'solid 1px',
            'border-top-color': 'red'
        });
    }
    if (obj.walls[1] === true) {
        div.css({
            'border-right': 'solid 1px',
            'border-right-color': 'red'
        });
    }
    if (obj.walls[2] === true) {
        div.css({
            'border-bottom': 'solid 1px',
            'border-bottom-color': 'red'
        });
    }
    if (obj.walls[3] === true) {
        div.css({
            'border-left': 'solid 1px',
            'border-left-color': 'red'
        });
    }
}

displayLabyrinthe(labyrinthe);

