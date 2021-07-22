import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { createProject } from '../../redux/Project/ProjectAction';
import classnames from 'classnames'

class AddProject extends Component {
    constructor(){
        super();
        this.state={
            project:{
            projectName:"",
            projectIdentifier:"",
            description:"",
            start_date:"",
            end_date:""
            },
        }
    }

     onNameChange=(e)=>{
this.setState({
    project:{...this.state.project,projectName:e.target.value}
})
    }

    onIdChange=(e)=>{
        this.setState({
            project:{...this.state.project,projectIdentifier:e.target.value}
        })
    }
    onDescriptionChange=(e)=>{
        this.setState({
            project:{...this.state.project,description:e.target.value}
        })
    }
    onStartDateChange=(e)=>{
        this.setState({

            project:{...this.state.project,start_date:e.target.value}
        })
    }
    onEndDateChange=(e)=>{
        this.setState({
           project:{...this.state.project,end_date:e.target.value}

        })
    }


    onFormSubmit=(e)=>{

        e.preventDefault();
        this.props.createsProject(this.state.project,this.props.history)
    }

    render() {
        
        const inputStyle={
            border:"10 px solid #772F21"
        }
        const dummy={

        }
        return (
            <div>
                
         <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h6 className="display-5 text-center"><b>Project form</b></h6>
                    <hr />
                    <form onSubmit={this.onFormSubmit}>
                        {this.props.errors.error.projectName && <h5 style={{"color":"maroon"}}><b>{'*'+this.props.errors.error.projectName}</b></h5>}
                        <div className={this.props.errors.error.projectName?"form-group has-danger":"form-group"}>
                            <input className={this.props.errors.error.projectName?"form-control form-control-danger":"form-control"} onChange={this.onNameChange} value={this.state.projectName} type="text" className="form-control form-control-lg " placeholder="Project Name" name="projectName"/>
                        </div>
                        {this.props.errors.error.projectIdentifier && <h5 style={{"color":"maroon"}}><b>{'*'+this.props.errors.error.projectIdentifier}</b></h5>}
                        <div className={this.props.errors.error.projectIdentifier?"form-group has-danger":"form-group"}>
                            <input  className={this.props.errors.error.peojectIdentifier?"form-control form-control-danger":"form-control"} onChange={this.onIdChange} value={this.state.projectIdentifier} type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectIdentifier"
                                 />
                        </div>
                        {this.props.errors.error.description && <h5 style={{"color":"maroon"}}><b>{'*'+this.props.errors.error.description}</b></h5>}
                        <div className={this.props.errors.error.description?"form-group has-danger":"form-group"}>
                            <textarea onChange={this.onDescriptionChange} value={this.state.description} className={this.props.errors.error.description?"form-control form-control-danger":"form-control form-control-lg"} placeholder="Project Description" name="description"></textarea>
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

const mapStateToProps=(state)=>{
    return {
        errors:state.createprojects
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        createsProject:(x,y)=>dispatch(createProject(x,y))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProject)
