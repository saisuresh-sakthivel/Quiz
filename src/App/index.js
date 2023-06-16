import React, { useState } from "react";
import { Header } from './styles';
import QandA from '../QandA';
export default function App(props){
    return(
        <div>
        <Header>Quiz</Header>
            <QandA Questions={props.questions}/>
        </div>
    )
}