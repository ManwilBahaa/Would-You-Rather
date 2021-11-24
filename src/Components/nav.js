import { Component } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
class Nav extends Component{
render(){
  return(
    <ul className="nav nav-pills nav-justified">
    <li className="nav-item nav-link">
      <h4>Would You Rather </h4>
    </li>
    <li className="nav-item nav-link">
    <Link to ='/Home' className="nav-link">
    Home
    </Link>
    </li>
    <li className="nav-item nav-link">
    <Link to ='/Add' className="nav-link">
     New question
     </Link>
    </li>
    <li className="nav-item nav-link">
    <Link to ='/LeadersBoard' className="nav-link">
     LeaderBoard
     </Link>
    </li>

    <li className="nav-item"></li>

    <li className="nav-item " display='inline'>
      <img src={this.props.avatar} className="img-fluid rounded-start" 
            alt="authed user avatar" 
            height='50px' 
            width='50px'></img>
      <br></br>
      Welcome {this.props.name}
    </li>
    <li className="nav-item">
        
        <Link to ='/' className="nav-link">
          log out
        </Link>
    </li>
  </ul>
  )
}
}
function mapStateToProps ({ users ,authedUser}) {
  let avatar =users[authedUser].avatarURL
  let name =users[authedUser].name
  return {
    avatar,
    name
  }
}

export default connect(mapStateToProps)(Nav)