import React, { useEffect, useState } from 'react';
import './App.css';
import {details} from './quiz data/data';
import {questiontype} from "./types/quiz type";
import QueCard from "./components/quecard";
import { updateExpressionWithTypeArguments, updateVariableDeclarationList } from 'typescript';


function App() {
  let [Quiz1 , setQuiz]  = useState<questiontype[]>([])
  let [currentStep , setCurrentStep] = useState(0)
  let [result , finalResult] = useState(0)

  useEffect(()=>{
    async function fetchData(){ 
      const questions: questiontype[] = await details(5, 'easy');
      console.log(questions);
      setQuiz(questions)
    }
    fetchData();
  },[]);

  const submit = (e:React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    
    
    let currentQues:questiontype = Quiz1[currentStep]

    console.log("ABC "+currentQues.correct_answer + "abc " + userAns )


    if(userAns === currentQues.correct_answer ){
      finalResult(++result)
    }


    if(currentStep !== Quiz1.length-1)
     setCurrentStep(++currentStep);
    else { 
      alert("Quiz submited");
      alert("Your Quiz result is " + result + " out of "+ Quiz1.length)
      setCurrentStep(0);
      finalResult(0);
    }
  }
  if(!Quiz1.length)
    return <h3>LOADING...</h3>

  return (
    <div className = 'App'>
      <h1>QUIZ APP</h1>
      <QueCard 
        option = {Quiz1[currentStep].option}
        question = {Quiz1[currentStep].question}
        callback={submit}

      />
    </div>
  );
}

export default App;
