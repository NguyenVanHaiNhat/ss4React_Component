import useIncrement from "../Hooks/useIncrement";

export default function Counter1(){
    const [count, increase] = useIncrement(1)
    return (
        <div>
            <h2>count 1 : {count}</h2>
            <button onClick={increase}>Add 1</button>
        </div>
    )
}