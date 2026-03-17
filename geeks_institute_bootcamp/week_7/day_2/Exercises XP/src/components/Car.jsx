import { useState } from "react";
import Garage from './Garage';

function Car(props) {
    const { name, model } = props;
    const [color, setColor] = useState("red");

    return (
        <div>
            <Garage size="small" />
            <h5>This Car name it {name} and model it {color} {model}</h5>
        </div>
    );
}

export default Car;