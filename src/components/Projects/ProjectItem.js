import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { deleteProjectById } from '../../redux/Project/ProjectAction';
import { connect } from 'react-redux';
class ProjectItem extends Component {
     deletes=()=>{
         console.log(this.props.id)
        this.props.deletesProject(this.props.id)
    }
    render() {

        
        return (
            <div className="container" >
                            <div className="card card-body bg-light mb-3 " style={{height:"150px",fontSize:"13px"}}>
                                <div className="row">
                                    <div className="col-2">
                                        <span className="mx-auto">{this.props.id}</span>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-8">
                                        <h3>{this.props.name}</h3>
                                        <p>{this.props.description}</p>
                                    </div>
                                    <div className="col-md-4 d-none d-lg-block">
                                        <ul className="list-group">
                                            <a href="#">
                                                <li className="list-group-item board">
                                                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                                </li>
                                            </a>
                                        <Link to={`/updateProject/${this.props.id}`}> 
                                                <li className="list-group-item update">
                                                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                                                </li>
                                            </Link>

                                            
                                                <li className="list-group-item delete" onClick={this.deletes}>
                                                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                                </li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        deletesProject:(x)=>dispatch(deleteProjectById(x))
    }
}
export default  connect(null,mapDispatchToProps)(ProjectItem);