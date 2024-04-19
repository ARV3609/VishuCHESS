import { initGame } from "./data/data.js";
import { initGameRender } from "./Render/main.js";
import { GlobalEvent } from "./Events/global.js";

// will be useful till game ends
const globalState = initGame();

initGameRender(globalState); 
GlobalEvent();

export {globalState};
