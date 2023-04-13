import axios from 'axios'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE } from './action-types'

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

export function selectAnswer() { }

export function setMessage() { }

export function setQuiz() { 
  console.log(`action: set_quiz triggered...`);
  console.log(`action: new quiz is...`);
  return {
    type: SET_QUIZ_INTO_STATE
  }
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch({ type: SET_QUIZ_INTO_STATE, payload: null });
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res =>
      dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data })
    );

  }
}

export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
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
