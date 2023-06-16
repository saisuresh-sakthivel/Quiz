import React, {useState } from 'react';
import { Quiz, Button } from '../App/styles';
import Answers from '../Answers';
export default function QnadA(props){
    const [index,setIndex] = useState(0);
    const [QandAState,setQandAState] = useState({
       "qindex":0,
       "answerIndex":-1,
       "submitted":false
    })
    const {q,a,correct} = props.Questions[QandAState.qindex]
    const changeQuestion = function(id){
        let currentState = {...QandAState}
        if(id==='next'){
            currentState.qindex++;
        } else {
            currentState.qindex--;
        }
        setQandAState(currentState);
    }   

    const changeHandler = function(event){
        let currentState = {...QandAState}
        currentState.answerIndex = event.target.value
        setQandAState(event.target.value);
    }
    const checkAnswer = function(event){
        console.log(event.target.value);
        //const answerStatus = (answerIndex === correct)?'correctAnswer':'wrongAnswer';
        //setStatus(answerStatus);
    }
    const Next = <Button disabled={(QandAState.submitted === false || QandAState.qindex===props.Questions.length-1)?true:false} onClick={() => changeQuestion('next')}>Next</Button>;
    const Prev = <Button disabled={(QandAState.submitted === false || QandAState.qindex===0)?true:false} onClick={() => changeQuestion('prev')}>Prev</Button>;
    return(
        <><Quiz>{q}</Quiz>
        <Answers changeHandler={changeHandler} answers={a} questionid={index}/>
        <Button onClick={checkAnswer}>Submit</Button>
        {Prev}
        {Next}</>
        
    )
}