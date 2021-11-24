import { Component, Fragment } from "react"
import React from 'react'
import { connect } from 'react-redux'
import Dashboard from "./Dashboard"
import Nav from "./nav"
import { Link } from "react-router-dom"
class  HomePage extends Component{
  render(){
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
      <div>
          <Nav/>
          <hr></hr>
          <hr></hr>
          <div className="container">
            <Dashboard/>
          </div>
          
      </div>
      </Fragment>
      }
      </Fragment>
       )
  }
}

function mapStateToProps ({ users ,authedUser}) {
  let noUser=false
  if(authedUser===''){
    let noUser=true
    return{
      noUser
    }
  }else{
  
  return {
    noUser,
    authedUser
  }
  }
}

export default connect(mapStateToProps)(HomePage)