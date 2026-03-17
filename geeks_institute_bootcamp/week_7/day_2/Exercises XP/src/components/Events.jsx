import { useState } from "react";

const ClickMe = () => {
    alert("I was clicked");
}

const hundelKeyDown = (event) => {
    if (event.key == 'Enter') {
        const content = event.target.value;
        alert(`The Enter key was pressed, your input is : ${content}`);
    }

}


function Events() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const hundelToggle = () => {
        console.log("je suis dans hundelToggle")
        console.log(`isToggleOn : ${isToggleOn}`);

        setIsToggleOn(!isToggleOn);

        console.log(`isToggleOn : ${isToggleOn}`);
    }

    return (
        <>
            <input type="text" placeholder="Press the Enter key !" onKeyDown={hundelKeyDown} />
            <button onClick={ClickMe}>Click me</button>

            <div style={{ border: '1px solid black', margin: '10px 20px' }}>
                <h3>Exercice 9:</h3>
                <button onClick={hundelToggle}>{isToggleOn ? "ON" : "OFF"}</button>
            </div>
        </>
    )
}

export default Events;