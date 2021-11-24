import { Component ,Fragment} from "react"
import React from 'react'
 import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { handelAddQuestion } from "../actions/questions"
import Nav from "./nav"
class  CreateQuestion extends Component{
  state={
    option1 :'',
    option2 :''
  }

  handleChange1 = (e) => {
    const text = e.target.value

    this.setState(() => ({
      option1:text
    }))
  }
  handleChange2 = (e) => {
    const text = e.target.value
    this.setState(() => ({
      option2:text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { option1,option2} = this.state
    const {dispatch ,authedUser  } = this.props

    let dispatchedObj={
      optionOneText:option1,
      optionTwoText :option2,
      authedUser
    }
    
    dispatch(handelAddQuestion(dispatchedObj))

    console.log('dispatchedObj : ',dispatchedObj)
    this.setState(() => ({
          option1 :'',
          option2 :''
        }))
  }
  render(){
    const { option1,option2  } = this.state
    return(
      <Fragment>
        {
        this.props.noUser===true ? 
        <p className='text-center'>
        <Link to='/'>
        login first
        </Link>
        </p>:
      <Fragment>
        <Nav/>
          <hr></hr>
      <div className='container'>
          <div className="card text-center">
            <div className="card-header">
              Featured
            </div>
            <div className="card-body">
              <h5 className="card-title">Would You Rather</h5>
              <p className="card-text">Complete the question :</p>
              
              
              <input type="text" className="form-control"
                     onChange={this.handleChange1}
                     value={option1}></input>
              ---  OR  ---
              <input type="text" className="form-control"
                     onChange={this.handleChange2}
                     value={option2}></input>
              <br></br>
              
              <button className='btn btn-submit' onClick={this.handleSubmit}>
                <Link to ='/Home' className="nav-link"> Submit</Link>
                </button>
              
            </div>
          </div>
      </div> 
      </Fragment>
  }
  </Fragment>
       )
  }
}

function mapStateToProps ({authedUser}) {
  let noUser=false
  if(authedUser===''){
    let noUser=true
    return{
      noUser
    }}
    else{
  
      return {
        noUser,
        authedUser
      }
      }
}

export default connect(mapStateToProps)(CreateQuestion)