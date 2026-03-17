import { useState } from "react";

function Car(props) {
    const { name, model } = props;
    const [color, setColor] = useState("red");

    return (
        <div>
            <h3>This Car name it {name} and model it {color} {model}</h3>
        </div>
    );
}

export default Car;