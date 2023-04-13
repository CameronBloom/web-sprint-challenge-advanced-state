import axios from 'axios'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'
import { SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from './action-types'
import { INPUT_CHANGE, RESET_FORM } from './action-types'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(nextPosition) {
  // console.log(`action: move_clockwise triggered...`);
  // console.log(`action: new value is ${nextPosition}`);
  return {
    type: MOVE_CLOCKWISE,
    payload: nextPosition
  }
}

export function moveCounterClockwise(nextPosition) {
  // console.log(`action: move_counter_clockwise triggered...`);
  // console.log(`action: new value is ${nextPosition}`);
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: nextPosition
  }
}

export function selectAnswer(answer) { 
  // console.log(`action: select_answer triggered...`);
  // console.log(`action: answer index is ${answer}`);
  return {
    type: SET_SELECTED_ANSWER,
    payload: answer
  }
}

export function setMessage(message) { 
  // console.log(`action: set_message triggered...`);
  // console.log(`action: new message is ${message}`);
  return {
    type: SET_INFO_MESSAGE, 
    payload: message
  }
}

export function setQuiz(quiz) { 
  // console.log(`action: set_quiz triggered...`);
  // console.log(`action: new quiz is...`);
  return {
    type: SET_QUIZ_INTO_STATE,
    payload: quiz
  }
}

export function inputChange(target_id, target_value) { 
  console.log(`action: inputChange triggered...`)
  console.log(target_id, target_value)
  return {
    type: INPUT_CHANGE,
    payload: { key: target_id, value: target_value}
  }
}

export function resetForm() { 
  return {
    type: RESET_FORM
  }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => dispatch(setQuiz(res.data)))
  
  }
}

export function postAnswer(quiz, answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz

    // console.log(`quiz was passed!!! - ${quiz}`)
    // console.log(`answer was passed!!! - ${answer}`)
    // console.log({ "quiz_id": quiz, "answer_id": answer })
    
    dispatch(selectAnswer(null))
    axios.post("http://localhost:9000/api/quiz/answer", { "quiz_id": quiz, "answer_id": answer })
      .then(res => dispatch(setMessage(res.data.message)))
    dispatch(setQuiz(null))
    dispatch(fetchQuiz())

  }
}

export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
