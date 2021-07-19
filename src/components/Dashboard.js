import React, { Component } from 'react'
import ProjectItem from './Projects/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateProjectButton from './Projects/CreateProjectButton';

class Dashboard extends Component {
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
    
                      <ProjectItem/>
    
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
export default Dashboard;