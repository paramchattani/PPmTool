import axios from "axios"
import { FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, GET_ERRORS } from "./ProjectType"

export const  fetchProjectRequest=()=>{
    return {
        type:FETCH_PROJECT_REQUEST
    }
}

export const fetchProjectSuccess=(projects)=>{

    return {
        type:FETCH_PROJECT_SUCCESS,
        payload:projects
    }
}

export const fetchProjectFailure=(errors)=>{

    return {
        type:FETCH_PROJECT_FAILURE,
        payload:errors
    }
}
export const createProjectRequest=(result)=>{
    return {
        type:GET_ERRORS,
        payload:result
    }
}

export const fetchProjects=()=>{
    return (dispatch)=>{
        dispatch(fetchProjectRequest)
        axios.get('http://localhost:8080/api/project/projects')
        .then(res=>{
            console.log(res.data)
            dispatch(fetchProjectSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchProjectFailure(err.message))
        })
    }
}

export const createProject=(project,history)=>{
    return (dispatch)=>{
    
        axios.post('http://localhost:8080/api/project',project)
        .then(res=>{
            alert('PROJECT CREATED')
            history.push('/dashboard')
            
        })
        .catch(err=>{
            //console.log(project)
            console.log(err.response.data)
            console.log(project)
            dispatch(createProjectRequest(err.response.data))
        })
    }
}