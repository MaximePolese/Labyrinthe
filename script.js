console.log('JS chargé');

function getData(size, ex) {
    return data[0][size][ex];
}

let labyrinthe = getData('3', 'ex-0');
console.log(labyrinthe);

function displayLabyrinthe(labyrinthe) {
    labyrinthe.forEach(function () {
        let div = $('<div>');
        div.text('Case1');
        $('body').append(div);
    });
}

displayLabyrinthe(data);