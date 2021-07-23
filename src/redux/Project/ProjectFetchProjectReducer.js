import { FETCH_PROJECT_FAILURE, FETCH_PROJECT_SUCCESS } from "./ProjectType";

const initialState={
    project:{},
    error:''
}

const ProjectFetchProjectReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                project:action.payload,
                error:''
            }
            case FETCH_PROJECT_FAILURE:
                return {
                    ...state ,
                    project:{},
                    error:action.payload
                }
                default : return state
    }
}
export default ProjectFetchProjectReducer; 