import { connect } from 'react-redux'
import React , { Component, Fragment } from 'react'
import Nav from "./nav"
import { handelSaveAnswer } from '../actions/questions'
import Login from './Login'
class PoolView extends Component {
  state={
    answer:null
  }
  render(){
let qid ,question, users,questions,q_author
if(this.props.noUser!==true){
      users = this.props.users
      questions=this.props.questions
     qid = window.location.pathname.slice(10,)
     question=questions[qid]
     q_author=this.props.users[question.author]
  }
    return (
         
      <Fragment>
        {
        this.props.noUser===true ? 
        <Login/>:
        <Fragment>
      <div>
        <Fragment>
        <Nav />
          <hr></hr>
      <div className='container text-center'>
      <div className="card mb-3"  width="400px">
        <div className="card-header">
          {q_author.name} asks:
        </div>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={q_author.avatarURL} className="img-fluid rounded-start" 
                 alt="..." 
                 height='100px' 
                 width='100%'></img>
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body">

        {this.props.viewPoolResults ?
          <Fragment>
            <h5 className="card-title">Result</h5>
               {
                  this.props.option === 'optionOne' ? 
                  <Fragment>
                    <div className="border border-primary">
                        <br></br>
                        <div className="form-check container">
                              <label className="form-check-label">
                                Would You rather {question.optionOne.text} ?
                              </label>
                            </div>
                            <progress height='20px' value={question.optionOne.votes.length} max={Object.keys(users).length}></progress>
                            <p className="opacity-50">{question.optionOne.votes.length} of {Object.keys(users).length} votes --- {(question.optionOne.votes.length/Object.keys(users).length).toFixed(2)*100}%</p>
                              
                  </div>
                  <br></br>

                      <div className="form-check container">
                        <label className="form-check-label">
                          Would You rather {question.optionTwo.text} ?
                        </label>
                      </div>
                      <progress value={question.optionTwo.votes.length} max={Object.keys(users).length}></progress>
                      <p className="opacity-50">{question.optionTwo.votes.length} of {Object.keys(users).length} votes --- {(question.optionTwo.votes.length/Object.keys(users).length).toFixed(2)*100}%</p>
                  </Fragment> 
                  
                  :
                  
                  <Fragment>
                  <div className="form-check container ">
                                  <label className="form-check-label">
                                    Would You rather {question.optionOne.text} ?
                                  </label>
                                </div>
                                <progress height='20px' value={question.optionOne.votes.length} max={Object.keys(users).length}></progress>
                                <p className="opacity-50">{question.optionOne.votes.length} of {Object.keys(users).length} votes --- {(question.optionOne.votes.length/Object.keys(users).length).toFixed(2)*100}%</p>
                                  <br></br>
                                  <div className="border border-primary">
                                  <br></br>
                                <div className="form-check container ">
                                  <label className="form-check-label">
                                    Would You rather {question.optionTwo.text} ?
                                  </label>
                                </div>
                                <progress value={question.optionTwo.votes.length} max={Object.keys(users).length}></progress>
                                <p className="opacity-50">{question.optionTwo.votes.length} of {Object.keys(users).length} votes --- {(question.optionTwo.votes.length/Object.keys(users).length).toFixed(2)*100}%</p>
                                </div>
                  </Fragment>
                }
          </Fragment>
          :
          <Fragment>
            <h5 className="card-title">Would you rather</h5>
            <br></br>
            <div className="form-check">
              <input className="form-check-input" type="radio" name='answer' value='optionOne' onChange={(e)=>{
                              this.setState({answer : e.target.value})
              }}></input>
              <label className="form-check-label">
                {question.optionOne.text}
              </label>
            </div>
            <br></br>--- OR ---<br></br><br></br>
            <div className="form-check">
              <input className="form-check-input" type="radio" name='answer' value='optionTwo' onChange={(e)=>{
                              this.setState({answer : e.target.value})
              }}></input>
              <label className="form-check-label">
                {question.optionTwo.text}
              </label>
            </div><br></br>
            <button type="button"  className="btn btn-primary" 
            onClick={(e)=>{
                e.preventDefault()
                console.log('button clicked')
                let { answer} = this.state
                const {dispatch ,authedUser  } = this.props

                let dispatchedObj={
                  authedUser,
                  qid,
                  answer
                }
                dispatch(handelSaveAnswer(dispatchedObj))
                console.log('dispatchedObj : ',dispatchedObj)

              }} disabled={this.state.answer === null}>Submit</button> 
          </Fragment>
  }

            </div>
          </div>
        </div>
      </div>
      </div>
        </Fragment>
      </div>
      </Fragment>

  }
  </Fragment>
    )
   }
}
function mapStateToProps ({ users ,questions ,authedUser}) {
  let noUser=false
  if(authedUser===''){
    let noUser=true
    return{
      noUser
    }
  }else{
  
      if(authedUser!==''){
      let QId=window.location.pathname.slice(10,)
      let viewPoolResults 
      let option = null
      
      if(Object.keys(users[authedUser].answers).includes(QId)){
        viewPoolResults=true
        option=users[authedUser].answers[QId]
        console.log(option)
      }
      else{
        viewPoolResults=false
      }
      return {
        users,
        questions,
        authedUser,
        viewPoolResults,
        option,
        noUser
      }
    }
  }
}

export default connect(mapStateToProps)(PoolView) 