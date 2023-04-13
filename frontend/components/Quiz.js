import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// TODO:
// =====
// INITIAL QUIZ RENDERING
// POST ANSWER


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

  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handleFetchQuiz = e => {
    e.preventDefault();
    props.fetchQuiz();
  };
  
  const handleSelectAnswer = (index) => {
    props.selectAnswer(index);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz["question"]}</h2>


            <div id="quizAnswers">
              {props.quiz["answers"].map((answer, idx) => {
                return (
                  <div 
                    className={props.selectedAnswer === idx ? "answer selected" : "answer" } 
                    key={idx} 
                    onClick={ () => handleSelectAnswer(idx) }
                  >
                    { answer["text"] }
                    { props.selectedAnswer === idx ? <button>SELECTED</button> : <button>Select</button>}
                  </div>
                )
              })}
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
