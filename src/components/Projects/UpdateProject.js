import React, { Component } from 'react'
import { fetchProjectById } from '../../redux/Project/ProjectAction'
import { connect } from 'react-redux'
//import {createProject} from '../../redux/Project/ProjectAction'
import { updateProject } from '../../redux/Project/ProjectAction'
class UpdateProject extends Component {
    
    constructor(){
        super();
        this.state={
            project:{
                id:'',
                projectName:'',
                projectIdentifier:'',
                description:'',
                start_date:'',
                end_date:''

            }
        }
    }

   componentDidMount(){
       console.log(this.props.match.params.id)
       console.log(this.props.project)
       const id=this.props.match.params.id
       this.props.fetchprojectforupdates(id,this.props.history)
   }


   onNameChange=(e)=>{
this.setState({
    project:{
        ...this.state.project,
        projectName:e.target.value
    }
})
   }

   onDescriptionChange=(e)=>{
       this.setState({
           project:{
               ...this.state.project,
               description:e.target.value
           }
       })
   }

   onStartDateChange=(e)=>{
    this.setState({
        project:{
            ...this.state.project,
            start_date:e.target.value
        }
    })
   }

   onEndDateChange=(e)=>{
       this.setState({
           project:{
               ...this.state.project,
               end_date:e.target.value
           }
       })
   }
onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.project)
    console.log(this.props.history)
    this.props.createUpdatedProject(this.state.project,this.props.history)
    
}
componentWillReceiveProps(nextProps){
    console.log("nextProps"+nextProps.project.project)
    this.setState({
        project:{...nextProps.project.project}
    })
}
    render() {
      //  console.log(this.props.location)
       
        return (
            <div>
                
         <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h6 className="display-5 text-center"><b>UPDATE PROJECT</b></h6>
                    <hr />
                    <form onSubmit={this.onFormSubmit}>
                        {//this.props.errors.error.projectName && <h5 style={{"color":"maroon"}}><b>{'*'+this.props.errors.error.projectName}</b></h5>
                        }
                        <div className="form-group">
                            <input className="form-control" onChange={this.onNameChange} value={this.state.project.projectName}  type="text" className="form-control form-control-lg " placeholder="Project Name" name="projectName"/>
                        </div>
                            <div className="form-group">
                            <input value={this.state.project.projectIdentifier} disabled type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectIdentifier"/>
                        </div>

                        {//this.props.errors.error.description && <h5 style={{"color":"maroon"}}><b>{'*'+this.props.errors.error.description}</b></h5>
                        //form-group has-danger
                        }
                        <div className="form-group">
                            <textarea value={this.state.project.description} onChange={this.onDescriptionChange} className="form-control form-control-lg" placeholder="Project Description" name="description"></textarea>
                        </div>
                        <h5>Start Date</h5>
                        <div className="form-group">
                            <input  value={this.state.project.start_date} onChange={this.onStartDateChange} type="date" className="form-control form-control-lg" name="start_date" />
                        </div>
                        <h5>Estimated End Date</h5>
                        <div className="form-group">
                            <input value={this.state.project.end_date} type="date" onChange={this.onEndDateChange} className="form-control form-control-lg" name="end_date" />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" style={{height:"36px",fontSize:"13px"}}/>
                        <a style={{"marginTop":"40px","width":"200px","fontSize":"13px"}} className="btn btn-outline-dark" href="/dashboard" role="button"><b><i class="fa fa-arrow-left" aria-hidden="true"> Go to  DashBoard</i></b></a>
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
        project:state.fetchprojectforupdate
    }

}
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchprojectforupdates:(x,y)=>{dispatch(fetchProjectById(x,y))},
        createUpdatedProject:(x,y)=>{dispatch(updateProject(x,y))}

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateProject)
