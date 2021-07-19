import React, { Component } from 'react'

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            projectName:"",
            projectIdentifier:"",
            description:"",
            start_date:"",
            end_date:""
        }
    }

     onNameChange=(e)=>{
this.setState({
    projectName:e.target.value
})
    }

    onIdChange=(e)=>{
        this.setState({
            projectIdentifier:e.target.value
        })
    }
    onDescriptionChange=(e)=>{
        this.setState({
            description:e.target.value
        })
    }
    onStartDateChange=(e)=>{
        this.setState({
            start_date:e.target.value
        })
    }
    onEndDateChange=(e)=>{
        this.setState({
            end_date:e.target.value
        })
    }
    onFormSubmit=(e)=>{

        e.preventDefault();
        const newProject={
            ...this.state
        }
        console.log(newProject)
    }

    render() {

        return (
            <div>
        
         <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h6 className="display-5 text-center"><b>Project form</b></h6>
                    <hr />
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <input onChange={this.onNameChange} value={this.state.projectName} type="text" className="form-control form-control-lg " placeholder="Project Name" name="projectName"/>
                        </div>
                        {//console.log(this.state.projectName)
                        }
                        <div className="form-group">
                            <input onChange={this.onIdChange} value={this.state.projectIdentifier} type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectIdentifier"
                                 />
                        </div>
                        
                        <div className="form-group">
                            <textarea onChange={this.onDescriptionChange} value={this.state.description} className="form-control form-control-lg" placeholder="Project Description" name="description"></textarea>
                        </div>
                        <h5>Start Date</h5>
                        <div className="form-group">
                            <input onChange={this.onStartDateChange} value={this.state.start_date} type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h5>Estimated End Date</h5>
                        <div className="form-group">
                            <input onChange={this.onEndDateChange} value={this.state.end_date} type="date" className="form-control form-control-lg" name="end_date" />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" style={{height:"36px",fontSize:"13px"}}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default AddProject
