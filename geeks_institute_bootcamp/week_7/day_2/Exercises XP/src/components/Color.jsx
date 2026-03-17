import { useEffect, useState } from "react";

function Color() {
    const [favoriteColor, setFavoriteColor] = useState("red");

    const hundlColor = () => {
        const newColor = "blue";
        setFavoriteColor(newColor);
    }

    useEffect(() => {
        console.log("useEffect reached")
    }, []);

    return (
        <>
            <h3>Mt Favorite Color is {favoriteColor}</h3>
            <button onClick={hundlColor}>Change Color</button>
        </>
    )
}

export default Color;