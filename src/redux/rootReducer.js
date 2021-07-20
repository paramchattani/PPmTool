import { combineReducers } from "redux";
import ProjectCreateReducer from "./Project/ProjectCreateReducer";
import ProjectReducer from "./Project/ProjectReducer";

const rootReducer=combineReducers({
    
    fetchprojects:ProjectReducer,
    createprojects:ProjectCreateReducer
})
export default  rootReducer;

//remember to use  projects  now;