import React, {useState} from 'react'
import Answer from '../Answer';

export default function Answers(props) {
    const [checkedAns,setCheckedAns] = useState(-1);
    const changeHandler = function(event){
        setCheckedAns(Number(event.target.value));
    }
    const answers = props.answers.map((answer,i) => {
        const ans = {
            "answer":answer,
            "id":i,
            "checked":(i===checkedAns)?true:false
        }
        return (<Answer checked={ans.checked} answerid={"question"+i} changeHandler={changeHandler} questionid={props.questionid}>{ans}</Answer>)
    }); 

  return (
    <ol>
      {answers}
    </ol>
  )
}
