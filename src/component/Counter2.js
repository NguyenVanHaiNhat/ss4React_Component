import useIncrement from "../Hooks/useIncrement";

export default function Counter2(){
    const [count, increase] = useIncrement(1);
    return (
        <div>
            <h2>Count 2 : {count}</h2>
            <button onClick={increase}>Add 2</button>
        </div>
    )
}