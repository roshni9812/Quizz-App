import {useState, useEffect} from 'react';

export default function QuestionTimer({timeOut, onTimeout, mode}){
    const [remainingTime, setRemainingTime]= useState(timeOut);

    useEffect(()=>{
        console.log('setting timeout');
        const timer=setTimeout(onTimeout, timeOut);
        return()=>{
            clearTimeout(timer);
        };

    },[timeOut, onTimeout]);


    useEffect(()=>{
        console.log('setting interval');
        const interval = setInterval(()=>{
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
        return()=>{
            clearInterval(interval);
        };
    },[]);

    return (<progress id="question-time" max={timeOut} value={remainingTime}
    className={mode}
    />
);
}