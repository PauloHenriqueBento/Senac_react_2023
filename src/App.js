import React from "react";
import Noticia from "./components/noticia/noticia";

function App() {
  const [noticias, setNoticias] = React.useState([]);

  function carregar() {
    setNoticias([{
      imagem: "https://picsum.photos/200/200?grayscale",
      titulo: "Texto 1",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie pellentesque erat. Sed gravida rutrum eros sed posuere. Sed ullamcorper congue pretium. Etiam ut porta leo, nec maximus ex. Nunc hendrerit enim fermentum, pharetra massa id, posuere turpis. Aenean lacus nisl, finibus pulvinar ipsum vel, faucibus consectetur ante. Nulla dapibus, est ac ornare consectetur, massa tortor egestas odio, nec facilisis velit mi quis risus."
    },
    {
      imagem: "https://picsum.photos/200/200",
      titulo: "Texto 2",
      texto: "Integer porta augue ipsum, ut convallis tellus mollis nec. Donec varius tortor a nunc consectetur, vitae euismod risus scelerisque. Duis eu ullamcorper mauris, a porta erat. Fusce enim sem, ornare nec pellentesque nec, laoreet sed orci. Maecenas eget nisi mollis, congue ante ut, mattis velit. Vestibulum ullamcorper metus volutpat, volutpat odio ac, malesuada diam. Quisque vitae mi ultricies, vehicula lectus sed, imperdiet purus. Praesent at tincidunt urna, pretium imperdiet massa. Aenean fermentum, mauris vitae aliquet egestas, lectus lectus suscipit elit, in tempus ipsum leo consequat mi. Integer quis pharetra massa, a iaculis tortor."
    }])
  }

  return (
    noticias.length >= 2 ?
      <div className="container">
        <Noticia
          titulo={noticias[0].titulo}
          texto={noticias[0].texto}
          img={noticias[0].imagem}
        />
        <Noticia
          titulo={noticias[1].titulo}
          texto={noticias[1].texto}
          img={noticias[1].imagem}
        />
      </div>
      :
      <div className="container">
        <button onClick={carregar}>Carregar noticias</button>
        <div>Sem noticias</div>
      </div>
  );
}

export default App;