import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// import the required actions
import { selectAnswer, setQuiz, setMessage } from '../state/action-creators' // synchronous
import { fetchQuiz, postAnswer } from '../state/action-creators' // asynchronous

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage,
  }
}

function Quiz(props) {
  // console.log(` === Quiz Props === `)
  // console.log(props)

  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handlePostAnswer = () => {
    console.log(`quiz id: ${props.quiz.quiz_id}`);
    console.log(`answer id: ${props.quiz.answers[props.selectedAnswer]["answer_id"]}`);
    console.log(`answer text: ${props.quiz.answers[props.selectedAnswer]["text"]}`);
    const quizId = props.quiz.quiz_id;
    const answerId = props.quiz.answers[props.selectedAnswer]["answer_id"];
    props.postAnswer(quizId, answerId);
  }
  
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
            <button 
              id="submitAnswerBtn" 
              disabled={ props.selectedAnswer !== 0 && !props.selectedAnswer }
              onClick={ () => handlePostAnswer() }
            >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(mapStateToProps, { selectAnswer, setQuiz, setMessage, fetchQuiz, postAnswer })(Quiz)
