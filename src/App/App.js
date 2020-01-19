import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from '../Header/Header'
import InitialText from '../InitialText/InitialText'
import ResultText from '../ResultText/ResultText'
import List from '../List/List'
import Button from '../Button/Button'
import Footer from '../Footer/Footer'
import questionArray from '../ResultData/ResultData'
console.clear()
//LICZNIK STRON
function App() {
    const [count,
        setCount] = useState(0)
    const [page,
        setPage] = useState('initial');
    const [state,
        setState] = useState(true)
    const [pageNumber,
        setPageNumber] = useState(3)

    const ref = useRef(null);
    //POCZYTAC O TYM

    useEffect(() => {

        const width = ref.current
            ? ref.current.offsetWidth
            : 0;
        console.log('width', width);
        const elementsOnPage = Math.ceil(width / 200) - 3
        let pageNum

        if (count === 0) {
            setPage('initial')
            pageNum = Math.floor(questionArray.length / elementsOnPage)
            setPageNumber(pageNum)

            console.log(pageNumber)
        } else if (count >= 1 && count <= pageNumber) {
            setPage('list')
        } else if (count === pageNumber + 1) {
            setPage('result')
        } else if (count > pageNumber + 1) {
            setCount(1)
            setPage('list')
        }
        console.log(pageNumber)
    }, [count, ref.current])

    function buttonAction(type) {
        let actualState = true
        let answersNumber = 0
        const elementsOnPage = questionArray.length / pageNumber
        console.log(page + count)
        if (page == 'list') {
            console.log("popop" + actualState)
            questionArray.map((question, index) => {

                if (index < elementsOnPage * count && (question.userAnswer == undefined || question.userAnswer == '')) {
                    actualState = false
                    setState(actualState)
                    console.log("totu" + index + count)
                } else if (index < elementsOnPage * count && (question.userAnswer != undefined && question.userAnswer != '')) {
                    answersNumber++
                }

            })
            if (answersNumber == elementsOnPage * count) {
                actualState = true
                setState(actualState)
            }
            if (actualState == true && type == 'next') {
                console.log(actualState)
                setCount(count + 1)
            } else if (type == 'prev') {
                setCount(count - 1)
                actualState = true
                setState(actualState)
            }
            console.log("popop" + actualState)
        } else {
            if (type == 'next') {
                setCount(count + 1)
            }

        }

    }

    return (
        <div className="App" ref={ref}>

            <Header/>
            <span id="icon"/>
            <div id="main">
                {(() => {
                    switch (page) {
                        case 'initial':
                            return <div key={page} id={page}><InitialText/>
                                <div
                                    onClick={() => {
                                    buttonAction('next')
                                }}>
                                    <Button value={count} text ={'Start'}/>
                                </div>
                            </div>;
                        case 'list':
                            return <div key={page} id={page}>

                                <List page ={count} state={state} pageNumber={pageNumber}/>
                                <div>
                                    <div
                                        onClick={() => {
                                        buttonAction('prev')
                                    }}>
                                        <Button value={count} descr ={'Wróć'}/>
                                    </div>
                                    <div
                                        onClick={() => {
                                        buttonAction('next')
                                    }}>
                                        <Button value={count} descr ={'Dalej'} count={count} state={state}/></div>
                                </div>
                            </div>;
                        case 'result':
                            return <div key={page} id={page}><ResultText/>
                                <div
                                    onClick={() => {
                                    buttonAction('next')
                                }}>
                                    <Button value={count} descr ={'Powtórz'}/>
                                </div>
                            </div>;
                        default:
                            return <div key="initial" id="initial"><InitialText/>
                                <div
                                    onClick={() => {
                                    buttonAction('next')
                                }}>
                                    <Button value={count} descr ={'Start'}/>
                                </div>
                            </div>;
                    }
                })()}

            </div>

            <Footer/>
        </div>
    );
}

export default App;
