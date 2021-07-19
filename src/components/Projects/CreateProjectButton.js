import React from 'react'
import {Link} from 'react-router-dom'
function CreateProjectButton() {
    return (
        <>
             <Link to="/addProject" className="btn btn-secondary btn-lg">
                            Create a Project
                            
                            </Link>
        </>
    )
}

export default CreateProjectButton
