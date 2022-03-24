import React from 'react'
import { InputOption } from '../atoms/index'

export default function QuestionComponent({name, options}) {
  return (
    <div className="survey-question">
        <div className="survey-header">
            <span className="question">
                {name}
            </span>
        </div>
        {
            options ? (
                options.map(option => <InputOption name={option} />)
            ) : (
                <div className="answer-survey">
                    <input className="text-answer" type="text" name="answer" id="answer" placeholder="Escribir respuesta..." />
                </div>
            )
        }
    </div>
  )
}
