import Imagem from "../pokemon/imagem";
import Name from "./name";
import Peso from "./peso";
import Tipo from "./tipo";

function Card(props) {
    return (
        <div className="card">
            <div className="card-body d-flex align-items-center flex-column p-5 bg-light" >
                <Name name={props.pokemon.name} number = {props.pokemon.id}/>
                <Imagem img={props.pokemon.sprites.front_default} />
                <Peso peso={props.pokemon.weight}/>
                <Tipo tipo={props.pokemon.types}></Tipo>
            </div>
        </div>
    )
}

export default Card