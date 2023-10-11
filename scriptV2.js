class Cell {
    constructor(cellData) {
        this.posX = cellData.posX;
        this.posY = cellData.posY;
        this.walls = cellData.walls;
        this.entrance = cellData.entrance;
        this.exit = cellData.exit;

    }

    computeBorders() {
        return this.walls.map(wall => wall ? '1px' : '0px').join(' ');
    }

    entranceOrExit(cell) {
        if (this.entrance) {
            cell.css('background-color', 'orange');
        } else if (this.exit) {
            cell.css('background-color', '#7fff00');
        }
    }

    getDOM() {
        let cellDOM = $('<div>');
        cellDOM.attr('id', [this.posX, this.posY].join('-'));
        cellDOM.css('borderWidth', this.computeBorders());
        this.entranceOrExit(cellDOM);
        return cellDOM;
    }
}

let size = '10';
let ex = 'ex-2';
let labyData = data[0][size][ex];

class Labyrinthe {
    constructor(labyData) {
        this.cells = this.initCells(labyData);
        this.playerPosX = 0;
        this.playerPosY = 0;
    }

// Construction du labyrinthe
    initCells(labyData) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell(cellData);
            cells.push(cell);
        }
        return cells;
    }

    display() {
        $('main').attr('style', ('width:' + (size * 100) + 'px'));
        for (let cell of this.cells) {
            $('main').append(cell.getDOM());
        }
    }

// Construction du player
    initPlayer() {
        let entrance = this.cells.find((el) => el.entrance)
        this.playerPosX = entrance.posX
        this.playerPosY = entrance.posY
    }

    displayPlayer() {
        let player = $('<img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-37-512.png">');
        $('#' + this.playerPosX + "-" + this.playerPosY).append(player);
    }

    erasePlayer() {
        $('img').attr('src', '');
    }

//Résolution du labyrinthe

}

let labyrinthe = new Labyrinthe(labyData);

labyrinthe.display();
console.log(labyrinthe);
labyrinthe.initPlayer();
labyrinthe.displayPlayer();

