import axios from "axios"
import { DELETE_PROJECT, FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, GET_ERRORS } from "./ProjectType"
import {Redirect} from 'react-router';
import { withRouter } from 'react-router-dom';

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
export const fetchProjectForUpdateFailure=(error)=>{
    return {
        type:FETCH_PROJECT_FAILURE,
        payload:error
    }
}
export const fetchProjectForUpdateSuccess=(project)=>{
    return {
        type:FETCH_PROJECT_SUCCESS,
        payload:project
    }
}

export const deleteProject=(id)=>{
    console.log("inside")
    return {
type:DELETE_PROJECT,
payload:id
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

export const fetchProjectById=(id,history)=>{
return (dispatch)=>{
    axios.get(`http://localhost:8080/api/project/${id}`)
    .then(res=>{
        dispatch(fetchProjectForUpdateSuccess(res.data))
    })
    .catch(err=>{
        //dispatch(fetchProjectForUpdateFailure(err.message))
        alert('error ocuured  poosibly due to wrong projectIdentifier')
        history.push('/dashboard')   
    })

}
}

export const createProject=(project,history)=>{
    return (dispatch)=>{
    
        axios.post('http://localhost:8080/api/project',project)
        .then(res=>{
            alert('PROJECT CREATED')
            console.log('ewfwefef')
        history.push("/dashboard")
          //  window.location.reload();
          
            
        })
        .catch(err=>{
            console.log(project)
           console.log(err.response.data)
            console.log(project)
          dispatch(createProjectRequest(err.response.data))
        })
    }
}


export const updateProject=(project,history)=>{
    return (dispatch)=>{
    
        axios.post('http://localhost:8080/api/project',project)
        .then(res=>{
            alert('PROJECT CREATED')
            console.log('ewfwefef')
          //  window.location.reload();
          
            
        })
        .catch(err=>{
            console.log(project)
           console.log(err.response.data)
            console.log(project)
         dispatch(createProjectRequest(err.response.data))
        })
    }
}

export const deleteProjectById=(id)=>{
console.log(id)
    return (dispatch)=>{
        axios.delete(`http://localhost:8080/api/project/${id}`)
        .then(res=>{
            console.log("deleted")
            dispatch(deleteProject(id))
            
           // history.push('/dashboard')

        }

        )
        .catch(err=>{
            //alert('Error occured ')
            //history.push('dashboard')
        })


    }
}