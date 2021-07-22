import { FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS } from "./ProjectType"

const initialState={
    loading:true,
    projects:[],
    errors:''
}
const ProjectReducer=(state=initialState,action)=>{
switch(action.type)
{
    case FETCH_PROJECT_REQUEST:
        return {
            ...state,
            loading:true,
            projects:[],
            errors:''
        }
        case  FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:action.payload,
                errors:''
            }
            case  FETCH_PROJECT_FAILURE:
                return {
                    ...state,
                    loading:false,
                    projects:[],
                    errors:action.payload
                }
                default : return state
}

}
export default ProjectReducer