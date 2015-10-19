/**
 * Created by gprin on 01/10/15.
 */
var Engine = function() {
    var nbBilles = 0;
    var currentPlayer = 1; // 1 = Blanc, 2 = Noir
    var grid = new Array(2);
    for(var i = 0 ; i < 2 ; i++) {
        grid[i] = new Array(2);
        for(var j = 0 ; j < 3 ; j++) {
            grid[i][j] = new Array(3);
            for(var k = 0 ; k < 3 ; k++) {
                grid[i][j][k] = new Array(3);
            }
        }
    }

    this.getNbBilles = function() {
        return nbBilles;
    };

    this.getCurrentPlayer = function() {
        return currentPlayer;
    };

    this.setTokenInGrid = function(square) {
        var pos1 = (square.charCodeAt(0)) - 97;
        var pos2 = (square.charCodeAt(1)) - 49;
        var i1 = Math.floor(pos1/3);
        var j1 = Math.floor(pos2/3);
        var i2 = pos1 % 3;
        var j2 = pos2 % 3;
        grid[i1][j1][i2][j2] = currentPlayer;
        nbBilles++;
    };

    this.getSquare = function(square) {
        var pos1 = (square.charCodeAt(0)) - 97;
        var pos2 = (square.charCodeAt(1)) - 49;
        var i1 = Math.floor(pos1/3);
        var j1 = Math.floor(pos2/3);
        var i2 = pos1 % 3;
        var j2 = pos2 % 3;
        return grid[i1][j1][i2][j2];
    };

    this.rotateBoard = function(numGridToRotate, rotateWay) {
        var i1 = Math.floor(numGridToRotate/2);
        var j1 = numGridToRotate%2;
        var tmp;
        if(rotateWay) {
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
        }
        else {
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
        }

        if(currentPlayer == 1) {
            currentPlayer = 2;
        }
        else {
            currentPlayer = 1;
        }
    }

};

var board = new Engine();