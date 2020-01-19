import React from 'react'
import style from './List.module.css';
import InputComp from '../InputComp/InputComp';
import questionArray from '../ResultData/ResultData'

function List({page, state, pageNumber}) {
    console.log(pageNumber * page)

    const generatingList = (e) => {
        const elementsOnPage = questionArray.length / pageNumber
        console.log(elementsOnPage)
        if (e < elementsOnPage * page && e >= elementsOnPage * (page - 1)) {
            return true
        } else {
            return false
        }

    }
    return (
        <div className={style.List} key ={"List" + page}>

            {questionArray.map((currentValue, index) => generatingList(index)
                ? <InputComp
                        state={state}
                        key={index}
                        question={currentValue.question}
                        answerType={currentValue.answerType}
                        answers={currentValue.answers}
                        index={index}
                        pageNumber={page}/>
                : null)
}

        </div>
    )
}

export default List
