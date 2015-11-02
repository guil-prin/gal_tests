/**
 * Created by gprin on 01/10/15.
 */
var AlreadyPlayedSquareException = function () {
    "use strict";
    this.name = "Already played square";
};

var Engine;
Engine = function () {
    "use strict";
    var nbMarbles = 0, currentPlayer = 1, grid = new Array(2), i, j, k, l;
    for (i = 0; i < 2; i++) {
        grid[i] = new Array(2);
        for (j = 0; j < 3; j++) {
            grid[i][j] = new Array(3);
            for (k = 0; k < 3; k++) {
                grid[i][j][k] = new Array(3);
            }
        }
    }

    this.getNbMarbles = function () {
        return nbMarbles;
    };

    this.getCurrentPlayer = function () {
        return currentPlayer;
    };

    this.setTokenInGrid = function (square) {
        var pos = this.getGridPositions(square);
        if (this.getSquare(square) === undefined) {
            grid[pos.i1][pos.j1][pos.i2][pos.j2] = currentPlayer;
            nbMarbles++;
        } else {
            throw new AlreadyPlayedSquareException();
        }
    };

    this.getSquare = function (square) {
        var pos = this.getGridPositions(square);
        return grid[pos.i1][pos.j1][pos.i2][pos.j2];
    };

    this.getGridPositions = function (square) {
        var pos1 = (square.charCodeAt(0)) - 97, pos2 = (square.charCodeAt(1)) - 49;
        return {i1 : Math.floor(pos1 / 3),
            j1 : Math.floor(pos2 / 3),
            i2 : pos1 % 3,
            j2 : pos2 % 3};
    };

    this.rotateBoard = function (numGridToRotate, rotateWay) {

        if (rotateWay) {
            this.rotateClockWise(numGridToRotate);
        } else {
            this.rotateCounterClockWise(numGridToRotate);
        }

        if (currentPlayer === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
    };

    this.rotateClockWise = function (numGridToRotate) {
        var i1 = numGridToRotate % 2, j1 = Math.floor(numGridToRotate / 2), tmp = 0;
        tmp = grid[i1][j1][0][0];
        grid[i1][j1][0][0] = grid[i1][j1][0][2];
        grid[i1][j1][0][2] = grid[i1][j1][2][2];
        grid[i1][j1][2][2] = grid[i1][j1][2][0];
        grid[i1][j1][2][0] = tmp;
        tmp = grid[i1][j1][1][0];
        grid[i1][j1][1][0] = grid[i1][j1][0][1];
        grid[i1][j1][0][1] = grid[i1][j1][1][2];
        grid[i1][j1][1][2] = grid[i1][j1][2][1];
        grid[i1][j1][2][1] = tmp;
    };

    this.rotateCounterClockWise = function (numGridToRotate) {
        var i1 = numGridToRotate % 2, j1 = Math.floor(numGridToRotate / 2), tmp = 0;
        tmp = grid[i1][j1][0][0];
        grid[i1][j1][0][0] = grid[i1][j1][2][0];
        grid[i1][j1][2][0] = grid[i1][j1][2][2];
        grid[i1][j1][2][2] = grid[i1][j1][0][2];
        grid[i1][j1][0][2] = tmp;
        tmp = grid[i1][j1][1][0];
        grid[i1][j1][1][0] = grid[i1][j1][2][1];
        grid[i1][j1][2][1] = grid[i1][j1][1][2];
        grid[i1][j1][1][2] = grid[i1][j1][0][1];
        grid[i1][j1][0][1] = tmp;
    };

    this.playOneTurn = function (square, numGridToRotate, rotateWay) {
        this.setTokenInGrid(square);
        this.rotateBoard(numGridToRotate, rotateWay);
    };

    this.getWinner = function (lastPlayed) {
        var winner = 0;
        winner = this.getHorizontalWinner(lastPlayed);
        /*if(winner === 0) {
            winner = this.getVerticalWinner(lastPlayed);
        }
        if(winner === 0) {
            winner = this.getDiagonalWinner(lastPlayed);
        }*/
        return winner;
    };

    this.getHorizontalWinner = function (lastPlayed) {
        var pos = this.getGridPositions(lastPlayed), curPlayer = this.getSquare(lastPlayed),
            partiallyGood = (curPlayer == grid[0][pos.j1][1][pos.j2]
                                       == grid[0][pos.j1][2][pos.j2]
                                       == grid[1][pos.j1][0][pos.j2]
                                       == grid[1][pos.j1][1][pos.j2]);
        if (partiallyGood) {
            if (grid[0][pos.j1][0][pos.j2] === curPlayer || grid[0][pos.j1][1][pos.j2] === curPlayer) {
                return curPlayer;
            } else {
                return 0;
            }
        }
        else {
            return 0;
        }
    };

    this.resetBoard = function () {
        for (i = 0; i < 2; i++) {
            for (j = 0; j < 2; j++) {
                for (k = 0; k < 3; k++) {
                    for (l = 0; l < 3; l++) {
                        grid[i][j][k][l] = undefined;
                    }
                }
            }
        }
        nbMarbles = 0;
        currentPlayer = 1;
    };

};

var board = new Engine();