import React, { Component } from 'react'
import ProjectItem from './Projects/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Projects/CreateProjectButton';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/Project/ProjectAction';

class Dashboard extends Component {


    
    componentDidMount(){
        console.log("eve")
        
        this.props.fetchProject()
    }
    


 
    

    render() {
    
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center"><b>Projects</b></h1>
                        <br />
                       {//create projectitebutton button heree
                       }
                       <CreateProjectButton/>
                        <br />
                        <hr />
                    {this.props.projects.loading?(<h2>LOADING...</h2>):
                    
                    this.props.projects.errors?(<h2>{this.props.projects.errors+"SITE CRASHED ,POSSIBLY DUE TO WRONG API "}</h2>):
                    this.props.projects && this.props.projects.projects && this.props.projects.projects.map(project=><ProjectItem key={project.projectIdentifier} id={project.projectIdentifier} name={project.projectName} description={project.description}/>)
                    }
                    
    
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}

const mapStateToProps=(state)=>{

    return {
    projects:state.fetchprojects
    }
}

const mapDispatchToState=(dispatch)=>{
return{
    fetchProject:()=>dispatch(fetchProjects())
}
}

export default connect(mapStateToProps,mapDispatchToState)(Dashboard);