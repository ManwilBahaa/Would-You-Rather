import { RECEIVE_QUESTIONS ,ADD_QUESTIONS , SAVE_ANSWER} from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
      case ADD_QUESTIONS:
        const {questions}=action
        console.log(action)

        return {
          ...state,
          [questions.id]:questions
        }

        case SAVE_ANSWER:
          const { answer,authedUser,qid } = action.answerToBeSaved
          console.log(action)
          return {
            ...state,
            [qid]: {
              ...state[qid],
              [answer]: {
                ...state[qid][answer],
                votes: state[qid][answer].votes.concat([authedUser])
              }
            }
          }
    default :
      return state
  }
} 