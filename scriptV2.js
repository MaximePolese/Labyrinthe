class Cell {
    constructor(cellData) {
        this.posX = cellData.posX;
        this.posY = cellData.posY;
        this.walls = cellData.walls;
        this.entrance = cellData.entrance;
        this.exit = cellData.exit;
        this.visited = false;
    }

    computeBorders() {
        return this.walls.map(wall => wall ? '1px' : '0px').join(' ');
    }

    entranceOrExit(cell) {
        if (this.entrance) {
            cell.css('background-color', 'yellow');
            this.visited = true;
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

let size = '11';
let ex = 'ex-2';
let labyData = data[size][ex];

class Labyrinthe {
    constructor(labyData) {
        this.cells = this.initCells(labyData);
        this.playerPosX = 0;
        this.playerPosY = 0;
        this.stack = [];
        this.nbPas = 0;
        this.path = [];
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
        let entrance = this.cells.find((el) => el.entrance);
        this.playerPosX = entrance.posX;
        this.playerPosY = entrance.posY;
    }

    displayPlayer() {
        let player = $('<img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-37-512.png">');
        $('#' + this.playerPosX + "-" + this.playerPosY).append(player);
    }

    erasePlayer() {
        $('#' + this.playerPosX + "-" + this.playerPosY).html(this.nbPas++);
    }

//Résolution du labyrinthe
    isVisited() {
        return this.currentCell(this.playerPosX, this.playerPosY).visited = true;
    }

    currentCell(x, y) {
        return this.cells.find((el) => (el.posX === x && el.posY === y));
    }

    topCell(x, y) {
        return this.cells.find((el) => (el.posX === (x - 1) && el.posY === y));
    }

    rightCell(x, y) {
        return this.cells.find((el) => (el.posX === x && el.posY === (y + 1)));
    }

    bottomCell(x, y) {
        return this.cells.find((el) => (el.posX === (x + 1) && el.posY === y));
    }

    leftCell(x, y) {
        return this.cells.find((el) => (el.posX === x && el.posY === (y - 1)));
    }

    exitCell(x, y) {
        return this.cells.find((el) => (el.posX === x && el.posY === y && el.exit));
    }

    findNextPosBFS() {
        if (this.currentCell(this.playerPosX, this.playerPosY).walls[0] === false && this.topCell(this.playerPosX, this.playerPosY).visited === false) {
            this.topCell(this.playerPosX, this.playerPosY).parent = this.currentCell(this.playerPosX, this.playerPosY);
            this.stack.unshift(this.topCell(this.playerPosX, this.playerPosY));
        }
        if (this.currentCell(this.playerPosX, this.playerPosY).walls[1] === false && this.rightCell(this.playerPosX, this.playerPosY).visited === false) {
            this.rightCell(this.playerPosX, this.playerPosY).parent = this.currentCell(this.playerPosX, this.playerPosY);
            this.stack.unshift(this.rightCell(this.playerPosX, this.playerPosY));
        }
        if (this.currentCell(this.playerPosX, this.playerPosY).walls[2] === false && this.bottomCell(this.playerPosX, this.playerPosY).visited === false) {
            this.bottomCell(this.playerPosX, this.playerPosY).parent = this.currentCell(this.playerPosX, this.playerPosY);
            this.stack.unshift(this.bottomCell(this.playerPosX, this.playerPosY));
        }
        if (this.currentCell(this.playerPosX, this.playerPosY).walls[3] === false && this.leftCell(this.playerPosX, this.playerPosY).visited === false) {
            this.leftCell(this.playerPosX, this.playerPosY).parent = this.currentCell(this.playerPosX, this.playerPosY);
            this.stack.unshift(this.leftCell(this.playerPosX, this.playerPosY));
        }
    }

    getPath(s) {
        while (s.parent !== undefined) {
            this.path.unshift(s);
            s = s.parent;
        }
    }

    playerPath() {
        this.isVisited();
        // for (let n of this.stack) {
        //     console.log(n);
        // }
        let temp = this.stack.pop();
        this.playerPosX = temp.posX;
        this.playerPosY = temp.posY;
    }

    movePlayer(tile) {
        this.playerPosX = tile.posX;
        this.playerPosY = tile.posY;
    }
}

let labyrinthe = new Labyrinthe(labyData);
labyrinthe.display();
console.log(labyrinthe);
labyrinthe.initPlayer();
labyrinthe.displayPlayer();

$('body').on('click', function () {
    labyrinthe.stack = [];
    labyrinthe.path = [];
    labyrinthe.pas = 0;
    while (!labyrinthe.exitCell(labyrinthe.playerPosX, labyrinthe.playerPosY)) {
        labyrinthe.findNextPosBFS();
        labyrinthe.playerPath();
        // console.log(labyrinthe.playerPosX, labyrinthe.playerPosY);
    }
    // console.log(labyrinthe.cells);
    labyrinthe.getPath(labyrinthe.cells.find(el => el.exit));
    labyrinthe.initPlayer();
    console.log(labyrinthe.path);
    for (let cell of labyrinthe.path) {
        labyrinthe.erasePlayer();
        labyrinthe.movePlayer(cell);
        labyrinthe.displayPlayer();
    }
});