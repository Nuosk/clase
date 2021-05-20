import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Iphone from "./components/Iphone";
import Ipad from "./components/Ipad";
import Imac from "./components/Imac";
import Grid1 from "./components/Grid1";
import Grid2 from "./components/Grid2";
import Grid3 from "./components/Grid3";
import Grid4 from "./components/Grid4";
import Grid5 from "./components/Grid5";
import Grid6 from "./components/Grid6";
import Menu from "./components/Menu";
//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  return (
    <>
      <div className="App">
        <div className="flexBox">
          <Iphone />
          <Ipad />
          <Imac />

          <div className="grid-container">
            <div className="grid-item">
              <Grid1 />
            </div>

            <div className="grid-item">
              <Grid2 />
            </div>
            <div className="grid-item">
              <Grid3 />
            </div>
            <div className="grid-item">
              <Grid4 />
            </div>
            <div className="grid-item">
              <Grid5 />
            </div>
            <div className="grid-item">
              <Grid6 />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default App;
