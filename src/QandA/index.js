import React, {useState } from 'react';
import { Quiz } from '../App/styles';
import Answers from '../Answers';
export default function QnadA(props){
    const [index,setIndex] = useState(0);
    const {q,a,correct} = props.Questions[index]
    const changeQuestion = function(id){
        if(id==='next'){
        setIndex(index+1);
        } else {
            setIndex(index-1);
        }
    }   
    const [answerIndex,setAnswerIndex] = useState(-1);
    const [status,setStatus] = useState('');
    const changeHandler = function(event){
        setAnswerIndex(event.target.value);
    }
    const checkAnswer = function(event){
        console.log(typeof(answerIndex)+"======="+typeof(correct));
        const answerStatus = (answerIndex === correct)?'correctAnswer':'wrongAnswer';
        console.log('answerStatus',answerStatus);
        setStatus(answerStatus);
    }
    const Next = (index<(props.Questions.length-1))?<button onClick={() => changeQuestion('next')}>Next</button>:'';
    const Prev = (index!==0)?<button onClick={() => changeQuestion('prev')}>Prev</button>:'';
    return(
        <><Quiz>{q}</Quiz>
        <Answers changeHandler={changeHandler} answers={a} questionid={index}/>
        <button onClick={checkAnswer}>Check</button>
        {Prev}
        {Next}
        <div>{'Status = '+status}</div></>
        
    )
}