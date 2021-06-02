import React from 'react'

const Question = ({multy, setMulty, required, setRequired}) => {
  const deleteAnswer = (e) => {
    e.target.parentElement.parentElement.style.display = "none"
  }

  return (
    <div className="question">
      <div className="questions__containerQuestion">
        <div>
          <input type={`${!multy?"radio":"checkbox"}`} name="dog" id="huskey" value="huskey"/>
          <label for="huskey">Odgovor 1</label>
        </div>
        <div onClick={deleteAnswer} className="delete">x</div>
      </div>
    </div>
  )
}

export default Question
