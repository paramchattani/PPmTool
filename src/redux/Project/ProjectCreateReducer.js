import { GET_ERRORS } from "./ProjectType";

const initialState={
    error:{},
}

const ProjectCreateReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case GET_ERRORS:
            return {
                ...state,
                error:action.payload
            }
            default:return state
    }

}
export default ProjectCreateReducer;