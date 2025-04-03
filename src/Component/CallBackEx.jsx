import { useCallback, useState } from "react";
import Button from "./Button";

function CallBackEx() {
    console.log('Call Back called')
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count])
    return (
        <>
            <p>Count:{count}</p>
            <p>Number:{number}</p>
            <button onClick={() => setNumber(number + 1)}>Buttontag</button>
            <Button handleClick={increment} Text={"ButtonComponet"} />
        </>
    )
}
export default CallBackEx;