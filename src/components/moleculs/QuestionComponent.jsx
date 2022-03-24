import React from 'react'
import { InputOption } from '../atoms/index'

export default function QuestionComponent({name, options}) {
  return (
    <div class="survey-question">
        <div class="survey-header">
            <span class="question">
                {name}
            </span>
        </div>
        {
            options ? (
                options.map(option => <InputOption name={option} />)
            ) : (
                <div class="answer-survey">
                    <input class="text-answer" type="text" name="answer" id="answer" placeholder="Escribir respuesta..." />
                </div>
            )
        }
    </div>
  )
}
