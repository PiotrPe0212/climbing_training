import React, {useState, useEffect} from 'react'
import styles from './InputComp.module.css';
 import questionArray from '../ResultData/ResultData'
function InputComp  ({state, question, answerType, answers, index, pageNumber}){

  const [inputData, setInput] = useState(["initial"])
  const [warning, setWarning]= useState(styles.true)

  const changeValue =(answer)=>{
if(answerType != 'range'){

     const targetElement = document.getElementById(answer)
     if( targetElement.checked == false){
      targetElement.checked = true
       setWarning(styles.true)
     }
     else if(targetElement.checked == true){
      targetElement.checked = false
      setWarning(styles.false)
     }
      setInput(answer)
}
}

const changeValueRange =(e)=>{
  setInput(e.target.value)
  setWarning(styles.true)
}

 useEffect(()=>{
   const checkAnswer = questionArray[index].userAnswer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
 if((checkAnswer == undefined 
  || checkAnswer == '') 
  && state == false && inputData == 'initial' )
 {
setWarning(styles.false)
 }
 else{
  setWarning(styles.true)

  triggerAnswer()
 }

 }
 )

const triggerAnswer=()=>{
  if(inputData != "initial"){
    const targetElement = document.getElementById(inputData)
if(answerType === 'checkbox'){
    if(targetElement.checked == true){
      questionArray[index].userAnswer.push(inputData)
    }
else if(targetElement.checked == false){
  let finding = questionArray[index].userAnswer.findIndex(el=>{
    return el === inputData
      })
        questionArray[index].userAnswer.splice(finding,1)
        setInput('initial')
}
}
else if(answerType === 'radio'){

  targetElement.checked == true? questionArray[index].userAnswer = inputData 
  : (()=>{
    questionArray[index].userAnswer = undefined 
    setInput('initial')})()
  }

else {
    questionArray[index].userAnswer = inputData
}
  }
}


const answerChecked=(answer)=>{
  if( inputData == "initial"){

  if(answerType == "radio"){
  if(answer == questionArray[index].userAnswer ){

    return true}
  }
  if(answerType == "checkbox"){
      let ans 


      questionArray[index].userAnswer.map((userAns)=>
      {

        if(answer == userAns){
          ans = true
        }
      })
      return ans
    }
  }
  }
  const numberChecked = ()=>{
    if(inputData == "initial"){
      return questionArray[index].userAnswer
    }
    else{
      return inputData
    }
  }

    return (
        <div className={styles.InputComp}>{ 
          <form key ={index+question} className ={question}>
        <label className={warning}>{question}</label>
             { answers.map( (answer) =>
                <div  className={styles.InputAnswer} key={index +answerType +answer} 
                onClick={()=>changeValue(answer)}
                >
                <div>
                
               {(function(){
            
                if(answerType=== 'range')
                {
                  return (<div><input name={question} 
                  type={answerType} 
                  key={answer}
              value ={numberChecked()}
                  onChange={changeValueRange}
                  min="5" max="80"
                 />
                  {inputData!='initial'? inputData :questionArray[index].userAnswer}</div>)
                }

                else
                {
                  return (<input  name={question} 
                type={answerType} 
                id={answer}
                key={answer}
                value={answer}
                checked ={answerChecked(answer)}
                disabled       
              />)
                }
               })() }
                
                </div>
                <label>{ answer}</label>
                </div>
              )}
              </form>
            }
        </div>
        )
             }
    
export default InputComp