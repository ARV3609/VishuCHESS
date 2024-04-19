import {ROOT_DIV} from "../Helper/constants.js";
import { globalState } from "../script.js";
import { renderHighlight } from "../Render/main.js";
import { clearHighLight } from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";
import { clearPreviousSelfHighlight } from "../Render/main.js";
import { moveElement } from "../Render/main.js";


// highlited or not => state
let hightlight_state = false ;


// current self hilighted square state
let selfHighlightState = null;


// in move state or not
let moveState = null;


// white pawn event 
function whitePawnClick({piece}){

    // clicked on same element twice
    if(piece == selfHighlightState){
        clearPreviousSelfHighlight(selfHighlightState);
        selfHighlightState = null;
        clearHighLight();
        return;
    }

 
    selfHighlight(piece);
    selfHighlightState = piece;

    // add piece in move state
    moveState = piece;


    const current_pos = piece.current_position;
    const flatArray = globalState.flat();
    
    // on initial position
    if(piece.current_position[1] == "2"){
        const highlightSquareIds =[ 
            `${current_pos[0]}${Number(current_pos[1]) +1}`,
            `${current_pos[0]}${Number(current_pos[1]) +2}`,
        ];

        // clear board for any previous highlight
        clearHighLight();
        
        highlightSquareIds.forEach((hightlight) =>{

            globalState.forEach(row => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight(true);
                    }

                });
            });

          
        });
    }
    else{
        const highlightSquareIds =[ 
            `${current_pos[0]}${Number(current_pos[1]) +1}`,
        ];

        // clear board for any previous highlight
        clearHighLight();
        highlightSquareIds.forEach((hightlight) =>{

            globalState.forEach(row => {
                row.forEach((element) => {
                    if(element.id == hightlight){
                        element.highlight(true);
                    }

                });
            });

          
        });
    }

    // console.log(globalState);

}




function GlobalEvent(){
    ROOT_DIV.addEventListener("click", function(event) {
            if(event.target.localName === "img"){
               const clickId = event.target.parentNode.id;
               const flatArray = globalState.flat();
               const square = flatArray.find((el) => el.id == clickId);

               if(square.piece.piece_name == "WHITE_PAWN"){
                    whitePawnClick(square);
               }
            }else{

                const childElementsOfclickedEl = Array.from(event.target.childNodes);
            
                if(childElementsOfclickedEl.length == 1 || event.target.localName == "span"){
                   
                        if(event.target.localName == "span"){
                            const id = event.target.parentNode.id;
                            moveElement(moveState , id);
                            moveState = null;
                            
                        }else{
                            const id = event.target.id;
                            moveElement(moveState , id);
                            moveState = null;
                        }
                        clearHighLight();
                        clearPreviousSelfHighlight(selfHighlightState);
                        selfHighlightState = null;

                }else{
                    clearHighLight();
                    clearPreviousSelfHighlight(selfHighlightState);
                    selfHighlightState = null;
                }
            }

    });
}

export {GlobalEvent};