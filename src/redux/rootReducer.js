import { combineReducers } from "redux";
import ProjectCreateReducer from "./Project/ProjectCreateReducer";
import ProjectFetchProjectReducer from "./Project/ProjectFetchProjectReducer";
import ProjectReducer from "./Project/ProjectReducer";

const rootReducer=combineReducers({
    
    fetchprojects:ProjectReducer,
    createprojects:ProjectCreateReducer,
    fetchprojectforupdate:ProjectFetchProjectReducer
})
export default  rootReducer;

//remember to use  projects  now;