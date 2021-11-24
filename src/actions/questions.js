import { saveQuestion, saveQuestionAnswer } from "../api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const UPDATE_USERS='UPDATE_USERS'

function addQuestions (questions) {
  return {
    type: ADD_QUESTIONS,
    questions,
  }
} 

function saveAnswer(answerToBeSaved){
  return {
    type:SAVE_ANSWER,
    answerToBeSaved
  }
}

export function handelSaveAnswer(answerToBeSaved){
  return (dispatch) => {
            console.log(answerToBeSaved)
    let { answer,authedUser,qid } = answerToBeSaved
    console.log( answer,authedUser,qid)
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(()=>{
            console.log('Sending to questions reduser : ',{
              authedUser,
              qid,
              answer
            })
        dispatch(saveAnswer({
          authedUser,
          qid,
          answer
        }))

        console.log('Sending to users reduser : ',{
          authedUser,
          qid,
          answer
        })
    dispatch({
      type:UPDATE_USERS,
      newUsers:{
        authedUser,
        qid,
        answer
      }
    })
      })
    }
}





export function handelAddQuestion(QToBeAdded){
  return (dispatch) => {

                    console.log(QToBeAdded)              

    let {optionOneText,optionTwoText,authedUser}=QToBeAdded

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author:authedUser
    }).then((AddedQuestions)=>{

                  console.log(AddedQuestions)              

      dispatch(addQuestions(AddedQuestions))
    })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
} 