import React, {useState} from 'react'
import Answer from '../Answer';

export default function Answers(props) {
    const answers = props.answers.map((answer,i) => {
        const ans = {
            "answer":answer,
            "id":i
        }
        return (<Answer answerid={"question"+i} changeHandler={props.changeHandler} questionid={props.questionid}>{ans}</Answer>)
    }); 

  return (
    <ol>
      {answers}
    </ol>
  )
}
