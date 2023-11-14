import "./Pokemon.css";

const Pokemon = (props) => {
    return (
        <ul className="Pokemon">
            <li className="name">{props.data.name}</li>
            <li className="sprite">
                <img src={props.data.sprites.front_default} alt="Pokémon sprite"/>

            </li>
            <li className="type">
                {props.data.types.map(val => {
                    return (
                        <div>
                            {val.type.name}
                        </div>
                    )
                })}
            </li>
        </ul>
    )
}

export default Pokemon;