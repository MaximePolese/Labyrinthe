class Cell {
    constructor(cellData) {
        this.posX = cellData.posX;
        this.posY = cellData.posY;
        this.walls = cellData.walls;
        this.entrance = cellData.entrance;
        this.exit = cellData.exit;

    }

    getDOM() {
        let cellDOM = $('<div>');
        cellDOM.attr('id', ['cell', this.posX, this.posY].join('-'));
        cellDOM.css('borderWidth', this.computeBorders());
        this.entranceOrExit(cellDOM);
        return cellDOM;
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
}

let size = '6';
let ex = 'ex-2';
let labyData = data[0][size][ex];

class Labyrinthe {
    constructor(labyData) {
        this.cells = this.initCells(labyData);
    }

    display() {
        $('main').attr('style', ('width:' + (size * 100) + 'px'));
        for (let cell of this.cells) {
            $('main').append(cell.getDOM());
        }
    }

    initCells(labyData) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell(cellData);
            cells.push(cell);
        }
        return cells;
    }
}

let labyrinthe = new Labyrinthe(labyData);
labyrinthe.display();
console.log(labyrinthe);