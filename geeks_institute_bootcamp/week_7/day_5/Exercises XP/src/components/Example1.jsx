import React from "react";
import data from '../data/data.json'

class Example1  extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Example 11</h1>
                {
                    data.SocialMedias.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </div>
        )
    }
}

export default Example1;