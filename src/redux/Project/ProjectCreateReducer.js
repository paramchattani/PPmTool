import { GET_ERRORS } from "./ProjectType";

const initilaState={
    error:[],
}
const ProjectCreateReducer=(state=initilaState,action)=>{

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