import React from 'react';
import './Exercise.css'

class Exercise extends React.Component{
    render(){
        return(
            <>
                <h1 style={style_header}>This is a Header</h1>
                <p className='para'>This is a Paragraph</p> 
                <a href="">This is a Link</a> 

                <h3>This is a Form:</h3>  
                <label htmlFor="">Enter your name:</label> 
                <div>
                    <input type="text"/> 
                    <button>Submit</button>
                </div>  

                <h5>Here is an Image</h5>   
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="react logo" />

                <ul>
                    <h5>This is a List</h5>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>    
                </ul> 
            </>
        )
    }
}

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};


export default Exercise;