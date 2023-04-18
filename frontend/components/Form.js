import React from 'react'
import { connect } from 'react-redux'

// import the required actions
import { inputChange, resetForm } from '../state/action-creators' // synchronous
import { postQuiz } from '../state/action-creators' // asynchronous

const mapStateToProps = state => {
  return {
    form: state.form
  }
}

export function Form(props) {
  // console.log(`===== FORM PROPS =====`)
  // console.log(props.form);
  // console.log(`===== ========== =====`)

  const onChange = evt => {
    const target_id = evt.target.id
    const target_value = evt.target.value
    props.inputChange(target_id, target_value)
  }

  const onSubmit = evt => {
    // prevent default state reset!
    evt.preventDefault();
  
    // post quiz!
    const newQuestionText = props.form.newQuestion;
    const newTrueText = props.form.newTrueAnswer
    const newFalseText = props.form.newFalseAnswer
    props.postQuiz(newQuestionText, newTrueText, newFalseText);

  }

  // const handlePostQuiz = () => {
  //   console.log(`quiz question: ${props.form.newQuestion}`);
  //   console.log(`quiz true: ${props.form.newTrueAnswer}`);
  //   console.log(`quiz false: ${props.form.newFalseAnswer}`);
  // }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.form["newQuestion"] } />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.form["newTrueAnswer"]} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.form["newFalseAnswer"]} />
      <button 
        id="submitNewQuizBtn"
        disabled={ 
          props.form["newQuestion"].trim().length === 0 ||
          props.form["newTrueAnswer"].trim().length === 0 ||
          props.form["newFalseAnswer"].trim().length === 0  
        }
        // onClick={ () => handlePostQuiz() }
      >Submit new quiz</button>
    </form>
  )
}

// export default connect(st => st, actionCreators)(Form)
export default connect(mapStateToProps, { inputChange, resetForm, postQuiz })(Form)
