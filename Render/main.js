import * as piece from "../data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../script.js";



// move element to square with id
function moveElement(piece , id ){
    
    const flatData = globalState.flat();
    
    flatData.forEach((el) => {
        if(el.id == piece.current_position){
            delete el.piece;
            
        }

        if(el.id == id){
            el.piece = piece;
        }
    });


    clearHighLight();

    const previousPiece = document.getElementById(
        piece.current_position);
    previousPiece.classList.remove("highlightYellow");
    const currentPiece = document.getElementById(id);

    currentPiece.innerHTML = previousPiece.innerHTML;
    previousPiece.innerHTML = "";
    
    piece.current_position = id;
}



function clearPreviousSelfHighlight(piece){
    if(piece){

        document.
        getElementById(piece.current_position).classList.remove("highlightYellow");
    }
}

function selfHighlight(piece){
    document.getElementById(piece.current_position).classList.add("highlightYellow");
}


// used when you want to render pieses on board
function pieceRender(data){
        data.forEach(row => {
            row.forEach((square) => {
                // if square has a piece
                if(square.piece){
                    const squareEl = document.getElementById(square.id);

                    // create piece
                    const piece = document.createElement("img");
                    piece.src = square.piece.img;
                    piece.classList.add("piece");
                  
                    // inserting piece into square element
                    squareEl.appendChild(piece);
                }
            });
        });
}



// this function is only called when game starts (only for one time)
function initGameRender(data){
    data.forEach(element => {
    const rowEl = document.createElement("div");
       element.forEach(square => {
            const sqareDiv = document.createElement("div");
            sqareDiv.id = square.id;
            sqareDiv.classList.add(square.color , "square");
            
            // render black pawn
            if(square.id[1]== 7 ){
                square.piece = piece.blackPawn(square.id);
                
            }
            // render black rook
            if(square.id == "h8" || square.id == "a8"  ){
                square.piece = piece.blackRook(square.id);
                
            }
            // render black knight
            if(square.id == "g8" || square.id == "b8"  ){
                square.piece = piece.blackKnight(square.id);
                
            }
             // render black bishop
             if(square.id == "f8" || square.id == "c8"  ){
                square.piece = piece.blackBishop(square.id);
                
            }
             // render black queen
             if(square.id == "d8"  ){
                square.piece = piece.blackQueen(square.id);
                
            }
             // render black king
             if(square.id == "e8"  ){
                square.piece = piece.blackKing(square.id);
                
            }


            // render white pawn
            if(square.id[1]== 2){
                square.piece = piece.whitePawn(square.id);
            }
            rowEl.appendChild(sqareDiv);

            // render white rook
            if(square.id == "h1" || square.id == "a1"  ){
                square.piece = piece.whiteRook(square.id);
                
            }
            // render white knight
            if(square.id == "g1" || square.id == "b1"  ){
                square.piece = piece.whiteKnight(square.id);
                
            }
             // render white bishop
             if(square.id == "f1" || square.id == "c1"  ){
                square.piece = piece.whiteBishop(square.id);
                
            }
             // render black queen
             if(square.id == "d1"  ){
                square.piece = piece.whiteQueen(square.id);
                
            }
             // render black king
             if(square.id == "e1"  ){
                square.piece = piece.whiteKing(square.id);
                
            }

       }); 
       rowEl.classList.add("sqareRow");
       ROOT_DIV.appendChild(rowEl);
    });

   
    pieceRender(data);
}


// render highlight circle
function renderHighlight(squareId){
    const highlightSpan = document.createElement("span");
    highlightSpan.classList.add("highlight");
    document.getElementById(squareId).appendChild(highlightSpan);

}


// clear all highlights
function clearHighLight(){
    const flatData = globalState.flat();
    flatData.forEach((el) => {
        if(el.highlighted){
            document.getElementById(el.id).innerHTML = " ";
            el.highlighted = false;
        }
    });
    

}



export { 
    initGameRender ,
    renderHighlight ,
    clearHighLight,
    selfHighlight,
    clearPreviousSelfHighlight,
    moveElement,
};   