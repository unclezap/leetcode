// https://leetcode.com/problems/word-search/

var exist = function(board, word) {
    let wordPos = 0
    
    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[i].length;j++) {
            if (board[i][j] === word[wordPos]) {
                if (snake(i,j,board,word,wordPos)) {
                    // console.log('hi2')
                    return true
                }
            }
        }
    }
    
    return false
};

var snake = function(yPosition, xPosition, board, word, wordPos) {   
    // console.log('hi', yPosition, xPosition, word[wordPos])
    wordPos++
    // console.log(wordPos, word.length)
    if (wordPos === word.length) {
        // console.log('hi3')
        return true
    }
    
    let validMove = false
    
    if (yPosition > 0) {
        if (board[yPosition - 1][xPosition] === word[wordPos]) {
            validMove = snake(yPosition-1, xPosition, board, word, wordPos)
            if (validMove) {
                return true
            }
        }
    }
    
    if (yPosition < board.length - 1) {
        if (board[yPosition + 1][xPosition] === word[wordPos]) {
            validMove = snake(yPosition+1, xPosition, board, word, wordPos)
            if (validMove) {
                return true
            }
        }
    }
    
    if (xPosition > 0) {
        if (board[yPosition][xPosition - 1] === word[wordPos]) {
            validMove = snake(yPosition, xPosition-1, board, word, wordPos)
            if (validMove) {
                return true
            }
        }
    }
    
    if (xPosition < board[yPosition].length - 1) {
        if (board[yPosition][xPosition + 1] === word[wordPos]) {
            validMove = snake(yPosition, xPosition+1, board, word, wordPos)
            if (validMove) {
                return true
            }
        }
    }
    
    return validMove
}