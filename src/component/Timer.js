import {useEffect, useState} from "react";
export default function Timer(){
    let [timer, setTimer] = useState(10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevCount => prevCount - 1);
        }, 1000)
        if (timer <= 0){
            alert("Time's up")
        }
        return () => clearInterval(interval);
    }, [timer]);
    return(
        <h1>Time : {timer}</h1>
    )
}