import React from 'react';

//You can also use Object Destructuring
const Car = (props) => {
    let { name, carBrand } = props;
    if(name == null || carBrand == null)
    {
        name = "Tiguan";
        carBrand = "Volkswagens";
    }
    return <h2 className='title'>Hi, I am a Car {carBrand}! My name is {name}</h2>;

}

export default Car;