/**
 * Created by gprin on 01/10/15.
 */

Story = TestCase("Story");

Story.prototype.testStoryOne = function() {
    var nbBilles = board.getNbBilles();
    assertEquals(0, nbBilles);
};

Story.prototype.testStoryTwo = function() {
    var currentPlayer = board.getCurrentPlayer();
    assertEquals(1, currentPlayer);
}

Story.prototype.testStoryThree = function() {
    var selectedSquare = "a1";
    board.setTokenInGrid(selectedSquare);
    var caseJouee = board.getSquare(selectedSquare);
    assertEquals(1, caseJouee);
}

Story.prototype.testStoryFour = function() {
    var nbBilles = board.getNbBilles();
    assertEquals(1, nbBilles);
}

Story.prototype.testStoryFive = function() {
    var numGridToRotate = 0;
    var rotateWay = 1;
    board.rotateBoard(numGridToRotate, rotateWay);
    var caseJouee = board.getSquare("a1");
    assertEquals(undefined, caseJouee);
    caseJouee = board.getSquare("c1");
    assertEquals(1, caseJouee);
}

Story.prototype.testStorySix = function() {
    var currentPlayer = board.getCurrentPlayer();
    assertEquals(2, currentPlayer);
}

Story.prototype.testStorySeven = function() {
    var selectedSquare = "a1";
    board.setTokenInGrid(selectedSquare);
    var caseJouee = board.getSquare(selectedSquare);
    assertEquals(2, caseJouee);
}

Story.prototype.testStoryEight = function() {
    var numGridToRotate = 0;
    var rotateWay = 0; // 1 = horaire - 0 = antihoraire
    board.rotateBoard(numGridToRotate, rotateWay);
    var caseJouee = board.getSquare("a1");
    assertEquals(1, caseJouee);
    caseJouee = board.getSquare("a3");
    assertEquals(2, caseJouee);
}

Story.prototype.testStoryNine = function() {
    var selectedSquare = "a1";
    assertException(function(){board.setTokenInGrid(selectedSquare)}, "Already played square");
}