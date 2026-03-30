import React from "react";
import data from '../data/data.json';
import { NavLink } from "react-router-dom";


class Example3 extends React.Component {
  render() {
    return (
            <div>
                <h1>Example 3</h1>
                {
                    data.Experiences.map((item, index) => (
                        <div key={index}>
                            <img src={item.logo} alt="" /><br />
                            <NavLink to={item.url}>{item.companyName}</NavLink>
                            <h4>{item.roles[0].title}</h4>
                            <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                            <hr />
                        </div>
                    ))
                }
            </div>
    );
  }
}

export default Example3;