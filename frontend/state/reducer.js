// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'
import { SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from './action-types'
import { INPUT_CHANGE, RESET_FORM } from './action-types'

// complete
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

// complete
const initialQuizState = null
function quiz(state = initialQuizState, action) {
  // return updates
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      // console.log(`reducer: set_quiz_into_state triggered...`);
      // console.log(`reducer: new quiz is...`);
      // console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

// complete
const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
    // return updates
    switch(action.type) {
      case SET_SELECTED_ANSWER:
        return action.payload
      default:
        return state;
    }
}

// complete
const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  // return updates
  switch(action.type) {
    case SET_INFO_MESSAGE:
      // console.log(`reducer: set_info_message triggered...`);
      // console.log(`reducer: new message is ${action.payload}`);
      return action.payload
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      // console.log(`reducer: input_change triggered...`)
      return { 
        ...state, 
        [action.payload["key"]]: action.payload["value"] 
      };
    case RESET_FORM:
      // console.log(`reducer: reset_form triggered...`)
      return {
        ...state,
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: '',
      }
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })