// black pieces
function blackPawn(current_position){
    return {
        current_position , 
        img: "assets/black/pawn.png",
        piece_name: "BLACK_PAWN"
    };
}
function blackRook(current_position){
    return {
        current_position , 
        img: "assets/black/rook.png",
        piece_name: "BLACK_ROOK"
    };
}
function blackKnight(current_position){
    return {
        current_position , 
        img: "assets/black/knight.png",
        piece_name: "BLACK_KNIGHT"
    };
}
function blackBishop(current_position){
    return {
        current_position , 
        img: "assets/black/bishop.png",
        piece_name: "BLACK_BISHOP"
    };
}
function blackQueen(current_position){
    return {
        current_position , 
        img: "assets/black/queen.png",
        piece_name: "BLACK_QUEEN"
    };
}
function blackKing(current_position){
    return {
        current_position , 
        img: "assets/black/king.png",
        piece_name: "BLACK_KING"
    };
}



// white pieces
function whitePawn(current_position){
    return {
        current_position , 
        img: "assets/white/pawn.png",
        piece_name: "WHITE_PAWN"
    };
}
function whiteRook(current_position){
    return {
        current_position , 
        img: "assets/white/rook.png",
        piece_name: "WHITE_ROOK"
    };
}
function whiteKnight(current_position){
    return {
        current_position , 
        img: "assets/white/knight.png",
        piece_name: "WHITE_KNIGHT"
    };
}
function whiteBishop(current_position){
    return {
        current_position , 
        img: "assets/white/bishop.png",
        piece_name: "WHITE_BISHOP"
    };
}
function whiteQueen(current_position){
    return {
        current_position , 
        img: "assets/white/queen.png",
        piece_name: "WHITE_QUEEN"
    };
}
function whiteKing(current_position){
    return {
        current_position , 
        img: "assets/white/king.png",
        piece_name: "WHITE_KING"
    };
}

export {blackPawn , whitePawn , whiteRook , whiteBishop , whiteKing , whiteKnight , whiteQueen 
        ,blackBishop ,blackRook, blackKing , blackKnight , blackQueen };