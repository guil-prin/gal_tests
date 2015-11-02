/**
 * Created by gprin on 01/10/15.
 */

var Story = TestCase("Story");

Story.prototype.testStoryOne = function () {
    var nbMarbles = board.getNbMarbles();
    assertEquals(0, nbMarbles);
};

Story.prototype.testStoryTwo = function () {
    var currentPlayer = board.getCurrentPlayer();
    assertEquals(1, currentPlayer);
};

Story.prototype.testStoryThree = function () {
    var selectedSquare = "a1";
    board.setTokenInGrid(selectedSquare);
    var playedSquare = board.getSquare(selectedSquare);
    assertEquals(1, playedSquare);
};

Story.prototype.testStoryFour = function () {
    var nbMarbles = board.getNbMarbles();
    assertEquals(1, nbMarbles);
};

Story.prototype.testStoryFive = function () {
    var numGridToRotate = 0;
    var rotateWay = 1;
    board.rotateBoard(numGridToRotate, rotateWay);
    var playedSquare = board.getSquare("a1");
    assertEquals(undefined, playedSquare);
    playedSquare = board.getSquare("c1");
    assertEquals(1, playedSquare);
};

Story.prototype.testStorySix = function () {
    var currentPlayer = board.getCurrentPlayer();
    assertEquals(2, currentPlayer);
};

Story.prototype.testStorySeven = function () {
    var selectedSquare = "a1";
    board.setTokenInGrid(selectedSquare);
    var playedSquare = board.getSquare(selectedSquare);
    assertEquals(2, playedSquare);
};

Story.prototype.testStoryEight = function () {
    var numGridToRotate = 0;
    var rotateWay = 0;
    board.rotateBoard(numGridToRotate, rotateWay);
    var playedSquare = board.getSquare("a1");
    assertEquals(1, playedSquare);
    playedSquare = board.getSquare("a3");
    assertEquals(2, playedSquare);
};

Story.prototype.testStoryNine = function () {
    var selectedSquare = "a1";
    assertException(function(){board.setTokenInGrid(selectedSquare)}, "Already played square");
};