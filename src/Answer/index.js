import React, {useState} from 'react'
import { AnswerInput } from './style'
import { LabelStyle, ListStyle } from './style';

export default function Answer(props) {
    const {answer,id} = props.children; 
  return (
    <ListStyle>
      <AnswerInput key={props.answerid} checked={props.checked} onChange={props.changeHandler} name={"question"+props.questionid} type='radio' value={id}/>
      <LabelStyle>{answer}</LabelStyle>
    </ListStyle>
  )
}
