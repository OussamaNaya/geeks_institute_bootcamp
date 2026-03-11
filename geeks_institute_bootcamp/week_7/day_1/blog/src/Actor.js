import './Actor.css'

function Actor(props)
{
    const actors = props.actors;

    return ( 
        actors.map(actor => (
            <ul className="UlCenter">
                <img src={actor.image} alt={`image of ${actor.lastName} actor`}/>
                <li style={{border: '1px solid black', backgroundColor: '#4169E1'}}>{actor.lastName}</li>
                <li style={{border: '1px solid black', backgroundColor: '#7B68EE'}}>{actor.firstName}</li>
            </ul>
        ))
    )

    console.log(actors);
    console.log("Actor component ..!");
}

export default Actor;