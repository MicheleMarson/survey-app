import React from 'react'
import {data} from "../data"
import "../style/Results.css"

const Results = () => {

  return (
    <div className="results">
      {data.map(item => (
        <>
          <h2 className="results__title">{item.title}</h2>
          <div className="results__question">
            <p className="result__questionQuestion"><span>{data.length}.</span>{item.question}</p>
            <div className="results__graph">
              <div className="results__answers">
                {item.answers.map(answer => (
                  <p>{answer}</p>
                ))}
              </div>
              <div className="results__dataGraph">
                {item.peopleChoice.map(choice => (
                  <span style={graph(choice.food.num, item.peopleAnwered)}></span>
                ))}
                <div className="results__lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="results__percent">
                  <p>0%</p>
                  <p>10%</p>
                  <p>20%</p>
                  <p>30%</p>
                  <p>40%</p>
                  <p>50%</p>
                </div>
              </div>
            </div>
            <div className="results__data">
              <div className="results__head">
                <p>OPTIONS</p>
                <p>ANSWERS</p>
              </div>
              {data[0].peopleChoice.map(item => (
                <div className="results__box">
                  <div className="results__boxQuestion">
                    <p>{item.food.food}</p>
                  </div>
                  <div className="results__boxData">
                    <p>{(item.food.num / data[0].peopleAnwered) * 100}%</p>
                    <p>{item.food.num}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

// graph style - change data dinamicaly
const graph = (num, total) => {
  let percent = ((num / total) * 100) * 2  // for 50%
  return {
    width:`calc(${percent}%)`,
    maxWidth: "100%",
    height: "30px",
    display:"block",
    backgroundColor: `hsl(${percent * num}, ${percent}%, ${percent}%)`,
    zIndex:"2",
    margin:"20px 0px 10px"
  }
}

export default Results
