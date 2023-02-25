function Tipo(props) {
    return (
        <div className="row">
            {props.tipo.map((tipo,index) => {
                return (
                    <div className="col" key={index}>
                        <div className="bg-success p-3 text-white">{tipo.type.name}</div>
                    </div>
                );
            }
            )}
        </div>
    )
}

export default Tipo