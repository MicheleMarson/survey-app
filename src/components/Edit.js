import React, { useState } from 'react'
import ToggleBtn from "./ToggleBtn"
import "../style/Edit.css"
import AddIcon from '@material-ui/icons/Add';

const Edit = (props) => {
  let { addAnswer, setAddAnswer, answer, edit, setEdit} = props
  const handleSave = () => {
      setEdit({...edit, edited:false, save:true, option:false})
      
      setAddAnswer([])
    // }
  }

  // console.log("edit>>>",edit);

  // console.log(addAnswer)
  const newAnswer = (e) => {
    e.preventDefault()
    setAddAnswer([...addAnswer, {answer: answer, num:addAnswer.length + 1, id: Math.random() * 1000}])
  }

  return (
    <div className="edit">
      <div className="edit__question">
        <div>
          <button className="edit__button" onClick={newAnswer}>
            <AddIcon/>
            <p>Dodaj odgovor</p>
          </button>
          <button onClick={() => setEdit({...edit, option:true})} className={`edit__button  ${edit.option?"disabled":""}`}>
            <AddIcon/>
            <p>Dodaj opciju "drugo"</p>
          </button>
        </div>
        <div
          onClick={() => setEdit({...edit, multy:!edit.multy})}
          className={`edit__button edit__button--multy ${edit.multy ? "enable" : ""}`}
        >
          <ToggleBtn/>
          <p>Visestruki odabir</p>
        </div>
      </div>
      <div className="edit__required">
        <div 
          onClick={() => setEdit({...edit, required:!edit.required})}
          className={`edit__button edit__button--required ${!edit.required ? "enable" : ""}`}
        >
          <ToggleBtn/>
          <p>Obavezan odgovor</p>
        </div>
        <div className="edit__saveBtn">
          <button onClick={() => setEdit({...edit, edited:false})} className="edit__saveBtn--quit">ODUSTANI</button>
          <button onClick={handleSave} className="edit__saveBtn--save">SPREMI</button>
        </div>
      </div>
    </div>
  )
}

export default Edit
