console.log('JS chargé');

let size = 3;

function getData(size, ex) {
    return data[0][size][ex];
}

let labyrinthe = getData(size.toString(), 'ex-0');
console.log(labyrinthe);

function displayLabyrinthe(labyrinthe) {
    $('main').attr('style', ('width:' + (size * 100) + 'px'));
    labyrinthe.forEach(function (obj) {
        if (obj.entrance === true) {
            let entranceDiv = $('<div>');
            entranceDiv.attr('class', 'entrance').text('entrance');
            $('main').append(entranceDiv);
        } else if (obj.exit === true) {
            let exitDiv = $('<div>');
            exitDiv.attr('class', 'exit').text('exit');
            $('main').append(exitDiv);
        } else {
            let div = $('<div>');
            div.text('Case1');
            $('main').append(div);
        }
    });
}

displayLabyrinthe(labyrinthe);

function displayBorder() {

}


// let row = $('<tr>');
// let col = $('<td>');