import React from "react";

const useState = React.useState;

const ButtonClickCounter = () => {
    const [counter, setCounter] = useState(0);
    const onButtonClick = () => {
        setCounter(counter + 1);
    }
    return (
        <div style={{ margin: "20px" }}>
            <button onClick={onButtonClick}>
                Click Me !
            </button>
            <span>current counter : {counter}</span>
        </div>
    );
}

export default ButtonClickCounter;