import React, { createRef, useState } from 'react'
import "../style/Questions.css"

const Questions = (props) => {
  let {questionNumber, addAnswer, setAddAnswer, setAnswer, edit} = props

  return (
    <div className="questions">
      <div
        className="questions__question">
      <small>{questionNumber} .</small> <span spellcheck="false" contentEditable="true" >Pitanje {questionNumber}</span>
      </div> 
      <div className="questions__container">
      {addAnswer?.map((item, i)=> (
        <div className="question">
          <div className="questions__containerQuestion">
            <div className="questions__label">
              <input type={`${!edit.multy?"radio":"checkbox"}`} name={`${!edit.multy?"question":item.id}`} id={item.id} value={item.id}/>
              <label spellCheck="false" contentEditable="true" onKeyUp={(e) => setAnswer(e.target.textContent)} for={item.id}> Odgovor {i + 1}</label>
            </div>
            <div onClick={() => setAddAnswer(addAnswer.filter(el => el.id !== item.id))} className="delete">x</div>
          </div>
        </div>
      ))}
      {edit.option && (
        <div className="questions__option">
          <textarea spellCheck="false" placeholder="Other"></textarea>
        </div>
      )}
      </div>
    </div>
  )
}

export default Questions
