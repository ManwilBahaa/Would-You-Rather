import { Component ,Fragment} from "react"
import React from 'react'
import { connect } from 'react-redux'
import Question from "./questionComponent"
import Login from "./Login"

class  Dashboard extends Component{
  state={
    answered:null
  }
  render(){
    let filteredBookId = this.props.questionId.filter((x)=>{
      return this.props.answeredQuestions.includes(x) === (this.state.answered ? this.state.answered :false)
    })
    
    return(

      <Fragment>
      {
      this.props.noUser===true ? 
      <Login/>:
      <Fragment>
      <div className='container'>
            <ul className="nav nav-tabs">

              <li className="nav-item">
                <button className="nav-link active" id='unanswered' aria-current="page" onClick={(e)=>{
                      this.setState({answered:false})

                      if(e.target.className === "nav-link active"){
                        return "active highlighted"
                      }
                      else{
                        e.target.className="nav-link active"
                        document.getElementById("answered").className='nav-link '
                      }
                  }}>Unanswered Questions</button>
              </li>

              <li className="nav-item">
                <button className="nav-link" id='answered' onClick={(e)=>{
                      this.setState({answered:true})

                      if(e.target.className === "nav-link active"){
                        return "active highlighted"
                      }
                      else{
                        e.target.className="nav-link active"
                        document.getElementById("unanswered").className='nav-link '
                      }
                }}>Answered Questions</button>
              </li>
            </ul>
            <br></br>
          {
            filteredBookId.reverse().map((x)=>(
              <Question id={x}/>
            ))
          }
        </div>
        </Fragment>
      }
      </Fragment>
    
    )
  }
}

function mapStateToProps ({ users , questions ,authedUser}) {
  let noUser=false
  if(authedUser===''){
    let noUser=true
    return{
      noUser
    }
  }else{
  
  let url = users[authedUser].avatarURL
  let authedUserAnsweredQuestions = Object.keys(users[authedUser].answers)
  
  return {
    questionId: Object.keys(questions), // all questions ids in store
    authedUser,
    answeredQuestions : authedUserAnsweredQuestions, //questions ids answered by authed user
    avatar:url,
    noUser
  }}
}

export default connect(mapStateToProps)(Dashboard)