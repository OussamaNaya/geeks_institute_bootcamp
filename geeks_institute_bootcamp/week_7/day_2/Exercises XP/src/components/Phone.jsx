import { useState } from "react";

function Phone() {
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState("2020");

    const changeColor = () => {
        const newColor = "blue";
        setColor(newColor);
    }

    return (
        <>
            <h2>My phone is a {brand}</h2>
            <h4>It is a {color} {model} from {year}</h4>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default Phone;