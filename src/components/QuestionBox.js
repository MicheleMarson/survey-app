import React, { useState } from 'react'
import "../style/QuestionBox.css"
import Questions from "./Questions"
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import Edit from './Edit';


const QuestionBox = (props) => {
  let {setQuestionNumber, questionNumber, setTitle,title,answer, 
      setAnswer, addAnswer, setAddAnswer,  edit, setEdit} = props

  const editQuestion = (e) => {
    if(edit.save && addAnswer.length > 0){
      setQuestionNumber(questionNumber + 1)
      setEdit({...edit, save:false})
    }else{
      setEdit({...edit, edited:true})
    }
  }

  return (
    <div className="questionBox">
      <h1
      spellCheck="false"
      contentEditable="true"
      className="questionBox__title" 
      onKeyUp={(e) => setTitle(e.target.textContent)}>
        {title}
        <div className="questionBox__icon">
          <CreateIcon/>
        </div>
      </h1>
      {edit.edited ? (
        <>
          <Questions
            setAddAnswer={setAddAnswer}
            addAnswer={addAnswer}
            answer={answer}
            setAnswer={setAnswer}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            edit={edit}
            setEdit={setEdit}/>
          <Edit
            setAnswer={setAnswer}
            answer={answer}
            setAddAnswer={setAddAnswer}
            addAnswer={addAnswer}
            answer={answer}
            setAnswer={setAnswer}
            edit={edit}
            setEdit={setEdit}
            />
        </>
        
      ) : (
        <div className="questionBox__containerBtn">
          <button type="button" onClick={editQuestion} className="questionBox__button">
            <div>
              <span><AddIcon/></span>
              <p>Dodaj pitanje</p>
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionBox
