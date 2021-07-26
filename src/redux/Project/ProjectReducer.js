import { DELETE_PROJECT, FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS } from "./ProjectType"

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
             case DELETE_PROJECT:
                 console.log("reached")
                 return {
                     ...state,
                     loading:false,
                    

                     projects:state.projects.filter(project=>project.projectIdentifier!==action.payload),
                     errors:'',
                 }

                default : return state
}

}
export default ProjectReducer