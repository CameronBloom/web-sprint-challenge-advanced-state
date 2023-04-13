import React from 'react'
import { connect } from 'react-redux'

// import the required actions
import { selectAnswer, setQuiz, setMessage } from '../state/action-creators' // synchronous
import { fetchQuiz, postAnswer } from '../state/action-creators' // asynchronous

// key for state should be "wheel"
const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  }
}

function Quiz(props) {
  console.log(` === Quiz Props === `)
  console.log(props)

  const handleFetchQuiz = e => {
    e.preventDefault();
    // console.log(`component: handle_clockwise triggered...`)
    // console.log(`component: curr value is ${props.wheel}`);
    props.fetchQuiz();
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
      <button onClick={ handleFetchQuiz } >fetch test...</button>
    </div>
  )
}

export default connect(mapStateToProps, { selectAnswer, setQuiz, setMessage, fetchQuiz, postAnswer })(Quiz)
