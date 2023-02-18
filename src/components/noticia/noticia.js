import Imagem from "./imagem";
import Texto from "./texto";

function Noticia(props) {
    return (
        <div className="row mb-5">
            <div className="col-3">
                <Imagem img={props.img}/>
            </div>
            <div className="col-9">
                <Texto titulo={props.titulo} texto={props.texto}/>
            </div>
        </div>
    )
}

export default Noticia;