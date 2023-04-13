// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  // return updates
  switch(action.type) {
    case MOVE_CLOCKWISE:
      // console.log(`reducer: move_clockwise triggered...`);
      // console.log(`reducer: new value is ${action.payload}`);
      return action.payload
    case MOVE_COUNTERCLOCKWISE:
      // console.log(`reducer: move_counter_clockwise triggered...`);
      // console.log(`reducer: new value is ${action.payload}`);
      return action.payload
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
