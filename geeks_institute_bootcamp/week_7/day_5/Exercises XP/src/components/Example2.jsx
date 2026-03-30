import React from "react";
import data from '../data/data.json';

class Example2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Example 2</h1>

        {data.Skills.map((item, index) => (
          <div key={index}>
            <h2>{item.Area}</h2>

            {item.SkillSet.map((skill, i) => (
              <li key={i}>
                {skill.Name} {skill.Hot ? "🔥" : ""}
              </li>
            ))}
          </div>
        ))}

      </div>
    );
  }
}

export default Example2;