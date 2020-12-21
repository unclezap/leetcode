// https://leetcode.com/problems/word-search/

var exist = function(board, word) {
    let wordPos = 0
    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (board[i][j] === word[wordPos]) {
                if (snake(i,j,board,word,wordPos)) {
                    return true
                }
            }
        }
    }
    
    return false
};

var snake = function(yPosition, xPosition, board, word, wordPos) {
    
    
}